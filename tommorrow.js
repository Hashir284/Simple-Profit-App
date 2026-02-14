let tii = []
let tee = []
let colorr = []
let productnames = []
let amounts = []

function sale(color) {
    let productname = document.getElementById('pn').value;
    let amount = Number(document.getElementById('a').value);

    if (!productname || !amount) {
        alert("Enter product name and amount");
        return;
    } else {
        document.getElementById('tbody').innerHTML += `<tr>
                    <td class='td1'>${productname}</td>
                    <td class='${color}'>${amount}</td>
                    </tr>`
                    // <td><button onClick='del1(tii.length - 1, productnames - 1)'>Delete</button></td>
        productnames.push(productname)
        amounts.push(amount)
        colorr.push(color)
        tii.push(amount)
    }
    let totalincome = document.getElementById('ti')
    let ti = Number(document.getElementById('ti').innerHTML)
    if (!totalincome.innerText) {
        totalincome.innerHTML = amount
    } else if (totalincome.innerHTML > 0) {
        totalincome.innerText = ti + amount
    }

    calc()
    // del1()
}

// function del1(ii, i2) {
//     let totalincome = document.getElementById('ti')
//     document.getElementById('ti').innerHTML = totalincome.innerText - tii[ii]
//     tii.splice(ii, 1)
//     productnames.splice(i2,1)
//     amounts.splice(i2,1)
//     colorr.splice(i2,1)

//     document.getElementById('tbody').innerHTML = ''
//     for (let i = 0; i < amounts.length; i++) {
//         document.getElementById('tbody').innerHTML += `<tr>
//                     <td class='td1'>${productnames[i]}</td>
//                     <td class='${colorr[i]}'>${amounts[i]}</td>
//                     <td><button onClick='del1(tii.length - 1, amounts.length-1)'>Delete</button></td>
//                 </tr>`
//     }
//     calc()
// }

function buy(color2) {
    let productname = document.getElementById('pn').value;
    let amount = Number(document.getElementById('a').value);

    if (!productname || !amount) {
        alert("Enter product name and amount");
        return;
    } else {
        document.getElementById('tbody').innerHTML += `<tr>
                    <td class='td1'>${productname}</td>
                    <td class='${color2}'>${amount}</td>
                    </tr>`
                    // <td><button onClick='del2(tee.length - 1, amounts.length - 1)'>Delete</button></td>
        colorr.push(color2)
        tee.push(amount)
        productnames.push(productname)
        amounts.push(amount)
    }
    let te = document.getElementById('te')
    te.innerText = Number((te.innerText || 0)) + amount

    calc()
}

// function del2(iii, i3){
//         let totalincome = document.getElementById('te')
//     document.getElementById('te').innerHTML = (totalincome.innerText) - tee[ii]
//     // console.log(totalincome.innerText);
    
//     tee.splice(iii, 1)
//     productnames.splice(i3, 1)
//     amounts.splice(i3,1)
//     colorr.splice(i3,1)
//     document.getElementById('tbody').innerHTML = ''
//     for (let i = 0; i < amounts.length; i++) {
//         document.getElementById('tbody').innerHTML += `<tr>
//                     <td class='td1'>${productnames[i]}</td>
//                     <td class='${colorr[i]}'>${amounts[i]}</td>
//                     <td><button onClick='del2(tee.length - 1, amounts.length-1)'>Delete</button></td>
//                 </tr>`
//     }
//     calc()
// }

function calc() {
    let ti = Number(document.getElementById('ti').innerText) || 0
    let te = Number(document.getElementById('te').innerText) || 0
    let ans = ti - te
    if (ans >= 0) {
        document.getElementById('tp').innerText = ans
        document.getElementById('tl').innerHTML = 0;
    } else {
        document.getElementById('tl').innerText = ans
        document.getElementById('tp').innerText = 0
    }
}