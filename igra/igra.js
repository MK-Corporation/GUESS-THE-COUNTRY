let letters = document.querySelectorAll('.letters button');
let wordRows = document.querySelectorAll('.words .row');
let images = document.querySelectorAll('.img-cont img');

let wordsArr = ['yyyyyy', 'yyyy', 'yyyyy', 'yyyy', 'yyyyyy'];

let currentRow = 0;

for (let i = 0; i < letters.length; i++) {
	letters[i].onclick =function () {
		addLetter(this);
	}
}


for (let i = 0; i < images.length; i++) {
 	images[i].onclick = function () {
 		currentRow = this.dataset.num;
 	}
}


function changeRow(color, backColor, reset = false) {
	let currentRowSubElems = wordRows[currentRow].querySelectorAll('div');
	for (let i = 0; i < currentRowSubElems.length; i++) {
		currentRowSubElems[i].style.background = backColor;
		currentRowSubElems[i].style.color = color;
		if (reset) {
			currentRowSubElems[i].innerText = '';
		}
	}
}

function addLetter(targetElem) {

	for (let i = 0; i < wordRows[currentRow].children.length; i++) {

		if (wordRows[currentRow].children[i].innerText == '') {
			wordRows[currentRow].children[i].innerText = targetElem.innerText;

			if (i == wordRows[currentRow].children.length -1) {

				if (wordsArr[currentRow] == wordRows[currentRow].innerText
					.split('\n')
					.join("")
					.toLowerCase()) {

					changeRow('white', '#33CC33');
					currentRow++;
				} else {
					changeRow('white', '#FF3333');

					setTimeout(function() {
						alert('ответ не верный');
					}, 200);
					setTimeout(function() {
						changeRow('black', '', true);
					}, 1000);
				}
			}
			break;
		}
	}
}

