let adidas = {model: 'adidas', marime: 35, culoare: 'verde', material: 'textil', calitate: 'superbuna'}
let nike = {model: 'nike', marime: 42, culoare: 'maro', material: 'piele intoarsa'}
let reebok = {model: 'reebook', marime: 31, culoare: 'rosul', material: 'goretex'}
let puma = {model: 'puma', marime: 39, culoare: 'negru', material: 'pielel'}
let fila = {model: 'fila', marime: 37, culoare: 'albastru', material: 'panza'}

let back_end_resources = [adidas, nike, reebok, puma, fila]

//am creat un array gol pentru a salva in el proprietatile din obiect care vor deveni input checkboxes

let input_collection = []

for (let key in back_end_resources[0]) {
    input_collection.push(key)
}

let tabel = document.getElementById('tabel')
let form = document.getElementById('form')
let buton_afiseaza_tabel = document.getElementById('buton_afiseaza_tabel')
let buton_sterge_tabel = document.getElementById('buton_sterge_tabel')

// iterez peste elementele din array pentru a crea dinamic input checkboxes

for (let i = 0; i < input_collection.length; i++) {
    let newinput = document.createElement('input')
    let newlabel = document.createElement('label')
    newinput.setAttribute('type', 'checkbox')
    newinput.setAttribute('id', input_collection[i])
    newinput.setAttribute('name', input_collection[i])
    newinput.setAttribute('value', input_collection[i])
    newlabel.setAttribute('for', input_collection[i])
    newlabel.innerText = input_collection[i]
    form.append(newinput)
    form.append(newlabel)
}


buton_afiseaza_tabel.onclick = () => {
    //declar o variabila unde salvez colectia de checkboxuri care sunt checked
    let checkboxes = document.querySelectorAll('input:checked')

    // declar un array gol unde voi salva valoarile checkbox-urilor care sunt checked
    let thdinamic = []
    checkboxes.forEach((checkbox) => {
        thdinamic.push(checkbox.value)
    })

    // creez un for loop care sa treaca prin array-ul cu valorile checkbox-urilor si sa creeze un tr
    // si un th pentru fiecare. Acestea vor fi headerele, fiecare pe alt rand.
    for (let i = 0; i < thdinamic.length; i++) {
        let newrow = document.createElement('tr')
        let newth = document.createElement('th')
        newth.innerText = thdinamic[i]
        newrow.appendChild(newth)
        tabel.appendChild(newrow)

        //creez un al 2lea for loop care sa treaca prin obiectul back_end_resources
        //si sa creeze un td pt fiecare pozitie prin care trece. Fiecare pozitie prin
        //care trece este un alt obiect cu proprietati iar innertext-ul td-ului va fi
        //valoarea proprietatii din loop-ul i din pozitia j a obiectului principal.
        //Nu prea stiu sa explic mai bine, mi se pare ca am complicat explicatia oricum.
        for (let j = 0; j < back_end_resources.length; j++) {
            let newtd = document.createElement('td')
            newtd.innerText = back_end_resources[j][thdinamic[i]]
            newrow.appendChild(newtd)
            tabel.appendChild(newrow)
        }
    }
}

//selectez toate tr-urile din document si cand se da click pe buton, cat timp length-ul colectiei de tr
//este mai mare decat 0 se va selecta prima pozitie din tr, se merge la nodul parinte si se sterge acea pozitie
//se repeta while loop-ul pana cand lungimea colectiei de tr nu mai este > 0.
let alltr = document.getElementsByTagName('tr')
buton_sterge_tabel.onclick = () => {
    while (alltr.length > 0) {
        alltr[0].parentNode.removeChild(alltr[0]);
    } }