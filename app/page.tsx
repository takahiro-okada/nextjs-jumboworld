import Hero from "@/app/_components/Hero";
import DevelopmentSupport from "@/app/_components/DevelopmentSupport";
import { getWorkList } from "@/app/_libs/microcms";
import WorksTop from "@/app/_features/works/components/WorksTop";
import ColumnTop from "@/app/_features/column/components/ColumnTop";

export default async function Home() {
  const { contents: works } = await getWorkList();
  const topWorks = works.slice(0, 3);

  return (
    <main>
      <Hero />
      <DevelopmentSupport />
      <WorksTop works={topWorks} />
      <ColumnTop />
    </main>
  );
}
