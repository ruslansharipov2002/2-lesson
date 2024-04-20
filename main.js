// 1-task 




// function uzunliklar_array(elements) {
//     const result = {};
//     elements.forEach(element => {
//       result[element] = element.length;
//     });
//     return result;
//   }
  
//   const input_array = ["text", "world", "laptop"];
//   const output_object = uzunliklar_array(input_array);
//   console.log(output_object);
  

// 2-task 


// function getLevel(n) {
//     const result = [];
//     let current = 2;
//     for (let i = 0; i < n; i++) {
//       result.push(current);
//       current *= 2;
//     }
//     return result;
//   }
  
//   const n = 4;
//   const resultArray = getLevel(n);
//   console.log(resultArray);



// 3-task 


// function getLevel(n) {
//     const result = [];
//     let current = 1;
//     for (let i = 0; i < n; i++) {
//       result.push(current);
//       current *= 2;
//     }
//     return result;
//   }
  
//   console.log("n: 4");
//   console.log("result:", getLevel(4))
  
//   console.log("n: 5");
//   console.log("result:", getLevel(5))
 

// 4-task 

// function engKamUzunSoz(sentence) {
//     const words = sentence.split(' ');
//     let shortestWord = words[0];
  
//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length < shortestWord.length) {
//         shortestWord = words[i];
//       }
//     }
  
//     return shortestWord;
//   }
  
//   const exampleSentence = "Bu bir test gapdir";
//   console.log(engKamUzunSoz(exampleSentence)); //


// 4-task \


// function martagaKopaytir(obj, n) {
//     const result = {};
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         result[key] = obj[key] * n;
//       }
//     }
//     return result;
//   }
  
//   const obj = {a: 2, b: 3, c: 4};
//   const n = 3;
//   const res = martagaKopaytir(obj, n);
//   console.log(res); 
  
  

// 5-task 


// function nechtaRaqam(string) {
//     const regex = /\d/g; 
//     const matches = string.match(regex)
//     return matches ? matches.length : 0
//   }
  
//   const exampleString = "Bu 234 sonli matn";
//   console.log(nechtaRaqam(exampleString))
  


// const sumOfDigits = (...numbers) => {
//     const sum = numbers.reduce((acc, num) => acc + num, 0)
//     const sumArray = [...String(sum)].map(Number); 
//     return sumArray;
//   };
  
//   const numbers = [1, 22, 3];
//   console.log("Result =>", sumOfDigits(...numbers))

// 18. Ixtiyoriy arrow function yarating va uning parametriga bir nechta sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang: 

  
       result=> [2,6] ozbej tilida


  


  