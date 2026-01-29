import type { GetServerSideProps } from "next";

import { Layout } from "@/components";
import { getPostsData, selectQuestion } from "@/lib";
import type { PostsPageData, Question } from "@/types";

type PageProps = PostsPageData & {
  highlightQuestion: Question;
};

export default function QuestionPage({ highlightQuestion, ...data }: PageProps) {
  return <Layout data={data} highlightQuestion={highlightQuestion} />;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  params,
}) => {
  const data = getPostsData();
  const codeParam = Array.isArray(params?.code) ? params?.code[0] : params?.code;
  const slugParam = Array.isArray(params?.slug) ? params?.slug[0] : params?.slug;

  const { question, slug } = selectQuestion(data, codeParam, slugParam);
  const canonicalCode = question.code ?? codeParam;

  if (canonicalCode && slugParam && (slugParam !== slug || codeParam !== canonicalCode)) {
    return {
      redirect: {
        destination: `/u/questions/${canonicalCode}/${slug}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...data,
      highlightQuestion: question,
    },
  };
};
