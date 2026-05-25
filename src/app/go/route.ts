import { NextResponse } from 'next/server';
import { getRandomAffiliateLink } from '@/services/affiliate-redirect.service';

export const dynamic = 'force-dynamic';

export function GET() {
  const targetUrl = getRandomAffiliateLink();

  const response = NextResponse.redirect(targetUrl, { status: 302 });
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  response.headers.set('Vary', '*');

  return response;
}
