//Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//отримує текст з параграфа з id 'content'
/*
let info = document.getElementById('content');
console.log(info);
*/

//отримує текст з блоку з id 'rules'
/*
let info = document.getElementsByClassName('fc bp');
console.log(info[0]);
*/

//замініть текст параграфа з id 'content' на будь-який інший
/*
let info = document.getElementById('content');
info.innerText = 'Some new information';
*/

//замініть текст параграфа з id 'rules' на будь-який інший
/*
let info = document.getElementById('rules');
info.innerText = 'Some new information';
*/

//змініть кожному елементу колір фону на червоний
/*
document.getElementById('content').style.backgroundColor = 'red';
document.getElementById('rules').style.backgroundColor = 'red';
const colourRed = document.getElementsByClassName('fc_rules');
for (let arr of colourRed){
    arr.style.backgroundColor = 'red';
}
*/

//змініть кожному елементу колір тексту на синій
/*
document.getElementById('content').style.color = 'blue';
document.getElementById('rules').style.color = 'blue';
const colourRed = document.getElementsByClassName('fc_rules');
for (let arr of colourRed){
    arr.style.color = 'blue';
}
*/

//отримати весь список класів елемента з id=rules і вивести їх в console.log
/*
const info = document.getElementById('rules');
console.log(info.classList);
*/

//отримати всі елементи з класом fc_rules
/*
const rules = document.getElementsByClassName('fc_rules');
for (let x of rules){
    console.log(x);
}
*/

//поміняти колір тексту у всіх елементів fc_rules на червоний
/*
const colourRed = document.getElementsByClassName('fc_rules');
for (let arr of colourRed){
    arr.style.color = 'red';
}
*/


/*
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];
*/

//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//Вставити цей блок на сторінку
/*
for (let info of users){
    const usersInfo = document.createElement('div');
usersInfo.innerHTML = `Name = ${info.name} <br> Age = ${info.age} <br>`;
document.body.appendChild(usersInfo);
}
*/

//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
/*
for (let info of users){
    const usersInfo = document.createElement('div');
    const address = document.createElement('address');
    const city = document.createElement('city');
    const country = document.createElement('country');
    const street = document.createElement('street');
    const houseNumber = document.createElement('houseNumber');
    usersInfo.innerHTML = `<br> Name = ${info.name} <br> Age = ${info.age} <br>`;
    address.innerHTML = `Address: <br>`;
    city.innerHTML = `City = ${info.address.city} <br>`;
    country.innerHTML = `Country = ${info.address.country} <br>`;
    street.innerHTML = `Street = ${info.address.street} <br> `;
    houseNumber.innerHTML = `House number = ${info.address.houseNumber} <br>`;
    document.body.appendChild(usersInfo);
    document.body.appendChild(address);
    document.body.appendChild(city);
    document.body.appendChild(country);
    document.body.appendChild(street);
    document.body.appendChild(houseNumber);

}
*/

//Взяти файл template_2.html та працювати в ньому
//1) Напишіть код, який :
//змінює колір тексту елемнту з ід main_header, та текст на назву групи (mon-year)
/*

const firstChange = document.getElementById('main_header');
firstChange.style.color = 'blue';
firstChange.innerHTML = 'February-2021';


//робить шириниу елементу ul 400px

const ulChange = document.getElementsByTagName('ul');
for (let x of ulChange){
    x.style.width = '400px';

}

//робить шириниу всіх елементів з класом linkList шириною 50%

const linkListWidth = document.getElementsByClassName('linkList');
for (let x of linkListWidth){
    x.style.width = '50%';
}

//отримує текст який зберігається в елементі з класом listElement2

const infoOfEl2 = document.getElementsByClassName('listElement2');
for (let x of infoOfEl2){
console.log(x.textContent);
}

//отримує всі елементи li та змінює ім колір фону на сірий

const liChange = document.getElementsByTagName('li');
for (let x of liChange){
    x.style.backgroundColor = 'gray';
}

//отримує всі елементи 'a' та додає їм клас anchor

const classAnchor = document.getElementsByTagName('a');
for (let x of liChange){
    x.classList.add('anchor');
}

//отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

const sizeforLink3 = document.getElementsByTagName('a');
for (let x of sizeforLink3){

}

//отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

const classForAel = document.getElementsByTagName('a');
for (let x of classForAel){
    x.classList.add(x.textContent);
}

//отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const bColourforSubHeader = document.getElementsByClassName('sub-header');
let bColorInfo = prompt('Enter colour for back ground: ');
for (let x of bColourforSubHeader){
    x.style.backgroundColor = bColorInfo;
}

//отримує всі елементи 'sub-header' та змінює колір тексту у випаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

const colourforSubHeader = document.getElementsByClassName('sub-header');
let colorInfo = prompt('Enter colour for text: ');
for (let x of colourforSubHeader){
    if (x.textContent === 'content 2 segment'){
        x.style.color = colorInfo;
    }

}

//отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content = document.getElementsByClassName('content_1');
let content1Text = prompt('Enter text: ');
for (let x of content){
    x.innerHTML = content1Text;
}

//отримати елементи p та змінити їм padding на 20px

const pElements = document.getElementsByTagName('p');
for (let x of pElements){
    x.style.padding = '20px';
}

//отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

const text2Element = document.getElementsByClassName('text2');
for (let x of text2Element){
    x.innerHTML = 'February-2021';
}
*/

//Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
/*

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];


const content = document.createElement('div');
const wrap = document.createElement('div');
const titleBlok = document.createElement('h1');
document.body.appendChild(content);
content.setAttribute('id', 'content');
titleBlok.innerHTML = 'Правила бойцовского клуба';
document.body.appendChild(titleBlok);
document.body.appendChild(wrap);
wrap.setAttribute('id', 'wrap');
for (let list = 0; list <= rules.length; list++) {
    const bodyBlokH2 = document.createElement('h2');
    const bodyBlokp = document.createElement('p');
    const listOfRules = document.createElement('div');
    let numm = Number(list) + 1;
    bodyBlokH2.innerHTML = rules[list].title;
    bodyBlokp.innerHTML = rules[list].body;
    document.getElementById('wrap').appendChild(listOfRules);
    listOfRules.setAttribute('class', 'rules rule' + numm);
    listOfRules.appendChild(bodyBlokH2);
    listOfRules.appendChild(bodyBlokp);

}
*/

//- Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
/*
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let userWithAddres = [];
for (const users of usersWithId) {
    for (const cities of citiesWithId) {
        if (users.id === cities.user_id) {
            users.address = cities;
            userWithAddres.push(users);
        }
    }
}
console.log(userWithAddres);
*/
