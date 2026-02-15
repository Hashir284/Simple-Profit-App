function sale() {
    let productname = document.getElementById('pn').value.trim();
    let amount = Number(document.getElementById('a').value);

    if (!productname || !amount) {
        alert("Enter product name and amount");
        return;
    }

    // Add row
    document.getElementById('tbody').innerHTML += `
        <tr>
            <td>${productname}</td>
            <td>${amount}</td>
        </tr>`;

    // Update Total Income
    let ti = document.getElementById('ti');
    ti.textContent = (Number(ti.textContent) || 0) + amount;

    calculateProfitLoss();
}
function buy() {
    let productname = document.getElementById('pn').value.trim();
    let amount = Number(document.getElementById('a').value);

    if (!productname || !amount) {
        alert("Enter product name and amount");
        return;
    }

    document.getElementById('tbody').innerHTML += `
        <tr>
            <td>${productname}</td>
            <td>${amount}</td>
        </tr>`;

    // Update Total Expense
    let te = document.getElementById('te');
    te.textContent = (Number(te.textContent) || 0) + amount;

    calculateProfitLoss();
}
function calculateProfitLoss() {
    let income = Number(document.getElementById('ti').textContent) || 0;
    let expense = Number(document.getElementById('te').textContent) || 0;

    let result = income - expense;

    if (result >= 0) {
        document.getElementById('tp').textContent = result;
        document.getElementById('tl').textContent = 0;
    } else {
        document.getElementById('tp').textContent = 0;
        document.getElementById('tl').textContent = Math.abs(result);
    }
}
