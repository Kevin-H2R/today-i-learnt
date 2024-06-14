import TestButton from "@/components/test-button";
import { getLastPost } from "@/lib/data";

const Home = async () => {
  const post = await getLastPost()
  console.log("post")
  console.log(post)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-8">
        <div className="w-full max-w-5xl items-center text-2xl text-center">
          Hi, I'm Kevin and I want to learn something new everyday.
        </div>
        <div className="w-full max-w-5xl items-center text-xl text-center">
          Here's what I learnt today:
        </div>
        <TestButton/>
        {post && 
        <div className="max-w p-6 border rounded-xl bg-white shadow">
          <div className="text-center">
            {post?.title}
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
        }
      </div>
    </main>
  );
}

export default Home
