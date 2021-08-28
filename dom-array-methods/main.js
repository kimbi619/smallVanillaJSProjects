
const addUserBtn = document.querySelector('.addUser');
const doubleMoneyBtn = document.querySelector('.doubleMoney');
const showMilionairesBtn = document.querySelector('.showMilionaires');
const richestBtn = document.querySelector('.richest');
const wealthBtn = document.querySelector('.wealth');
const list = document.getElementById('list');

const divTotal = document.querySelector('.total')



let data = [];
getRandomUser();

async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();
    const user = data.results[0];
    
    const newPerson = {
        name:  `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*2000000)
    }
    addUser(newPerson)
    calculateTotalWealth();
}

const doubleMoney = ()=>{
    data.forEach(dataitem=>{
        dataitem.money = 2* dataitem.money
    })
    updateDOM();
}

const showMilionaires = ()=>{
    data = data.filter(dataitem =>dataitem.money > 1000000);

    updateDOM();
}

const calculateRichest = ()=>{
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}

const calculateTotalWealth=()=>{
    let total = 0
    data.forEach(dataitem=>{
        total +=dataitem.money
    })
    let wealthValue = ""
    wealthValue = `<li class="title"><span>Total</span><span class="money">${formatMoney(total)}</span></li>`;
    divTotal.innerHTML = wealthValue;
}

const addUser = (person)=>{
    data.push(person)
    updateDOM();
}
const updateDOM =(providedData = data)=>{
    list.innerHTML = `<li class="title"><span>person</span><span class="money">wealth</span></li>`
    providedData.forEach(dataitem=>{
        const row = document.createElement("li")
        row.innerHTML = `<span>${dataitem.name}</span><span class="money">${formatMoney(dataitem.money)}</span>`;
        list.appendChild(row);
    })
}
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }







const formatMoney = (money)=>{
    return '$' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}




addUserBtn.addEventListener('click', ()=>{
    getRandomUser();
})
doubleMoneyBtn.addEventListener('click', ()=>{
    doubleMoney();
})
showMilionairesBtn.addEventListener('click', ()=>{
    showMilionaires();
})
richestBtn.addEventListener('click', ()=>{
    calculateRichest()
})
wealthBtn.addEventListener('click', ()=>{
    divTotal.classList.toggle('showTotal')
    calculateTotalWealth()
})


