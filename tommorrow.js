let tii = []
let tee = []
let colorr = []
let productnames = []
let amounts = []
let del = []

function sale(color) {
    let productname = document.getElementById('pn').value;
    let amount = Number(document.getElementById('a').value);

    if (!productname || !amount) {
        alert("Enter product name and amount");
        return;
    } else {
        tii.push(amount)
        productnames.push(productname)
        amounts.push(amount)
        colorr.push(color)
        document.getElementById('tbody').innerHTML = ''
        del = []
        for (let i = 0; i < amounts.length; i++) {
            if (colorr[i] === 'green') {
                del.push(`del1(${i}, ${i})`)
            } else {
                del.push(`del2(${i}, ${i})`)
            }
            document.getElementById('tbody').innerHTML += `<tr>
                        <td>${i+1}</td>
                        <td class='td1'>${productnames[i]}</td>
                        <td class='${colorr[i]}'>${amounts[i]}</td>
                        <td><button class='${colorr[i]}' onClick='${del[i]}'>Delete</button></td>
                        </tr>`
        }
    }
    let ti = Number(document.getElementById('ti').innerHTML) || 0
    document.getElementById('ti').innerText = ti + amount

    // let ti = Number("") || 0  // 0
    // let ti = Number(null) || 0 // 0
    calc()
}

function del1(ii, i2) {
    let totalincome = document.getElementById('ti') || 0
    let current = Number(totalincome.innerText) || 0
    let minus = Number(amounts[ii]) || 0
    document.getElementById('ti').innerText = current - minus
    tii.splice(ii, 1)
    productnames.splice(i2, 1)
    amounts.splice(i2, 1)
    colorr.splice(i2, 1)
    del.splice(i2, 1)

    del = []
    document.getElementById('tbody').innerHTML = ''
    for (let i = 0; i < amounts.length; i++) {
        if (colorr[i] === 'green') {
            del.push(`del1(${i}, ${i})`)
        } else {
            del.push(`del2(${i}, ${i})`)
        }
        document.getElementById('tbody').innerHTML += `<tr>                <td>${i+1}</td>

                        <td class='td1'>${productnames[i]}</td>
                        <td class='${colorr[i]}'>${amounts[i]}</td>
                        <td><button class='${colorr[i]}' onClick='${del[i]}'>Delete</button></td>
                    </tr>`
        console.log(tii, tee);
    }
    calc()
}

function buy(color2) {
    let productname = document.getElementById('pn').value;
    let amount = Number(document.getElementById('a').value);

    if (!productname || !amount) {
        alert("Enter product name and amount");
        return;
    } else {
        tee.push(amount)
        productnames.push(productname)
        amounts.push(amount)
        colorr.push(color2)
        document.getElementById('tbody').innerHTML = ''
        del = []
        for (let i = 0; i < amounts.length; i++) {
            if (colorr[i] === 'green') {   // ya jo income ka color hai
                del.push(`del1(${i}, ${i})`)
            } else {
                del.push(`del2(${i}, ${i})`)
            } document.getElementById('tbody').innerHTML += `<tr>
                            <td>${i+1}</td>
                        <td class='td1'>${productnames[i]}</td>
                        <td class='${colorr[i]}'>${amounts[i]}</td>
                        <td><button class='${colorr[i]}' onClick='${del[i]}'>Delete</button></td>
                        </tr>`
            console.log(tii, tee);
        }
        let te = Number(document.getElementById('te').innerHTML) || 0
        document.getElementById('te').innerHTML = te + amount

        calc()
    }
}

function del2(iii, i3) {
    let current = Number(document.getElementById('te').innerText) || 0
    let minus = Number(amounts[iii]) || 0
    document.getElementById('te').innerText = current - minus

    del.splice(i3, 1)
    tee.splice(iii, 1)
    productnames.splice(i3, 1)
    amounts.splice(i3, 1)
    colorr.splice(i3, 1)
    del = []
    document.getElementById('tbody').innerHTML = ''
    for (let i = 0; i < amounts.length; i++) {
        if (colorr[i] === 'green') {
            del.push(`del1(${i}, ${i})`)
        } else {
            del.push(`del2(${i}, ${i})`)
        }
        document.getElementById('tbody').innerHTML += `<tr>
                        <td>${i+1}</td>
                        <td class='td1'>${productnames[i]}</td>
                        <td class='${colorr[i]}'>${amounts[i]}</td>
                        <td><button class='${colorr[i]}' onClick='${del[i]}'>Delete</button></td>
                    </tr>`
    }
    calc()
}

function calc() {
    let ti = Number(document.getElementById('ti').innerText) || 0
    let te = Number(document.getElementById('te').innerText) || 0
    let ans = ti - te
    document.getElementById('te').innerHTML = te + 0 || 0
    document.getElementById('ti').innerHTML = 0 + ti || 0
    if (ans >= 0) {
        document.getElementById('tp').innerText = ans
        document.getElementById('tl').innerHTML = 0;
    } else {
        ans = ans.toString()
        ans = ans.slice(1)
        document.getElementById('tl').innerText = ans
        document.getElementById('tp').innerText = 0
    }
}