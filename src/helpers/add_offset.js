export function addOffset(map) {
	//вычисляет размер карты по встроенному в API методу getSize(). Координата Y показывает 
	//размер карты в длину, мы умножаем его на какой-то процент(15) чтобы сдвинуть в будущем на 
	//эту величину и методом panBy двигаем по оси Y вниз (с минусом)
	const offsetY = map.getSize().y * 0.15;
	console.log(offsetY);
	map.panBy([0, -offsetY])
} 