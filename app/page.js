import Card from "./components/Card";
import Corousel from "./components/Corousel";
import PostList from "./components/PostList";

export default function Home() {
  const blogs = "hii";
  return (
    <main className="">
      <div className="flex flex-wrap m-3 md:m-9 md:space-x-6">
      <Corousel />
      <div className="divider"></div>
      <PostList />
      </div>

      <div className="divider"></div> 
      <Card blogs={blogs} />
    </main>
  );
}
