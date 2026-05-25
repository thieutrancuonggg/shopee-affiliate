import { redirect } from 'next/navigation';
import { getRandomAffiliateLink } from '@/services/affiliate-redirect.service';

export const dynamic = 'force-dynamic';

export default function Page() {
  const targetUrl = getRandomAffiliateLink();
  redirect(targetUrl);
}
