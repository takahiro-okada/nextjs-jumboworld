import Hero from "@/app/_components/Hero";
import DevelopmentSupport from "@/app/_components/DevelopmentSupport";
import Works from "@/app/_components/Works";
import ColumnTop from "@/app/_features/column/components/ColumnTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <DevelopmentSupport />
      <Works />
      <ColumnTop />
    </main>
  );
}
