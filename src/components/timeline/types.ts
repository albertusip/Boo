import type { Post, Question, Universe as UniverseType } from "@/types";

export interface TimelineProps {
  highlightQuestion: Question;
  posts: Post[];
  universes: UniverseType[];
};

export type PostItemProps = Post;
