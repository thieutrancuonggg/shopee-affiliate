import Link from 'next/link';
import type { Article, ArticleCategory } from '@/types/article.type';

const BADGE_STYLES: Record<ArticleCategory, string> = {
  HOT: 'bg-red-500',
  DEAL: 'bg-orange-500',
  NHANH: 'bg-blue-500',
  MẸO: 'bg-yellow-500',
};

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <Link
      href="/go"
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
    >
      <div className={`bg-gradient-to-br ${article.gradient} h-44 flex items-center justify-center`}>
        <span className="text-7xl drop-shadow">{article.emoji}</span>
      </div>

      <div className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-center justify-between">
          <span className={`${BADGE_STYLES[article.category]} text-white text-xs font-bold px-2.5 py-0.5 rounded-full`}>
            {article.category}
          </span>
          <span className="text-xs text-gray-400">⏱ {article.timeLabel}</span>
        </div>

        <h2 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-orange-500 transition-colors line-clamp-2">
          {article.title}
        </h2>

        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
          {article.description}
        </p>

        <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-orange-500 group-hover:gap-2 transition-all duration-150">
          Xem ngay <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
