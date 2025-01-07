import Image from "next/image";

const team = [
  {
    name: "山田 太郎",
    role: "代表取締役",
    image: "/images/team-member-1.jpg",
  },
  {
    name: "佐藤 花子",
    role: "クリエイティブディレクター",
    image: "/images/team-member-2.jpg",
  },
  {
    name: "鈴木 一郎",
    role: "リードエンジニア",
    image: "/images/team-member-3.jpg",
  },
  {
    name: "田中 美咲",
    role: "マーケティングマネージャー",
    image: "/images/team-member-4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">チームメンバー</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
