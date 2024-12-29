export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">お問い合わせ</h1>

        <form className="bg-white shadow-sm rounded-lg p-8">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="furigana"
                className="block text-sm font-medium text-gray-700"
              >
                フリガナ
              </label>
              <input
                type="text"
                id="furigana"
                name="furigana"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-700">
                ご相談方法
              </span>
              <div className="mt-2 space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="consultationType"
                    value="online"
                    className="form-radio"
                    defaultChecked
                  />
                  <span className="ml-2">オンライン</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="consultationType"
                    value="visit"
                    className="form-radio"
                  />
                  <span className="ml-2">ご来店</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                ご相談内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>

            <div className="text-center">
              <button className="bg-black text-white text-lg px-4 py-3 rounded-lg hover:bg-gray-800 font-bold">
                お問い合わせする
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
