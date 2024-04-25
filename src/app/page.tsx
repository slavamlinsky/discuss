import { Button, Divider } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";
import TopicCreateForm from "@/components/topics/TopicCreateForm";
import TopicList from "@/components/topics/TopicList";
import PostList from "@/components/posts/PostList";
import { fetchTopPosts } from "@/db/queries/post";

export default async function Home() {
  // const session = await auth();

  // let authContent: React.ReactNode;
  // if (session?.user) {
  //   authContent = <div>User Image</div>;
  // } else {
  //   authContent = (
  //     <div>
  //       <form action={actions.signIn}>
  //         <Button type="submit">Sign In</Button>
  //       </form>
  //     </div>
  //   );
  // }

  return (
    // <div className="flex justify-center">
    //   <div className="w-80 bg-slate-200 p-8 rounded-lg flex flex-col items-center gap-3">
    //     {/* <h1 className="mb-4 text-3xl">Hello World</h1> */}

    //     <TopicCreateForm />

    //     <form action={actions.signOut}>
    //       <Button type="submit">Sign Out</Button>
    //     </form>

    //     {/* {session?.user ? <div>Signed In {JSON.stringify(session?.user)}</div> : <div>Signed Out</div>} */}
    //   </div>

    //   {/* <Profile /> */}
    // </div>
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
