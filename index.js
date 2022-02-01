let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
const length = Math.max(monthlyExpenseQuestions.length, weeklyExpenseQuestions.length, annualExpenseQuestions.length);
for(let i = 0; i < length; i++){
    let answer = 0;

    if(i < weeklyExpenseQuestions.length)
    answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer

    if(i < monthlyExpenseQuestions.length)
    answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer

    if(i < annualExpenseQuestions.length)
    answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer

}