export const NAV_SCROLL_OFFSET = 120;

export function scrollToHashTarget(hash: string, delay = 100) {
  if (!hash) return false;

  const normalizedHash = hash.startsWith('#') ? hash : `#${hash}`;
  const target = document.querySelector<HTMLElement>(normalizedHash);

  if (!target) {
    return false;
  }

  window.setTimeout(() => {
    const navOffset = window.innerWidth >= 1024 ? NAV_SCROLL_OFFSET : 88;
    const top = Math.max(target.getBoundingClientRect().top + window.scrollY - navOffset, 0);
    window.scrollTo({ top, behavior: 'smooth' });
  }, delay);

  return true;
}
