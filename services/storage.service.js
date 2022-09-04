import { homedir } from 'os';
import { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path';

const filePath = join(homedir(), 'Node_Lesson/weather_app/weather-data.json');

const saveKeyValue = (key, value) => {
	console.log(basename(filePath)); //Имя конечного файла или папки в пути
	console.log(dirname(filePath)); //Имя дерриктории конечной
	console.log(extname(filePath)); //Расширения файла из пути
	console.log(relative(filePath, dirname(filePath))); //Относительный путь между двумя путями которые мы передали. "Из" 1 пути "Во" 2 путь
	console.log(isAbsolute(filePath)); //Проверяет путь относительный (с точками ../../) или абсолютный
	console.log(resolve('../')); // ?!?!?! Преобразует относительный путь в абсолютный
	console.log(sep); //Разделитель путей. В разных ОС он разный, поэтому если нужно разделить по путь используем переменную "sep"
};

export { saveKeyValue };