function fibonacci(num) {
// your code here
	// let fibo=0,a=0,b=1;
	// if(num==0)return a;
	// if(num==1)return b;
	// for(let i=3;i<=num;i++){
	// 	fibo=a+b;
	// 	a=b;
	// 	b=fibo;
	// }
	// return fibo;
	if(num<=1)return num;
	return fibonacci(num-1)+fibonacci(num-2)
}
//console.log(fibonacci(4));
module.exports = fibonacci;
