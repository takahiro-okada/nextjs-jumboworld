import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";
import { groupBy } from "./utils";

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Blog = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: MicroCMSImage;
  createdAt: string;
  category: Category;
  content: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required.");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required.");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });
  return listData;
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.get<Blog>({
    endpoint: `blogs`,
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return detailData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.get<Category>({
    endpoint: `categories`,
    contentId,
    queries,
  });
  return detailData;
};

export const getAllBlogList = async () => {
  const listData = await client.getAllContents<Blog>({
    endpoint: "blogs",
  });

  return listData;
};

export const getAllCategoryList = async () => {
  const listData = await client.getAllContents<Category>({
    endpoint: "categories",
  });

  return listData;
};

export const getBlogListByMonth = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit: 100,
    },
  });
  const monthlyIndex = groupBy(data.contents);
  return {
    props: {
      blog: data.contents,
      monthlyIndex: monthlyIndex,
    },
  };
};

// 特定の年月のブログ記事を取得する関数を追加します。
export const getBlogListByYearMonth = async (date: string): Promise<Blog[]> => {
  const [year, month] = date.split("_");

  if (!year || !month) {
    throw new Error("Invalid date format");
  }

  const startOfMonthTmp = new Date(parseInt(year), parseInt(month) - 1, 1);
  const startOfMonth = new Date(startOfMonthTmp.getTime() - 1);
  const endOfMonth = new Date(parseInt(year), parseInt(month), 0);

  const filters = `publishedAt[greater_than]${startOfMonth.toISOString()}[and]publishedAt[less_than]${endOfMonth.toISOString()}`;

  try {
    const data = await client.getList<Blog>({
      endpoint: "blogs",
      queries: { filters },
    });

    return data.contents;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};
