let adidas = {model: 'adidas', marime: 35, culoare: 'verde', material: 'textil', calitate: 'superbuna'}
let nike = {model: 'nike', marime: 42, culoare: 'maro', material: 'piele intoarsa'}
let reebok = {model: 'reebook', marime: 31, culoare: 'rosul', material: 'goretex'}
let puma = {model: 'puma', marime: 39, culoare: 'negru', material: 'pielel'}
let fila = {model: 'fila', marime: 37, culoare: 'albastru', material: 'panza'}

let back_end_resources = [adidas, nike, reebok, puma, fila]

let th_collection = []

for (let key in back_end_resources[0]) {
    th_collection.push(key)
}

let tabel = document.getElementById('tabel')
let form = document.getElementById('form')
let buton_afiseaza_tabel = document.getElementById('buton_afiseaza_tabel')
let buton_sterge_tabel = document.getElementById('buton_sterge_tabel')

for (let i = 0; i < th_collection.length; i++) {
    let newinput = document.createElement('input')
    let newlabel = document.createElement('label')
    newinput.setAttribute('type', 'checkbox')
    newinput.setAttribute('id', th_collection[i])
    newinput.setAttribute('name', th_collection[i])
    newinput.setAttribute('value', th_collection[i])
    newlabel.setAttribute('for', th_collection[i])
    newlabel.innerText = th_collection[i]
    form.append(newinput)
    form.append(newlabel)
}

buton_afiseaza_tabel.onclick = () => {
    let checkboxes = document.querySelectorAll('input:checked')
    let thdinamic = []
    checkboxes.forEach((checkbox) => {
        thdinamic.push(checkbox.value)
    })

    for (let i = 0; i < thdinamic.length; i++) {
        let newrow = document.createElement('tr')
        let newth = document.createElement('th')
        newth.innerText = thdinamic[i]
        newrow.appendChild(newth)
        tabel.appendChild(newrow)
        for (let j = 0; j < back_end_resources.length; j++) {
            let newtd = document.createElement('td')
            newtd.innerText = back_end_resources[j][thdinamic[i]]
            newrow.appendChild(newtd)
            tabel.appendChild(newrow)
        }
    }
}

let alltr = document.getElementsByTagName('tr')
buton_sterge_tabel.onclick = () => {
    while (alltr.length > 0) {
        alltr[0].parentNode.removeChild(alltr[0]);
    } }