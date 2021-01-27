//Login courtesy
var submitBtn = document.getElementById("submitBtn");
var loginArea = document.getElementById("login-area");
var transictionArea = document.getElementById("transaction-area");

submitBtn.addEventListener("click", function () {
  loginArea.style.display = "none";
  transictionArea.style.display = "block";
});

//Catching button
const btnDeposite = document.getElementById("btnDeposite");
const btnWithdraw = document.getElementById("btnWithdraw");

//get number from input
function getNumber(id) {
  const input = document.getElementById(id).value;
  const inputNumber = parseFloat(input);
  return inputNumber;
}
//Button Handler Function
function updateSpanText(id, inputNumber) {
  const Balance = document.getElementById(id).innerText;
  const BalanceNumber = parseFloat(Balance);

  const totalBalance = BalanceNumber + inputNumber;
  document.getElementById(id).innerText = totalBalance;
}

//..................For Deposite Button.............
btnDeposite.addEventListener("click", function () {
  const inputNumber = getNumber("addDeposite");

  updateSpanText("balanceAmount", inputNumber);
  updateSpanText("depositeAmount", inputNumber);
  document.getElementById("addDeposite").value = "";
});

//..................For Withdraw Button.............
btnWithdraw.addEventListener("click", function () {
  const inputNumber = getNumber("addWithdraw");

  updateSpanText("balanceAmount", -1 * inputNumber);
  updateSpanText("withdrawAmount", inputNumber);
  document.getElementById("addWithdraw").value = "";
});
