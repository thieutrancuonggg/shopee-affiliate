import ArticleCard from '@/components/ArticleCard';
import { ARTICLES } from '@/config/articles';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2">
          <span className="text-2xl">🛍️</span>
          <span className="font-bold text-xl text-orange-500 tracking-tight">ShopSmart</span>
          <span className="hidden sm:block text-gray-300 mx-2">|</span>
          <span className="hidden sm:block text-sm text-gray-500">Săn deal · Kiếm tiền thông minh</span>
        </div>
      </header>

      <section className="bg-gradient-to-r from-orange-500 to-rose-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl font-bold mb-2">💸 Mẹo Kiếm Tiền & Deal Sốc Mỗi Ngày</h1>
          <p className="text-orange-100">Cập nhật liên tục — click vào bài để xem ngay deal tốt nhất</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200 mt-4">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} ShopSmart · Tổng hợp deal & mẹo mua sắm thông minh
        </div>
      </footer>
    </div>
  );
}
