export type Question = {
  id?: string;
  code?: string;
  title: string;
  description?: string;
  tag?: string;
  date: string;
  likes: number;
  comments: number;
};

export type Post = {
  id: string;
  author: string;
  badge: string;
  astro: string;
  stats: string;
  content: string;
  likes: number;
  comments: number;
  time: string;
};

export type Universe = {
  tag: string;
  souls: string;
};

export type PostsPageData = {
  questionOfTheDay: Question;
  relatedPosts: Question[];
  posts: Post[];
  universes: Universe[];
  sidebarLinks: string[];
};
