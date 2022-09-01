const getArgs = (args) => {
	const res = {};
	const [executor, file, ...rest] = args;
	rest.forEach((value, index, array) => {
		if(value.charAt(0) == '-') {
			//Если это последний элемент, то значит он равен true. Т.к. после него нет возможных значений
			if (index == array.length - 1){
				res[value.substring(1)] = true;
			} 
			//Если след. за элементом без "-", то присваем его значение пред.элементу - свойству.
			else if(array[index + 1].charAt(0) != '-') {
				res[value.substring(1)] = array[index + 1];
			} 
			//Если после этого еще есть элемент с дефисом, то присваиваем ему true. Например: "-s -h"
			else {
				res[value.substring(1)] = true;
			}
		}
	});
	return res;
};

export { getArgs }