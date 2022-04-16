function isPrimeNumber(num) { //value-название переменной сделать
    if (typeof num === 'number') {
        isSinglePrime(num); 
    } else if (Array.isArray(num)) {
        for (let i = 0; i < num.length; i++) { //foreach
            if (typeof num[i] === 'number') {
                isSinglePrime(num[i]);
            } else {
                console.log(num[i] + ' is not a number');
            }
        }
    } else {
        console.log(num + ' is not a number, neither an array');
    }
  
    function isSinglePrime(num) {
        let isPrime = true;
  
        if (!Number.isInteger(num) || num <= 1) {
            isPrime = false;
        }
  
        for (let i = 2; i < num && isPrime; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
  
        if (isPrime) {
            console.log(num + ' is a prime number');
        } else {
            console.log(num + ' is not a prime number');
        }
    }
}