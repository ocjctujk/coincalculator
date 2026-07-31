const fiveCents = document.getElementById("point5");
const tenCents = document.getElementById("point10");
const twentyFiveCents = document.getElementById("point25");
const looney = document.getElementById("oneDollar");
const tooney = document.getElementById("twoDollar");
const result = document.getElementById("result");

function calculateTotal() {
  const fiveCentsValue = parseFloat(fiveCents.value);
  const tenCentsValue = parseFloat(tenCents.value);
  const twentyFiveCentsValue = parseFloat(twentyFiveCents.value);
  const looneyValue = parseFloat(looney.value);
  const tooneyValue = parseFloat(tooney.value);
  const total =
    fiveCentsValue * 0.05 +
    tenCentsValue * 0.1 +
    twentyFiveCentsValue * 0.25 +
    looneyValue +
    tooneyValue * 2;
  result.innerText = `Total is ${total.toFixed(2)}`;
}

fiveCents.addEventListener("change", calculateTotal);
tenCents.addEventListener("change", calculateTotal);
twentyFiveCents.addEventListener("change", calculateTotal);
looney.addEventListener("change", calculateTotal);
tooney.addEventListener("change", calculateTotal);
