let itemList = []

function calculation(color) {
    let productname = document.getElementById('pn').value
    let amount = document.getElementById('a').value

    if (productname === '' || amount === '') {
        return alert('Plz! Enter the productname and amount')
    }

    amount = Number(amount)
    itemList.push({ productname, amount, color })
    console.log(itemList);

    table()
}

function table() {
    document.getElementById('tbody').innerHTML = ''
    let index
    for (let i = 0; i < itemList.length; i++) {
        let items = itemList[i]
        let del
        index = [i]
        if (items.color == 'green') {
            del = 'del1'
        } else {
            del = 'del2'
        }
        document.getElementById('tbody').innerHTML += `                <tr>
                    <td class='td1 snotb'>${i+1}</td>
                    <td class='td1 snotb'>${items.productname}</td>
                    <td class='${items.color}'>${items.amount}</td>
                    <td><button class='${items.color}' onclick=${del}(${i})>
                        Delete
                    </button></td>
                </tr>`
    }
        totals()

}

function del1(index) {
    itemList.splice(index, 1)
    document.getElementById('tbody').innerHTML = ''
    for (let i = 0; i < itemList.length; i++) {
        let items = itemList[i]
        let del
        if (items.color == 'green') {
            del = 'del1'
        } else {
            del = 'del2'
        }
        document.getElementById('tbody').innerHTML += `                <tr>
                    <td class='td1 snotb'>${i+1}</td>
                    <td class='td1 snotb'>${items.productname}</td>
                    <td class='${items.color}'>${items.amount}</td>
                    <td><button class='${items.color}' onclick=${del}(${i})>
                        Delete
                    </button></td>
                </tr>`
    }
        totals()

}

function del2(index) {
    itemList.splice(index, 1)
    document.getElementById('tbody').innerHTML = ''
    for (let i = 0; i < itemList.length; i++) {
        let items = itemList[i]
        let del
        if (items.color == 'green') {
            del = 'del1'
        } else {
            del = 'del2'
        }
        document.getElementById('tbody').innerHTML += `                <tr>
                    <td class='td1 snotb'>${i+1}</td>
                    <td class='td1'>${items.productname}</td>
                    <td class='${items.color}'>${items.amount}</td>
                    <td><button class='${items.color}' onclick=${del}(${i})>
                        Delete
                    </button></td>
                </tr>`
    }
        totals()

}

function totals() {
    let te = 0
    let ti = 0
    for (let i = 0; i < itemList.length; i++) {
        if(itemList[i].color === 'green'){
            ti += itemList[i].amount
        }else{
            te += itemList[i].amount
        }
    }
    document.getElementById('te').innerHTML = te
    document.getElementById('ti').innerText = ti

    let tp = document.getElementById('tp').innerText
    let tl = document.getElementById('tl').innerText

    let tp_tl = ti - te

    document.getElementById('tl').innerText = 0
    let zero = 0
    if(tp_tl >= 0){
        document.getElementById('tp').innerText = 0 + tp_tl
    }else{
        document.getElementById('tl').innerText = document.getElementById('tl').innerText.slice(1)
        document.getElementById('tl').innerText = 0 + tp_tl
    }
}