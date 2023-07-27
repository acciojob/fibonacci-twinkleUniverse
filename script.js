function fibonacci(num) {
// your code here
	let fibo=0,a=0,b=1;
	if(num==0)return a;
	if(num==1)return b;
	for(let i=3;i<=num;i++){
		fibo=a+b;
		a=b;
		b=fibo;
	}
	return fibo;
}
//console.log(fibonacci(4));
module.exports = fibonacci;
