import Image from "next/image";

export function CompanyHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <Image
        src="/images/company-hero.jpg"
        alt="JUMBO WORLD office"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">JUMBO WORLD</h1>
        <p className="text-xl md:text-2xl">
          知多半島から世界へ、革新的なデジタルソリューションを
        </p>
      </div>
    </section>
  );
}
