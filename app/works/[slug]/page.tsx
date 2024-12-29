import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const runtime = "edge";

export default function WorkDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* メインビジュアル */}
      <div className="w-full h-[50vh] relative bg-gray-200">
        <Image
          src="/placeholder.svg"
          alt="Project main visual"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* プロジェクト概要 */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              #SHOPIFY
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              #DESIGN
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              #PHOTO
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">A社様</h1>
          <p className="text-gray-600 mb-8">常滑のECサイト。</p>
        </div>

        {/* プロジェクト詳細 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 bg-white rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">プロジェクトについて</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                常滑市にある陶器店のECサイトを制作させていただきました。
                伝統的な技術と現代的なデザインの調和を意識し、商品の魅力を最大限に引き出すサイトデザインを心がけました。
              </p>
              <p className="mb-4">
                Shopifyを活用することで、在庫管理から決済まで一貫した管理システムを実現。
                また、商品写真の撮影から、商品説明の作成まで一貫してサポートさせていただきました。
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">プロジェクト情報</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-gray-500">クライアント</dt>
                <dd className="mt-1">A社様</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">カテゴリー</dt>
                <dd className="mt-1">ECサイト制作</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">使用技術</dt>
                <dd className="mt-1">Shopify, HTML, CSS, JavaScript</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* プロジェクト画像 */}
        <div className="space-y-8 mb-16">
          <div className="aspect-video relative">
            <Image
              src="/placeholder.svg"
              alt="Project screenshot 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg"
                alt="Project screenshot 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg"
                alt="Project screenshot 3"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* ナビゲーション */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-8">
          <Link
            href="/works/prev"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            前の制作実績
          </Link>
          <Link href="/works" className="text-gray-600 hover:text-gray-900">
            一覧に戻る
          </Link>
          <Link
            href="/works/next"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            次の制作実績
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
