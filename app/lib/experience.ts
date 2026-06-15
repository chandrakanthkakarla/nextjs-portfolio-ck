export function getExperienceDuration(joinDate: string) {
  const join = new Date(joinDate);
  const now = new Date();

  let totalMonths =
    (now.getFullYear() - join.getFullYear()) * 12 +
    (now.getMonth() - join.getMonth());

  if (totalMonths < 0) {
    totalMonths = 0;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
}

export function formatExperienceDuration(joinDate: string) {
  const { years, months } = getExperienceDuration(joinDate);
  const yearText = years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "";
  const monthText = months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "";

  if (yearText && monthText) {
    return `${yearText} ${monthText}`;
  }

  if (yearText) {
    return yearText;
  }

  return monthText || "0 months";
}
