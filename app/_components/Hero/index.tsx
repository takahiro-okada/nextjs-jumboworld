"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "@/app/_components/Globe";

import { Button } from "../elements/Button";

export function Hero() {
  return (
    <section className="relative py-12 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            知多半島の
            <br className="hidden sm:inline" />
            開発・デザイン事務所
          </h1>
          <p className="text-sm sm:text-base mt-8 max-w-lg mx-auto md:mx-0">
            知多半島を拠点としてWEB制作やECサイト構築支援（SHOPIFY）を行っております。少人数のチームで制作を行っていることを強みに丁寧で無駄のないコミュニケーションを実現してお客様のビジネスを加速させます。
          </p>
          <div className="mt-10">
            <Button href="/contact">お問い合わせ</Button>
          </div>
        </div>
        <div className="w-full h-60 md:h-auto md:w-1/2 mt-8 md:mt-0 relative">
          <div className="absolute w-full aspect-square mx-auto md:top-[-150px] md:right-[-200px]">
            <Canvas>
              <ambientLight intensity={4} />
              <pointLight position={[10, 10, 10]} />
              <Globe />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
