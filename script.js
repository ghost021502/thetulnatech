// Customer records are kept in this array while the page is open.
const customers = [];

const customerForm = document.getElementById("customer-form");

customerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customer = {
        id: customers.length + 1,
        name: document.getElementById("fullname").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        computer: document.getElementById("computer").value.trim(),
        budget: document.getElementById("budget").value,
        preferredContactDate: document.getElementById("date").value,
        message: document.getElementById("message").value.trim()
    };

    customers.push(customer);

    console.clear();
    console.log("Customer array:");
    console.table(customers);
    console.log(customers);

    alert("Thank you! Your customer information was added. Open the browser console to view the customer array.");
    customerForm.reset();
});
