import TestButton from "@/components/test-button";
import { getLastPost } from "@/lib/data";
import PostCalendar from "@/components/post-calendar";
import Link from "next/link";

const Home = async () => {
  const post = await getLastPost()
  const today = new Date()
  const hoursDiff = (today.getTime() - post!.date.getTime()) / (1000 * 60 * 60)
  const formattedDate = post!.date.getFullYear() + '-' +
    post!.date.getMonth().toString().padStart(2, '0') + '-' +
    post!.date.getDate().toString().padStart(2, '0')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex justify-between">
          <div className="w-1/4"/>
          <div className="flex flex-col">
            <div className="w-full items-center text-2xl text-center">
              Hi, I'm Kevin and I want to learn something new everyday.
            </div>
            <div className="w-full max-w-5xl items-center text-xl text-center">
              Here's what I learnt { hoursDiff > 24 ? `on the ${formattedDate}` : 'today' }:
            </div>
          </div>
          <div className="text-center w-1/4">
            <Link href="/posts">Read older posts</Link>
            {/* <PostCalendar /> */}
          </div>
        </div>

        <TestButton />

        {post &&
        <div className="w-full xl:w-8/12 p-6 border rounded-xl bg-white shadow">
          <div className="text-center text-4xl">
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
