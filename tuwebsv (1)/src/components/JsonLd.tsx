// Server component: renders one <script type="application/ld+json"> per object.
export default function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  return (
    <>
      {data.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  );
}
