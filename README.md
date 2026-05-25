# Shopee Affiliate Redirect

Website tự động redirect sang Shopee Affiliate link ngẫu nhiên từ danh sách cấu hình sẵn.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **ESLint**

## Cấu trúc dự án

```
src/
├── app/
│   ├── page.tsx                         # Entry point — gọi service rồi redirect
│   ├── layout.tsx
│   └── globals.css
├── config/
│   └── affiliate-links.ts               # Danh sách 10 affiliate links + fallback
├── services/
│   └── affiliate-redirect.service.ts    # Logic lấy link hợp lệ + random
├── utils/
│   └── url.util.ts                      # Validate URL
└── types/
    └── affiliate.type.ts                # Type definitions
```

## Flow Redirect

```
Request GET /
  └─▶ page.tsx (Server Component)
        └─▶ getRandomAffiliateLink()
              ├─▶ getValidAffiliateLinks()  → lọc link hợp lệ từ config
              └─▶ chọn random 1 link
        └─▶ redirect(targetUrl)  →  HTTP 307 về phía client
```

Toàn bộ logic chạy server-side. Không render HTML, không JavaScript về client.

## Cấu hình Affiliate Links

Mở `src/config/affiliate-links.ts` và thay các placeholder bằng link thật:

```ts
export const AFFILIATE_LINK_CONFIG: AffiliateLinkConfig = {
  links: [
    'https://shope.ee/your-real-link-1',
    'https://shope.ee/your-real-link-2',
    // ...
  ],
  fallbackUrl: 'https://shopee.vn',
};
```

## Chạy Local

```bash
# 1. Cài đặt dependencies
npm install

# 2. Tạo file env (tùy chọn)
cp .env.example .env.local

# 3. Chạy dev server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) — trình duyệt sẽ tự redirect sang một Shopee link ngẫu nhiên.

## Build & Kiểm tra Production

```bash
npm run build
npm run start
```

## Deploy lên Vercel

### Cách 1 — Vercel CLI (nhanh nhất)

```bash
npm i -g vercel
vercel --prod
```

Làm theo hướng dẫn trên terminal. Vercel tự detect Next.js và cấu hình đúng.

### Cách 2 — GitHub + Vercel Dashboard

1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com) → **Add New Project**
3. Import repository
4. Vercel tự build & deploy — không cần cấu hình thêm
5. Mỗi push lên `main` sẽ tự trigger re-deploy

### Lưu ý khi deploy

- Không cần set environment variable bắt buộc — project chạy ngay sau deploy
- Nếu muốn set `NEXT_PUBLIC_SITE_URL`: vào **Project Settings → Environment Variables** trên Vercel Dashboard
