import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import Sidebar from "@/app/_features/blog/components/Sidebar";

export const runtime = "edge";

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              {/* ブログ記事ヘッダー */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">
                  知多半島のイベントに参加して感じたこと
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>2024年12月1日</span>
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-2" />
                    <span>山田 太郎</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>読了時間: 5分</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                    #イベント
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                    #知多半島
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                    #地域活性化
                  </span>
                </div>
              </div>

              {/* メイン画像 */}
              <div className="mb-8">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="知多半島のイベントの様子"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 記事本文 */}
              <div className="prose max-w-none mb-8">
                <p>
                  先日、知多半島で開催された地域活性化イベントに参加してきました。
                  このイベントは地元の特産品や文化を紹介し、観光客を呼び込むことを目的としています。
                  参加して感じたことや、イベントの様子についてお伝えしたいと思います。
                </p>

                <h2>イベントの概要</h2>
                <p>
                  イベントは知多半島の中心部にある広場で開催され、地元の農家や職人が出店していました。
                  新鮮な野菜や果物、手作りの工芸品など、知多半島の魅力が詰まった商品が並んでいました。
                  また、伝統芸能のステージや、地元の食材を使った料理教室なども行われ、多くの人で賑わっていました。
                </p>

                <h2>感じたこと</h2>
                <p>
                  このイベントに参加して、改めて知多半島の魅力を再発見することができました。
                  特に印象に残ったのは、地元の人々の温かさと、地域を盛り上げようとする熱意です。
                  出店者の方々は自分たちの商品について熱心に説明してくださり、
                  その姿勢から地域への愛着が強く感じられました。
                </p>

                <p>
                  また、このようなイベントが地域活性化にどのように貢献しているのかも実感しました。
                  観光客だけでなく、地元の人々も多く参加しており、
                  コミュニティの絆を強める良い機会にもなっているようでした。
                </p>

                <h2>今後の展望</h2>
                <p>
                  今回のイベントの成功を踏まえ、今後も定期的にこのような取り組みが行われることを期待しています。
                  さらに、SNSなどを活用して情報発信を強化することで、
                  より多くの人に知多半島の魅力を知ってもらえるのではないでしょうか。
                </p>

                <p>
                  私たちJUMBO WORLDとしても、このような地域活性化の取り組みを
                  ウェブサイトやECサイトの制作を通じてサポートしていきたいと考えています。
                  地域の魅力を最大限に引き出し、多くの人に届けられるよう、
                  これからも尽力していきます。
                </p>
              </div>

              {/* 著者情報 */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
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
              </div>

              {/* ナビゲーション */}
              <div className="flex justify-between items-center border-t border-gray-200 pt-8">
                <Link
                  href="/blog/prev"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  ← 前の記事
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  一覧に戻る
                </Link>
                <Link
                  href="/blog/next"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  次の記事 →
                </Link>
              </div>
            </div>
          </main>

          <Sidebar />
        </div>
      </div>
    </div>
  );
}
