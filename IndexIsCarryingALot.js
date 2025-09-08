//Week2 Task - Implementing a simple expense calculator

const daysInMonth = 30;
const monthlyIncome = 350000; // Example monthly income
const dailyExpenses = 2800; // Example daily expenses
const monthlyExpenses = dailyExpenses * daysInMonth; 
const spendings = 600 * daysInMonth;
const savings = 200 * daysInMonth;
const totalDailyExpenses = dailyExpenses + 600 + 200;
const totalMonthlyExpenses = totalDailyExpenses * daysInMonth;
const remainingBalance = monthlyIncome - totalMonthlyExpenses;

console.log("Monthly Income: " + monthlyIncome);
console.log("Daily Expenses: " + dailyExpenses);
console.log("Monthly Expenses: " + monthlyExpenses);
console.log("Total Spendings: " + (600 * daysInMonth));
console.log("Total Savings: " + (200 * daysInMonth));
console.log("Total Daily Expenses (including spendings and savings): " + totalDailyExpenses);
console.log("Total Monthly Expenses: " + totalMonthlyExpenses);
console.log("Remaining Balance after Expenses: " + remainingBalance);