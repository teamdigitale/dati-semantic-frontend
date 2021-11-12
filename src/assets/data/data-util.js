export function escapeRegexp(s) {
  const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;

  return s.replace(matchOperatorsRegex, "\\$&");
}

export const propertyMatcher = (pattern) => {
  const regexp = `\\b${escapeRegexp(pattern.toLowerCase())}\\b`;
  return (a) => a.toLowerCase().match(regexp);
};
