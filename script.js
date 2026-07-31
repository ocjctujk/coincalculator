const fiveCents = document.getElementById("point5");
const tenCents = document.getElementById("point10");
const twentyFiveCents = document.getElementById("point25");
const looney = document.getElementById("oneDollar");
const tooney = document.getElementById("twoDollar");
const result = document.getElementById("result");

function calculateTotal() {
  const fiveCentsValue = parseFloat(fiveCents.value) || 0;
  const tenCentsValue = parseFloat(tenCents.value) || 0;
  const twentyFiveCentsValue = parseFloat(twentyFiveCents.value) || 0;
  const looneyValue = parseFloat(looney.value) || 0;
  const tooneyValue = parseFloat(tooney.value) || 0;
  const total =
    fiveCentsValue * 0.05 +
    tenCentsValue * 0.1 +
    twentyFiveCentsValue * 0.25 +
    looneyValue +
    tooneyValue * 2;
  result.innerText = `Total is $ ${total.toFixed(2)}`;
}

fiveCents.addEventListener("input", calculateTotal);
tenCents.addEventListener("input", calculateTotal);
twentyFiveCents.addEventListener("input", calculateTotal);
looney.addEventListener("input", calculateTotal);
tooney.addEventListener("input", calculateTotal);
