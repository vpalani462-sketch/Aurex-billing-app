let total = 0;

function addProduct(){

let name = document.getElementById("productName").value;
let qty = Number(document.getElementById("qty").value);
let rate = Number(document.getElementById("rate").value);

let amount = qty * rate;

total += amount;

let table = document.getElementById("billTable");

let row = table.insertRow();

row.insertCell(0).innerHTML = name;
row.insertCell(1).innerHTML = qty;
row.insertCell(2).innerHTML = rate;
row.insertCell(3).innerHTML = amount;

document.getElementById("grandTotal").innerHTML = total;

}