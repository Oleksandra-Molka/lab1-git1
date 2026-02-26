export function calculateDiscount(total, isStudent) {
  if (total < 0) throw new Error("total must be >= 0");
  if (isStudent) return total * 0.9;
  return total;
}

export function grade(score) {
  if (score < 0 || score > 100) throw new Error("score must be 0..100");
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  return "F";
}