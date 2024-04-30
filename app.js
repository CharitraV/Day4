// 1. Do the below programs in anonymous function & IIFE

// a. Print odd numbers in an array
//anonymous function

var oddNumber = function (value){
    var oddNum =[];
      for (var i=0; i< value.length ; i++){
          if(value[i]%2 !==0){
          oddNum.push(value[i]);
          }
      }
  return oddNum
  }
  var numbers= [1, 2, 3, 4, 5, 6];
  console.log("1.a.Printing Odd number through anonymous function",oddNumber(numbers));
  
  
  // a. Print odd numbers in an array
  // IIFE function 
  
   var numbers= [1, 2, 3, 4, 5, 6];
   (function (value){
      var oddNum =[];
        for (var i=0; i< value.length ; i++){
            if(value[i]%2 !==0){
            oddNum.push(value[i]);
            }
        }
    console.log("1.a.Printing Odd number through IIFE function",oddNum);
  })(numbers); 
  
  
  //b. Convert all the strings to title caps in a string array 
  //anonymous function
  
  var str = "hello world weolcome to day4 assignment";
  var upCase= function(arr){
      var titleCase = "";
      arr.split(" ").forEach(word => {
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      titleCase += capitalizedWord + " ";
  });
  return titleCase;
  }
  console.log("1.b.Printing title in Uppper Case through annonymous function",upCase(str));
  
  
  //b. Convert all the strings to title caps in a string array 
  // IIFE function 
  
  
  var str = "hello world weolcome to day4 assignment";
  
  ( function (arr){
      var titleCase = "";
      arr.split(" ").forEach(word => {
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      titleCase += capitalizedWord + " ";
  });
  console.log("1.b.Printing title in Uppper Case through IIFE function",titleCase);
  })(str);
  
  
  // c. Sum of all numbers in an array
  // annonymous function
  
  var number= [1, 2, 3, 4, 5, 6];
  
  var sumNumber= function(arr){
      var total =0;
      arr.forEach(num => total+= num);
      return total
  }
  var total= sumNumber(number);
  console.log("1.c.Sum of all numbers in an array through annonymous functiontotal",total)
  
  
  // c. Sum of all numbers in an array
  // IIFE function
  
  var number= [1, 2, 3, 4, 5, 6];
  (function(arr){
      var total =0;
      arr.forEach(num => total+= num);
      console.log("1.c.Sum of all numbers in an array through IIFE functiontotal",total)
  })(number)
  
  
  
  // d. Return all the prime numbers in an array
  // annonymous function
  
  var Numbers= [12, 5, 11, 9, 2, 10]
  
  var primeNumber= function(arr){
      var prime=[];
      arr.forEach(function(num){
          for (var i=2; i< num; i++){
              if (num%2 ==0){
              return false;
              }
              }prime.push(num)
          })
  return prime
  }
  console.log("1.d.he prime numbers in an array through annonymous function", primeNumber(Numbers))
  
  
  
  // e. Return all the palindromes in an array
  // annonymous function
  
  
  var isPalindrome = function(value) {
      var result=[];
          value.forEach( function(str) {
              let j = str.length - 1        
          for (let i = 0; i < str.length / 2; i++) {
              if (str[i] != str[j]) {
                  return false;
              }        j--;
          }result.push(str)
      })  
    return result
  }
  var palindrome =["arora","charitra","nitin"]
  console.log("1.e.Palindromes in an array through annonymous function",isPalindrome(palindrome))
  
  
  // f. Return median of two sorted arrays of the same size.
  // annonymous function
  
  var array1= [1, 2, 3];
  var array2= [4, 5, 6];
  
  var isMedian =function(arr1, arr2){
      var median= (arr1[arr1.length-1]+ arr2[0])/2
      return median
  }
  console.log("1.f.Median of two sorted arrays through annonymous function is ",isMedian(array1,array2));
  
  
  //g. Remove duplicates from an array
  
  const arrayValue = [1, 2, 3, 2, 3];
  (function (arr) {
      let uniqueArr = [];
      for (let i of arr) {       
        if (uniqueArr.indexOf(i) === -1) {   // indexOf return -1 wwhen the value is not found 
          uniqueArr.push(i);
        }
      }
      console.log("1.g.Remove duplicates from an array through IIFE function",uniqueArr);
    })(arrayValue)
  
  
  
  //h. Rotate an array by k times
  
   var rotateArray= function(arr, rotation){
      var k= rotation% arr.length
      var rotatedValue= [];   
     for (var i=k; i<arr.length; i++){
         rotatedValue.push(arr[i])
     }
     for (var i=0; i<k; i++){
         rotatedValue.push(arr[i])   
     }
     return rotatedValue
   }
  
   const array = [1, 2, 3, 4, 5];
   let K= 11;
   console.log("1.h.Rotate an array by k times using function",rotateArray(array,K));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   2. Do the below programs in arrow functions.
  //   a. Print odd numbers in an array
  
  var numbers= [1, 2, 3, 4, 5, 6];
  
  var oddNumber = (arr) =>{
      var oddNum= [];
  arr.forEach(value => {
      if(value%2 !==0){
          oddNum.push(value);
          }
  })
  return oddNum
  }
  var oddNumber1= oddNumber(numbers);
  console.log("2.a.Printing Odd number through Arrow function",oddNumber1);
  
  
  
  //b. Convert all the strings to title caps in a string array
  
  var str = "hello world weolcome to day4 assignment";
   var upCase= (arr) =>{
  
      var titleCase = "";
      arr.split(" ").forEach(word => {
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      titleCase += capitalizedWord + " ";
      
  });
  return titleCase
   }
   console.log("2.b.Printing title in Uppper Case through Arrow function",upCase(str));
  
  
  //c. Sum of all numbers in an array
  
  var number= [1, 2, 3, 4, 5, 6];
  var sum = (arr) => {
  var total =0;
  arr.forEach(num => total+= num);
  return total
  }
  var total= sum(number);
  console.log("2.c.Sum of all numbers in an array through Arrow functiontotal",total)
  
  
  
  //d. Return all the prime numbers in an array
  
  
  var Numbers= [12, 5, 11, 9, 2, 10]
  var primeNumber= (arr)=>{
      var prime=[];
      arr.forEach(num =>{
          for (var i=2; i< num; i++){
              if (num%2 ==0){
              return false;
              }
              }prime.push(num)
          })
  return prime
  }
  console.log("2.d.The prime numbers in an array through Arrow function", primeNumber(Numbers))
  
  
  
  //e. Return all the palindromes in an array
  
  var isPalindrome = (value)=> {
      var result=[];
          value.forEach( str => {
              let j = str.length - 1        
          for (let i = 0; i < str.length / 2; i++) {
              if (str[i] != str[j]) {
                  return false;
              }        j--;
          }result.push(str)
      })  
    return result
  }
  var palindrome =["arora","charitra","nitin"]
  console.log("2.e.Palindromes in an array through arrow function",isPalindrome(palindrome))
  
  
  
  
  
  
  
  