import { Hero } from "@/app/_components/Hero";
import DevelopmentSupport from "@/app/_components/DevelopmentSupport";
import Works from "@/app/_components/Works";
import { Column } from "@/app/_features/blog/components/Column";

export default function Home() {
  return (
    <main>
      <Hero />
      <DevelopmentSupport />
      <Works />
      <Column />
    </main>
  );
}
