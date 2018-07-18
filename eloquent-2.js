// exercise 1 

let number = "#" ;
while (number.length <= 7) {
  console.log(number);
  number = number + "#";
}

// exercise 2 

let number = 1 ;
while (number <= 100) {
  if (number %3 === 0 && number %5 === 0) console.log("FizzBuzz");
  else if (number %3 === 0) console.log("Fizz");
  else if (number %5 === 0) console.log("Buzz");
  else console.log(number);
  
  number = number + 1;
}

//execise 3 

let size = 10;
let halfsize = size/2;
let chessboard = ""
    
for (var x = 1; x <= halfsize; x++) {
for (var y = 1; y <= halfsize; y++) {
	if (x % 2 === 0) {
		chessboard+= "# "
     } else {
       	chessboard+= " #"
      }
      }
      chessboard+= "\n"
    }
    
console.log(chessboard)

