export function Item({ text }: { text: string }) {
  return (
    <div className="@container">
      <div
        className="mb-2 rounded-lg border bg-blue-50 px-4 py-10 text-sm transition-colors hover:bg-blue-100"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></div>
    </div>
  );
}
