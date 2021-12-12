export function hash(str) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}

export const asItalianDate = (str) => {
  return new Date(str).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export function truncate(str, maxLength, truncationIndicator = "...") {
  if (!str) {
    return str;
  }

  if (str.length <= maxLength) {
    return str;
  }

  return (
    str.substr(0, maxLength - truncationIndicator.length) + truncationIndicator
  );
}
