function fibonacci(num) {
// your code here
	
	if(num<=1)return num;
	return fibonacci(num-1)+fibonacci(num-2)
}
console.log(fibonacci(4));
module.exports = fibonacci;
