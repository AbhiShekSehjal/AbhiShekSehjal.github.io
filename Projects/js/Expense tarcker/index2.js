const itemNameInput = document.getElementById("item-name");
const itemCostInput = document.getElementById("item-cost");
const addButton = document.getElementById("btn1");
const outputBox = document.getElementById("output");
const leftDiv = document.querySelector(".left-div");
const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("Expense");

let balance = 0;
let income = 0;
let expense = 0;


function addTransaction() {
  const itemName = itemNameInput.value.trim();
  const cost = parseFloat(itemCostInput.value.trim());

  if (!itemName || isNaN(cost)) {
    alert("Please enter a valid item name and cost!");
    return;
  }

  if (cost > 0) {
    income += cost;
  } else {
    expense += cost;
  }
  balance += cost;

  // Update the summary
  updateSummary();

  const transactionItem = document.getElementById("result");
  transactionItem.textContent = `${itemName}: $${cost.toFixed(2)}`;
  transactionItem.style.color = cost > 0 ? "green" : "red"; // Green for income, red for expense
  outputBox.appendChild(transactionItem);

  // Clear inputs after adding
  itemNameInput.value = "";
  itemCostInput.value = "";
}

function updateSummary() {
  balanceElement.textContent = `$${balance.toFixed(2)}`;
  incomeElement.textContent = `$${income.toFixed(2)}`;
  expenseElement.textContent = `$${Math.abs(expense).toFixed(2)}`; // Display expense as positive
}

// Event listener for the add transaction button
addButton.addEventListener("click", addTransaction);