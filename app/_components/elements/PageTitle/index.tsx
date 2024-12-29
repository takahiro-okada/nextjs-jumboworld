export default function PageTitle({
  title,
  description,
}: Readonly<{
  title: string;
  description?: string;
}>) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
