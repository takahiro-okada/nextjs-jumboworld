export default function CompanyPage() {
  const companyInfo = [
    { label: "名称", value: "JUMBO WORLD" },
    { label: "名称", value: "JUMBO WORLD" },
    { label: "名称", value: "JUMBO WORLD" },
    { label: "名称", value: "JUMBO WORLD" },
    { label: "名称", value: "JUMBO WORLD" },
    { label: "名称", value: "JUMBO WORLD" },
    { label: "名称", value: "JUMBO WORLD" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">事業概要</h1>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <dl className="space-y-6">
            {companyInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-6"
              >
                <dt className="w-full sm:w-1/4 text-sm font-medium text-gray-500 mb-1 sm:mb-0">
                  {info.label}
                </dt>
                <dd className="w-full sm:w-3/4 text-sm text-gray-900">
                  {info.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
