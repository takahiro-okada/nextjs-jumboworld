import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <Image
              src="/images/logo.png"
              alt="JUMBO WORLD"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto mb-6 sm:mb-0"
            />
            <nav className="w-full sm:w-auto">
              <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-gray-600 transition-colors"
                  >
                    トップ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/works"
                    className="hover:text-gray-600 transition-colors"
                  >
                    制作実績
                  </Link>
                </li>
                <li>
                  <Link
                    href="/column"
                    className="hover:text-gray-600 transition-colors"
                  >
                    コラム
                  </Link>
                </li>
                <li>
                  <Link
                    href="/price"
                    className="hover:text-gray-600 transition-colors"
                  >
                    料金
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-gray-600 transition-colors"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center text-xs sm:text-sm text-gray-500">
            2024 JUMBO WORLD ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
