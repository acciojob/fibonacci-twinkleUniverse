function fibonacci(num) {
// your code here
	let a=0,b=1;
	if(num==1)return a;
	if(num==2)return b;
	for(let i=3;i<=num;i++){
		let c=a+b;
		a=b;
		b=c;
	}
	return b;
}
console.log(fibonacci(4));
module.exports = fibonacci;
