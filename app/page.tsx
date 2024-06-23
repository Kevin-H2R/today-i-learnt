import { getPosts } from "@/lib/data";
import MainPost from "@/components/main-post";
import OlderPosts from "@/components/older-posts";
import { PostProvider } from "@/context/post-context";

const Home = async () => {
  // const post = await getLastPost()
  const posts = await getPosts()
  const post = posts[0]
  const today = new Date()
  const hoursDiff = (today.getTime() - post!.date.getTime()) / (1000 * 60 * 60)
  const formattedDate = post!.date.getFullYear() + '-' +
    post!.date.getMonth().toString().padStart(2, '0') + '-' +
    post!.date.getDate().toString().padStart(2, '0')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="flex flex-col items-center gap-8 w-full">
        <PostProvider initialPosts={posts}>
          <div className="flex justify-between">
            <div className="w-1/4"/>
            <div className="flex flex-col w-full  md:w-2/3">
              <div className="w-full text-5xl font-bold mb-5">
                Today I learnt
              </div>
              <div className="w-full text-gray-500 text-2xl flex flex-col gap-5 mb-10 leading-loose">
                <p>
                  Hi, I am Kevin.
                </p>
                <p> I am a software engineer currently in South Korea and a polymath-wannabe.</p>
                <p>
                  I want to learn something new everyday. No matter how small, insignificant,
                  pointless, easy that thing might be.
                </p>
                <p>
                  I am writing this blog to keep myself accountable toward my goal and I would consider it a
                  victory if I could redirect the attention of only one person from scrolling
                  useless insta/tiktok/whatever post to learning something new with me.
                </p>
                <p>
                  Here's what I learnt { hoursDiff > 24 ? `on the ${formattedDate}` : 'today' }:
                </p>
              </div>
              <MainPost/>
              
            </div>
            <div className="w-1/4 text-end">
              <div className="text-xl">Older posts</div>
              <OlderPosts/>
            </div>
          </div>
          
        </PostProvider>
      </div>
    </main>
  );
}

export default Home
