import PostList from "@/components/posts/PostList";
import { fecthPostBySearchTerm } from "@/db/queries/post";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return <PostList fetchData={() => fecthPostBySearchTerm(term)} />;
}
