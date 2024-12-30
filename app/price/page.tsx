import PriceSection from "@/app/_features/price/components/PriceSection";
import ConsultationSection from "@/app/_features/price/components/ConsulationSection";
import ProductionFlow from "@/app/_features/price/components/ProductionFlow";

export default function PricingPage() {
  const webDevelopmentPlans = [
    {
      name: "ベーシックプラン",
      price: "300,000",
      description: "小規模ビジネス向けの基本的なウェブサイト",
      features: [
        "レスポンシブデザイン",
        "5ページまで",
        "お問い合わせフォーム",
        "SEO基本対策",
        "SNSリンク統合",
      ],
    },
    {
      name: "スタンダードプラン",
      price: "600,000",
      description: "中規模ビジネス向けの機能豊富なウェブサイト",
      features: [
        "レスポンシブデザイン",
        "10ページまで",
        "お問い合わせフォーム",
        "高度なSEO対策",
        "ブログ機能",
        "Google Analytics設定",
        "SNS連携",
      ],
    },
    {
      name: "プレミアムプラン",
      price: "1,000,000",
      description: "大規模ビジネス向けのカスタムウェブサイト",
      features: [
        "フルカスタムデザイン",
        "無制限ページ",
        "カスタムフォーム",
        "包括的SEO戦略",
        "CMS統合",
        "多言語対応",
        "サードパーティAPI統合",
        "高度なアナリティクス",
      ],
    },
  ];

  const shopifyPlans = [
    {
      name: "Shopifyスタータープラン",
      price: "400,000",
      description: "小規模ECサイト向けの基本的なShopify構築",
      features: [
        "Shopify基本設定",
        "最大50商品",
        "レスポンシブデザイン",
        "基本的な支払い・配送設定",
        "SEO基本対策",
      ],
    },
    {
      name: "Shopifyビジネスプラン",
      price: "800,000",
      description: "中規模ECサイト向けの機能豊富なShopify構築",
      features: [
        "Shopify高度設定",
        "最大500商品",
        "カスタムテーマ開発",
        "複数の支払い・配送オプション",
        "高度なSEO対策",
        "マーケティング機能統合",
        "基本的なアプリ連携",
      ],
    },
    {
      name: "Shopifyエンタープライズプラン",
      price: "1,500,000",
      description: "大規模ECサイト向けのフルカスタムShopify構築",
      features: [
        "フルカスタムShopify開発",
        "無制限商品",
        "高度なカスタムテーマ",
        "カスタム機能開発",
        "複雑な在庫・注文管理",
        "マルチチャネル統合",
        "高度なアプリ連携・カスタマイズ",
        "パフォーマンス最適化",
      ],
    },
  ];

  const webExpertiseInfo = `
    JUMBO WORLDは、最新のWeb技術を駆使したヘッドレスCMS開発をメインに行っています。
    ヘッドレスCMSを活用することで、高速で柔軟性の高いWebサイトを実現し、
    コンテンツ管理と表示の分離による効率的な運用を可能にします。
    これにより、お客様のビジネスニーズに最適化されたカスタムソリューションを提供いたします。
  `;

  const shopifyExpertiseInfo = `
    当社の代表は、Shopify Experts企業での豊富な勤務経験を持ち、
    Shopify Plusを含む大規模かつ複雑なECサイトの開発実績があります。
    この経験を活かし、小規模から大規模まで、あらゆる規模のECサイトに対応可能です。
    Shopify Plusの高度な機能や大規模な取引量にも精通しており、
    成長するビジネスに合わせた柔軟なソリューションを提供いたします。
  `;

  const webMaintenanceInfo = `
  Webサイトの継続的な成功には、定期的なメンテナンスと迅速なサポートが不可欠です。
  当社では、月額制の保守運用サービスをご用意しております。
  このサービスには、定期的な更新、セキュリティチェック、パフォーマンス最適化、
  そして緊急時の迅速な対応が含まれます。料金は、サイトの規模や要件に応じて
  月額30,000円〜150,000円で、お客様のニーズに合わせてカスタマイズいたします。
  安定したサイト運用と、常に最高のパフォーマンスを維持するために、
  ぜひ当社の保守運用サービスをご検討ください。
`;

  const shopifyMaintenanceInfo = `
  ECサイトの成功には、継続的な最適化と迅速なサポートが重要です。
  当社のShopify保守運用サービスは、在庫管理、注文処理の効率化、
  新機能の実装、セキュリティアップデート、そして売上向上のための
  データ分析と改善提案を含みます。料金は、ストアの規模や要件に応じて
  月額50,000円〜200,000円で、お客様のビジネスに合わせてカスタマイズいたします。
  ECサイトの安定運用と成長をサポートする当社のサービスを、ぜひご活用ください。
`;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          料金プラン
        </h1>

        <PriceSection
          title="Webサイト制作"
          description="ビジネスの規模に合わせた最適なWebサイト制作プランをご用意しています。"
          plans={webDevelopmentPlans}
          expertiseInfo={webExpertiseInfo}
          maintenanceInfo={webMaintenanceInfo}
        />

        <PriceSection
          title="Shopify ECサイト構築"
          description="オンラインストアの規模や要件に合わせたShopify構築プランをご提供します。"
          plans={shopifyPlans}
          expertiseInfo={shopifyExpertiseInfo}
          maintenanceInfo={shopifyMaintenanceInfo}
        />

        <ConsultationSection />

        <ProductionFlow />
      </div>
    </div>
  );
}
