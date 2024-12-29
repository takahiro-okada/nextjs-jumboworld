import Image from "next/image";
import { Button } from "../elements/Button";

export function Hero() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            知多半島の
            <br className="hidden sm:inline" />
            開発・デザイン事務所
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
            知多半島を拠点としてWEB制作やECサイト構築支援（SHOPIFY）を行っております。少人数のチームで制作を行っていることを強みに丁寧で無駄のないコミュニケーションを実現してお客様のビジネスを加速させます。
          </p>
          <Button href="/contact">お問い合わせ</Button>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/images/hero.jpg"
              alt="JUMBO WORLD"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
