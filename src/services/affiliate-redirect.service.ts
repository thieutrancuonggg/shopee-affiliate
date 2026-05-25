import { AFFILIATE_LINK_CONFIG } from '@/config/affiliate-links';
import { isValidUrl } from '@/utils/url.util';
import type { AffiliateLink } from '@/types/affiliate.type';

export function getValidAffiliateLinks(): AffiliateLink[] {
  return AFFILIATE_LINK_CONFIG.links.filter(isValidUrl);
}

export function getRandomAffiliateLink(): string {
  const validLinks = getValidAffiliateLinks();

  if (validLinks.length === 0) {
    return AFFILIATE_LINK_CONFIG.fallbackUrl;
  }

  const randomIndex = Math.floor(Math.random() * validLinks.length);
  return validLinks[randomIndex];
}
