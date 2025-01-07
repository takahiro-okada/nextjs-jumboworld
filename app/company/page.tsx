import MissionVisionValues from "../_features/company/components/MissionVisionValues";

export default function CompanyPage() {
  const companyInfo = [
    { label: "名前", value: "JUMBO WORLD" },
    { label: "所在地", value: "愛知県半田市板山町3-88-10" },
    { label: "電話番号", value: "070-8525-1223" },
    { label: "メールアドレス", value: "info@jumboworld.net" },
    {
      label: "事業内容",
      value: "ホームページ制作、ECサイト制作、SEO対策、LINE公式アカウント",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center">会社概要</h1>

        <div className="bg-white rounded-lg shadow-sm p-4  md:p-8 mt-8">
          <dl className="space-y-6">
            {companyInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-4 flex-row sm:items-center border-b border-gray-100 pb-6"
              >
                <dt className="w-1/4 text-base font-bold mb-1 sm:mb-0">
                  {info.label}
                </dt>
                <dd className="w-3/4 text-base">{info.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16">
          <MissionVisionValues />
        </div>
      </div>
    </div>
  );
}
