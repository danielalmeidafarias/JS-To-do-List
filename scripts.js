const newItemInput = document.querySelector('#newItemInput')
const newItemBtn = document.querySelector('#newItemBtn')
const itemsList = document.querySelector('#itemsList')

let checkBtn = document.querySelectorAll('#checkBtn')
let item = document.querySelectorAll('#item')

let keys = Object.keys(localStorage)
let tasks = [...keys]

// Ordenando o array
for (let i = 0; i < tasks.length; i++) {
    for (let j = i + 1; j < tasks.length; j++) {
        if (Number(tasks[j]) < Number(tasks[i])) {
            let temp = Number(tasks[i])
            tasks[i] = Number(tasks[j])
            tasks[j] = temp
        }
    }
}

let i = tasks.length

newItemBtn.addEventListener('click', addItem)

// 4- Adicionar tarefa com Enter
newItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem()
    }
})

// 1- Adicionar itens à lista
function addItem() {
    if(newItemInput.value != '') {
        i++

        let itemDiv = document.createElement('div')
        itemDiv.setAttribute('id', 'itemDiv')
        itemDiv.classList = 'itemDiv'
        itemsList.appendChild(itemDiv)

        let item = document.createElement('p')
        item.setAttribute('id', 'item')
        item.classList = 'item'
        item.innerHTML = newItemInput.value
        itemDiv.appendChild(item)
        console.log(item.style.backgroundColor)

        let checkBtn = document.createElement('button')
        checkBtn.setAttribute('id', 'checkBtn')
        checkBtn.classList = 'checkBtn'
        checkBtn.innerHTML = '<img src=".//assets/check.png">'
        itemDiv.appendChild(checkBtn)

        let removeBtn = document.createElement('button')
        removeBtn.setAttribute('id', 'removeBtn')
        removeBtn.classList = 'removeBtn'
        removeBtn.innerHTML = '<img src=".//assets/leixeira.png">'
        itemDiv.appendChild(removeBtn)
    
        let id = i

        localStorage.setItem(id, JSON.stringify(itemDiv.innerHTML))
        
        // 2- Excluir itens da lista

        function removeItem() {
            itemsList.removeChild(itemDiv)
            localStorage.removeItem(id)
        }
    
        removeBtn.addEventListener('click', removeItem)

        newItemInput.value = ''

        // 3- Marcar itens como concluídos

        function checkItem() {

            if(item.attributes[0].value == 'checked') {
                item.attributes[0].value = 'checkBtn'
                checkBtn.setAttribute('id', 'checkBtn')
            } else {
                
                item.attributes[0].value = 'checked'
                checkBtn.setAttribute('id', 'checked')
            }

        }

        checkBtn.addEventListener('click', checkItem)

    } else {
        alert('Você deve incluir algum texto')
    }

}

tasks.forEach((x) => {
    let recoverValue = localStorage.getItem(x).substring(31, localStorage.getItem(x).length - 180)

    let itemDiv = document.createElement('div')
    itemDiv.setAttribute('id', 'itemDiv')
    itemDiv.classList = 'itemDiv'
    itemsList.appendChild(itemDiv)

    let item = document.createElement('p')
    item.setAttribute('id', 'item')
    item.classList = 'item'
    item.innerHTML = recoverValue
    itemDiv.appendChild(item)
    
    let checkBtn = document.createElement('button')
    checkBtn.setAttribute('id', 'checkBtn')
    checkBtn.classList = 'checkBtn'
    checkBtn.innerHTML = '<img src=".//assets/check.png">'
    itemDiv.appendChild(checkBtn)

    let removeBtn = document.createElement('button')
    removeBtn.setAttribute('id', 'removeBtn')
    removeBtn.classList = 'removeBtn'
    removeBtn.innerHTML = '<img src=".//assets/leixeira.png"/>'
    itemDiv.appendChild(removeBtn)


    function removeItem() {
        itemsList.removeChild(itemDiv)
        localStorage.removeItem(x)
    }
    
    removeBtn.addEventListener('click', removeItem)

    
    function checkItem() {

        if(item.attributes[0].value == 'checked') {
            item.attributes[0].value = 'checkItem'
            checkBtn.setAttribute('id', 'checkBtn')
        } else {
        
            item.attributes[0].value = 'checked'
            checkBtn.setAttribute('id', 'checked')
        }

    }

    checkBtn.addEventListener('click', checkItem)

})


