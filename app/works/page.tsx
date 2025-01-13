import PageTitle from "@/app/_components/elements/PageTitle";
import { getWorkList } from "@/app/_libs/microcms";
import WorksGrid from "@/app/_features/works/components/WorksGrid";

export default async function WorksPage() {
  const { contents: works } = await getWorkList();

  return (
    <>
      <main className="max-w-7xl mx-auto">
        <div className="mt-10">
          <PageTitle title="制作実績" />
        </div>
        <div className="bg-gray-50 mt-12 px-4 sm:px-6 lg:px-8">
          <WorksGrid works={works} className="mb-12" showFilter={true} />

          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              もっと見る
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
