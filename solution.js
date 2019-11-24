## More Problem solving

# 1
## Calculate the Cube
Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.

``javascript
function calculateCube(num){
  let res = Math.pow(num, 3);
  console.log(res);
}
calculateCube(5);
```

> => 125


# 2
## Is a Vowel?
Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

```javascript
function isAVowel(character){
  character = character.toLowerCase();

 if(character.length == 1){
   if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
     console.log("True");
   }else{
   console.log("False");
   } 
 }else{
   console.log("Add only one character!");
 }
}

isAVowel("A");
```

> => true


# 3
## Get Two Lengths
Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

```javascript
function getTwoLengths(word1, word2){
  let arr1 = [word1.length];
  let arr2 = [word2.length];

  console.log(arr1, arr2 );
}
getTwoLengths("Hank", "Hippopopalous");

```

> => [4, 13]


# 4 
## Get Multiple Lengths

Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array of strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.


```javascript
function getMultipleLengths(word){
 let i = 0;
 let arr = [];
 while(i < word.length){
   arr.push(word[i].length);
   i++;
 }
 console.log(arr);
}
getMultipleLengths(["hello", "what", "is", "up", "dude"]);
```

> => [5, 4, 2, 2, 4]


# 5 // Homework 5, 6, 7 solve it with while loop.
## Maximum of Three Numbers
Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

```javascript
//First Solution without while loop
function maxOfThree(num1, num2, num3){
 let max = Math.max(num1,num2,num3);
 console.log(max);
}
maxOfThree(6, 9, 1);

//Second Solution WITH while loop
function maxOfThree(num1, num2, num3){
let array = [num1, num2, num3];
var i = 0 ;
var max = 0;

 while(i < array.length){
  if (array[i] > max) {
    max = array[i];
  }
 i++;
}
console.log(max);
}
maxOfThree(6, 9, 1);
```

> => 9


# 6
## Print Longest Word

Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```javascript
function printLongestWord(words){
 let longest = "";
 let i = 0;
  while(i < words.length){
    if(words[i].length > longest.length){
      longest = words[i];
    }
    i++;
  }
  return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
```

> => "Peanutbutter"


# 7
## Transmogrify the Numbers
Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
power of 2` is 225.

```javascript
function transmogrify(num1, num2, num3){
  let mult = 0;
  let res = 0;

  while(true){
    mult = num1 * num2;
    res = Math.pow(mult, num3);
    break; //Heheheheheh! :D
  }
  return res;
}
console.log(transmogrify(5, 3, 2));
```
> => 225


