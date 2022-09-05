export function formatString(count: number | null | undefined, string: string) {
  if (!count) return `${count} ${string}`;
  return count > 1 ? `${count} ${string}s` : `${count} ${string}`;
}
