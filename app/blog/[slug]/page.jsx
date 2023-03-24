import DOMPurify from "dompurify";

export default function SinglePost() {
    const description = "<h2>Hellow</h2>"
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-6 mt-3">
      <main
        className="px-2 lg:px-9 bg-gray-100 space-y-3"
        style={{ flex: "5" }}
      >
        <img
          className="w-full pt-3 aspect-video object-cover object-center"
          src="/thumbnail"
          alt="post image"
        />
        <h1 className="text-3xl text-primary font-bold">The title of post</h1>
        <article
          className="prose lg:text-xl"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></article>
      </main>

      <aside
        className="flex flex-col gap-6 bg-gray-100 px-3 py-3"
        style={{ flex: "2" }}
      >
        <h3 className="text-3xl text-primary font-semibold">Related Posts</h3>
      </aside>
    </div>
  );
}
