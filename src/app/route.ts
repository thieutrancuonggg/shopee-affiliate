import { NextResponse } from 'next/server';
import { getRandomAffiliateLink } from '@/services/affiliate-redirect.service';

export const dynamic = 'force-dynamic';

export function GET() {
  const targetUrl = getRandomAffiliateLink();

  const response = NextResponse.redirect(targetUrl, { status: 307 });
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');

  return response;
}
