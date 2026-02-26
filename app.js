import { calculateDiscount, grade } from "./src/logic.js";

const total = 100;
const isStudent = true;

console.log("Discount result:", calculateDiscount(total, isStudent));
console.log("Grade result:", grade(85));