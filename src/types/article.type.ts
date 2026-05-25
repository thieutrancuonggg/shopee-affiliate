export type ArticleCategory = 'HOT' | 'DEAL' | 'NHANH' | 'MẸO';

export interface Article {
  id: number;
  title: string;
  description: string;
  category: ArticleCategory;
  gradient: string;
  emoji: string;
  timeLabel: string;
}
