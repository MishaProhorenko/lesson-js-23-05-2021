'use strict';


// let textChanger = (elem) => {
// 	let divCollection = elem.getElementsByTagName('div');

// 	for (let item of divCollection) {
// 		if (!item.children.length && item.innerText) {
// 			item.innerText = 'WTF';
// 		}
// 	}
// };
// textChanger(document.body)


// const div = document.createElement('div');
// div.innerText='rrrrr'
// const a = document.createElement('a');
// const h1 = document.createElement('h1');
// const span = document.createElement('span');
// const div1 = document.body.innerHTML = '<div>lorem ipsum</div>'
// const body = document.body;
// console.log(div)
// console.log(a)
// console.log(h1)
// console.log(span)
// console.log(div1)

// body.append(div)
// body.append(span)
// function(tagname/count/id)

// let addElem = (tagName, count, id) => {

// 	for (let i = 0; i <= count; i++) {
// 		const createdElem = document.createElement(tagName);
// 		const getElemId = document.getElementById(id)
// 		getElemId.append(createdElem)
// 		console.log(createdElem)
// 	}

// }

// console.log(addElem('span', 3, 'five'))


// const renderNameSurname = () => {
// 	const name = prompt('Enter a name');
// 	const surname = prompt('Enter a surname');

// 	const nameOnPage = document.createElement('div');
// 	nameOnPage.innerText = name;
// 	nameOnPage.classList.add('red');

// 	const surnameOnPage = document.createElement('div');
// 	surnameOnPage.innerText = surname;
// 	surnameOnPage.classList.add('bold');

// 	document.body.append(nameOnPage);
// 	document.body.append(surnameOnPage);
// };


// console.log(renderNameSurname())


// const createInput = (inputType, name, labelName) => {
// 	const cont = document.createElement('div');

// 	const lbl = document.createElement('label');
// 	lbl.innerText = labelName;

// 	const inp = document.createElement('input');
// 	inp.type = inputType;
// 	inp.name = name;


// 	lbl.prepend(inp);
// 	cont.append(lbl);

// 	document.body.append(cont);
// };

// createInput('radio', 'name1','labelname')

//=============================================================

// let renderNameSurname = () => {
// 	const name = prompt('Enter name');
// 	const surname = prompt('Enter surename');

// 	const divByName = document.createElement('div');
// 	divByName.innerText = name;
// 	divByName.classList = 'red';
// 	divByName.id = 'one'
// 	console.log(divByName)

// 	const divBySurname = document.createElement('div');
// 	divBySurname.innerText = surname;
// 	divBySurname.classList.add('bold');
// 	divByName.id = 'two'
// 	console.log(divBySurname)

// 	document.body.append(divByName)

// 	document.body.append(divBySurname)
// 	divByName.remove()
// 	document.body.append(divByName)

//  }

// renderNameSurname()


// let createdList = () => {
// 	let request;
// 	let ul = document.createElement('ul');

// 	while (true) {
// 		request = prompt('enter body list');
// 		if (request === null || request === '') break;
// 		let li = document.createElement('li');
// 		li.append(request);
// 		ul.append(li);

// 	}
// 	document.body.append(ul);
// }

// createdList()

let data = {
	"Рыбы": {
		"форель": {},
		"лосось": {}
	},

	"Деревья": {
		"Огромные": {
			"секвойя": {},
			"дуб": {}
		},
		"Цветковые": {
			"яблоня": {},
			"магнолия": {}
		}
	}
};

function createTree(container, obj) {
	container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
	// если нет дочерних элементов, то вызов возвращает undefined
	// и элемент <ul> не будет создан
	if (!Object.keys(obj).length) return;

	let ul = document.createElement('ul');

	for (let key in obj) {
		let li = document.createElement('li');
		li.innerHTML = key;

		let childrenUl = createTreeDom(obj[key]);
		if (childrenUl) {
			li.append(childrenUl);
		}

		ul.append(li);
	}

	return ul;
}

let container = document.getElementById('container');
createTree(container, data);