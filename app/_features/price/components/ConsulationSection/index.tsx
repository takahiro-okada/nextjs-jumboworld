import Button from "@/app/_components/elements/Button";
import { MessageSquare } from "lucide-react";

export default function ConsultationSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center justify-center">
        <MessageSquare className="w-12 h-12  mr-4" />
        <h2 className="text-3xl font-bold">受託開発のご相談</h2>
      </div>
      <p className="text-center text-gray-600 mt-8">
        Web制作会社様、事業会社様向けに、フロントエンド開発やバックエンド開発の受託案件も承っております。
        <br />
        プロジェクトの規模や要件に応じて、柔軟に対応いたします。
      </p>
      <div className="text-center mt-10">
        <Button href="/contact">お問い合わせ</Button>
      </div>
    </div>
  );
}
