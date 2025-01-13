type TagProps = {
  tag: string;
};

export default function Tag({ tag }: TagProps) {
  return (
    <span className="px-2 py-1 text-xs bg-black text-white rounded md:text-base">
      {tag}
    </span>
  );
}
