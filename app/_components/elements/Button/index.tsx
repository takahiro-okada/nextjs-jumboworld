import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

export function Button(props: Props) {
  return (
    <Link
      href={props.href}
      className="bg-black text-white md:text-lg px-4 py-3 rounded-lg hover:bg-gray-800 font-bold text-center"
    >
      {props.children}
    </Link>
  );
}
