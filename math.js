
function derivateD (f, x, n = 0.0000000000001){
	return (f(x + n) - f(x) )/ n;
}

function IntegralD(f, a, b, n =  1000000){
	var deltax = (b - a) / n;
	var sum = 0;
	while(a <= b){
		sum += f(a) * deltax;
		a += deltax;
	}
	return sum;
}

function f1(x, a = 3){
	return x**a;
}
function f2(x){
	return  Math.cos(x);
}
function f3(x){
	//f(x) = e**x
	return (Math.E)**x;
}

for()