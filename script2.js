let amounts = []
let productnames = []
function sale() {
    let productname = document.getElementById('pn').value
    let amount = Number(document.getElementById('a').value)

    console.log(productname);
    console.log(amount);

    if (productname !== '' && amount !== '') {
        amounts.push(amount)
        productnames.push(productname)
        document.getElementById('tbody').innerHTML += `<tr>
                    <td class='td1'>${productname}</td>
                    <td>${amount}</td>
                    <td><button onClick='get(amounts.length)'>Delete</button></td>
                </tr>`
    } else if ((productname === '' && amount === '')) {
        alert('Plz! Enter the product name and amount')
    } else if (productname === '') {
        alert('Plz! Enter the product name')
    } else if (amount === '') {
        alert('Plz! Enter the amount')
    }

    let totalelement = document.getElementById('tp')
    let currenttatal = Number(totalelement.innerHTML)
    totalelement.innerHTML = amount + currenttatal

    let totalincome = document.getElementById('ti')
    let ticurrenttatal = Number(totalincome.innerHTML)
    totalincome.innerHTML = amount + ticurrenttatal
    
    
    let totalloss = Number(document.getElementById('tl').innerHTML)
    if(document.getElementById('tl').innerHTML == ''){
        document.getElementById('tl') = document.getElementById('tl').innerHTML - Number(totalelement.innerHTML)
    }
}

function buy() {
    let productname = document.getElementById('pn').value
    let amount = Number(document.getElementById('a').value)

    console.log(productname);
    console.log(amount);

    if (productname !== '' && amount !== '') {
        document.getElementById('tbody').innerHTML += `<tr>
                    <td class='td1'>${productname}</td>
                    <td>${amount}</td>
                    <td><button onclick='get(2)'>Delete</button></td>
                </tr>`
        // amounts.push(amount)
    } else if ((productname === '' && amount === '')) {
        alert('Plz! Enter the product name and amount')
    } else if (productname === '') {
        alert('Plz! Enter the product name')
    } else if (amount === '') {
        alert('Plz! Enter the amount')
    }

    let totalelement = document.getElementById('te')
    let currenttatal = Number(totalelement.innerHTML)
    totalelement.innerHTML = amount + currenttatal

    currenttatal = Number(document.getElementById('ti').innerHTML) - Number(document.getElementById('te').innerHTML)
    // if(document.getElementById('tp').innerHTML != ''){
    // }
    if (currenttatal >= 0) {
        document.getElementById('tp').innerHTML = currenttatal
    } else {
        let tp = Number(document.getElementById('tp').innerHTML)
        document.getElementById('tl').innerHTML = -(tp - currenttatal)
    }
    

}

function get(i) {
    document.getElementById('tbody').innerHTML = ''
    amounts.splice(i - 1, 1)
    productnames.splice(i - 1, 1)
    document.getElementById('tp').innerHTML = ''
    document.getElementById('ti').innerHTML = ''
    for (let i = 0; i < amounts.length; i++) {
        document.getElementById('tbody').innerHTML += `<tr>
                    <td class='td1'>${productnames[i]}</td>
                    <td>${amounts[i]}</td>
                    <td><button onclick='get(amounts.length - 1)'>Delete</button></td>
                </tr>`
        let ti = Number(document.getElementById('ti').innerHTML)
        document.getElementById('ti').innerHTML = ti + amounts[i]
        let tp = Number(document.getElementById('tp').innerHTML)
        let profitloss = tp + amounts[i]
        if (profitloss >= 0) {
            document.getElementById('tp').innerHTML = profitloss
        } else {
            document.getElementById('tl').innerHTML = profitloss
        }
    }
    saleatdel()

}

function saleatdel() {

}