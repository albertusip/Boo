import Link from "next/link";
import Icon from "@/assets/Icon";
import { slugify } from "@/lib/slug";

import type { RelatedPostItemProps, RelatedPostProps } from "./types";

function RelatedPostItem({
  code,
  title,
  description,
  tag,
  date,
  likes,
  comments,
}: RelatedPostItemProps) {
  const slug = slugify(title);
  const href = `/u/questions/${code ?? ""}/${slug}`;

  return (
    <Link href={href} className="block">
      <div className="boo-card shadow-main rounded-[26px] px-5 py-5 transition hover:border-white/20">
        <div className="flex items-center justify-between text-xs text-white/50">
          <span>{tag ?? ""}</span>
          <span>{date}</span>
        </div>
        <h4 className="mt-3 text-base font-semibold leading-snug">{title}</h4>
        <p className="mt-2 text-sm text-white/60">{description ?? ""}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <Icon name="heart" className="h-4 w-4 text-white/60" />
            {likes}
          </div>
          <div className="flex items-center gap-2">
            <Icon name="chat" className="h-4 w-4 text-white/60" />
            {comments}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function RelatedPost({ relatedPosts }: RelatedPostProps) {
  return (
    <section className="px-2 py-2">
      <h3 className="text-lg font-semibold">Related Posts</h3>
      <div className="mt-4 space-y-4">
        {relatedPosts.map((post) => (
          <RelatedPostItem key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
