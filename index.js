

function inputValue(){
const buttons = document.querySelectorAll('#button');
const display = document.querySelector('.display');


buttons.forEach(key=> key.addEventListener('click', e => {
	
		const keys = e.target
		const logic = key.dataset.logic;
		const keyNumber = key.textContent;
		let displayNumber =  display.value;


		switch (logic) {
			
			case 'clear':
				display.value = "";
				break;
			case 'calculate':
				display.value = eval(display.value);
				break;
			default:
				display.value = displayNumber + keyNumber;

		};
		

}));


};

inputValue();