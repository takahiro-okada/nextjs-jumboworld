import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/app/_libs/utils";
import Sidebar from "@/app/_features/column/components/Sidebar";
import { getBlogDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk?: string;
  }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getBlogDetail(resolvedParams.slug, {
    draftKey: (await searchParams).dk,
  }).catch(notFound);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ""],
    },
  };
}

export default async function BlogPostPage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const data = await getBlogDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams?.dk,
  }).catch(notFound);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{formatDate(data.createdAt)}</span>
                  </div>
                  {/* <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-2" />
                    <span>山田 太郎</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>読了時間: 5分</span>
                  </div> */}
                </div>
                {data.category ? (
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={data.category.id}
                      className="px-2 py-1 bg-gray-100 rounded text-xs"
                    >
                      {data.category.name}
                    </Link>
                  </div>
                ) : null}
              </div>

              {/* メイン画像 */}
              <div className="mb-8">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  {data.thumbnail && data.thumbnail.url ? (
                    <Image
                      src={data.thumbnail.url}
                      alt="Thumbnail"
                      className="aspect-video object-cover"
                      width={data.thumbnail.width}
                      height={data.thumbnail.height}
                    />
                  ) : (
                    <Image
                      src="/images/no-image.png"
                      className="aspect-video object-cover"
                      alt="No Image"
                      width={1200}
                      height={630}
                    />
                  )}
                </div>
              </div>

              {/* 記事本文 */}
              <div className="prose max-w-none mb-8 microcms-article">
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              </div>

              {/* 著者情報 */}
              {/* <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg"
                      alt="山田 太郎"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">山田 太郎</h3>
                    <p className="text-sm text-gray-600">
                      JUMBO
                      WORLDのウェブデザイナー。知多半島出身で、地域の魅力を発信することに情熱を注いでいます。
                    </p>
                  </div>
                </div>
              </div> */}

              {/* ナビゲーション */}
              <div className="flex justify-between items-center border-t border-gray-200 pt-8">
                {/* TODO: ナビゲーションの実装 */}
                {/* <Link
                  href="/blog/prev"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  ← 前の記事
                </Link> */}
                <Link
                  href="/column"
                  className="text-sm text-gray-600 hover:text-gray-900 w-full text-center
                  "
                >
                  一覧に戻る
                </Link>
                {/* TODO: ナビゲーションの実装 */}
                {/* <Link
                  href="/blog/next"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  次の記事 →
                </Link> */}
              </div>
            </div>
          </main>

          <Sidebar />
        </div>
      </div>
    </div>
  );
}
