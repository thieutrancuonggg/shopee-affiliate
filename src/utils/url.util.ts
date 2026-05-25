const ALLOWED_PROTOCOLS = ['https:', 'http:'];

export function isValidUrl(url: string): boolean {
  if (!url || url.trim() === '') return false;

  try {
    const parsed = new URL(url);
    return ALLOWED_PROTOCOLS.includes(parsed.protocol);
  } catch {
    return false;
  }
}
