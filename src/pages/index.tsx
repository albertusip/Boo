import type { GetServerSideProps } from "next";
import { Layout } from "@/components";
import { getPostsData } from "@/lib/posts";
import type { PostsPageData } from "@/types";

type PageProps = PostsPageData;

export default function Home(props: PageProps) {
  return (
    <Layout data={props} highlightQuestion={props.questionOfTheDay} />
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => ({
  props: getPostsData(),
});
