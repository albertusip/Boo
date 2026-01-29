import { posts, questionOfTheDay, relatedPosts, sidebarLinks, universes } from "@api/mocks";
import type { PostsPageData, Question } from "@/types";
import { slugify } from "@/lib/slug";

export function getPostsData(): PostsPageData {
  return {
    questionOfTheDay,
    relatedPosts,
    posts,
    universes,
    sidebarLinks,
  };
}

export function selectQuestion(
  data: PostsPageData,
  code?: string,
  slug?: string
): { question: Question; slug: string } {
  const allQuestions = [data.questionOfTheDay, ...data.relatedPosts];

  const match =
    allQuestions.find(
      (item) => item.code === code && slugify(item.title) === slug
    ) ??
    allQuestions.find((item) => slugify(item.title) === slug) ??
    allQuestions.find((item) => item.code === code) ??
    data.questionOfTheDay;

  return {
    question: match,
    slug: slugify(match.title),
  };
}
