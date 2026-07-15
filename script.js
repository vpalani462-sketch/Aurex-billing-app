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
function saveCustomer(){

let name = document.getElementById("customerName").value;
let mobile = document.getElementById("mobile").value;
let address = document.getElementById("address").value;

let customer = {
name:name,
mobile:mobile,
address:address
};

let customers = JSON.parse(localStorage.getItem("customers")) || [];

customers.push(customer);

localStorage.setItem("customers", JSON.stringify(customers));

alert("Customer Saved");

showCustomers();

}


function showCustomers(){

let list = document.getElementById("customerList");

if(!list) return;

let customers = JSON.parse(localStorage.getItem("customers")) || [];

list.innerHTML="";

customers.forEach(c=>{

list.innerHTML += `
<p>
${c.name} - ${c.mobile}
</p>
`;

});

}

showCustomers();