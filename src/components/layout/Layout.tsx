import { Header, RelatedPost, SideBar, Timeline, Universe } from "@/components";

import type { LayoutProps } from "./types";

export default function Layout({
  data,
  highlightQuestion,
}: LayoutProps) {
  const { posts, sidebarLinks, universes, relatedPosts } = data;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="mx-auto max-w-[1440px] px-4 pt-[88px] md:px-6">
        <div className="grid h-[calc(100vh-88px)] gap-6 md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[72px_280px_minmax(0,1fr)] xl:grid-cols-[220px_280px_minmax(0,1fr)_360px]">
          <aside className="hidden h-full lg:sticky lg:top-0 lg:block">
            <SideBar sidebarLinks={sidebarLinks} />
          </aside>
          <aside className="hidden h-full px-2 md:sticky md:top-0 md:block">
            <Universe universes={universes} />
          </aside>
          <main className="no-scrollbar h-full overflow-y-auto pb-8 px-2">
            <Timeline
              highlightQuestion={highlightQuestion}
              posts={posts}
              universes={universes}
            />
          </main>
          <aside className="no-scrollbar hidden h-full overflow-y-auto pb-8 pr-2 xl:block">
            <RelatedPost relatedPosts={relatedPosts} />
          </aside>
        </div>
      </div>
    </div>
  );
}
