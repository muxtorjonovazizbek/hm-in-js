// 35. Berilgan foydalanuvchi ismlari massividan eng uzun ismni toping.

// function longestName(arr) {
//     let longWord = arr[0].length
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i].length);
//         if (longWord < arr[i].length) {
//             longWord = arr[i].length
//             result.push(arr[i])
//         }
//     }
//     console.log(result.join());
// }

// console.log(longestName(["Alice", "Bob", "Christina", "David"])); // "Christina"



// // 36. Berilgan qator ichidagi bir xil belgilarni olib tashlab, yangi qator hosil qiling.

// function removeConsecutiveDuplicates(str) {
//     let new_arr = []
//     let findUnique = new Set()
    
//     for(let item of str) {
//         if (!findUnique.has(item)) {
//             findUnique.add(item)
//             new_arr.push(item)
//         }
//     }
//     return new_arr.join("")
// }

// console.log(removeConsecutiveDuplicates("aaabbbcccaaa")); // "abc"


// 37. Berilgan massivning elementlarini k qadamga o'ngga ko'chiring.

// function rotateArray(arr, k) {
//     for (let i = 0; i < k; i++) {
//         arr.unshift((arr.pop()))
       
        
//     }
//     return arr
// }
// console.log(rotateArray([1, 2, 3, 4, 5],2)); // [4, 5, 1, 2, 3]


// 38. Berilgan ikki o'lchamli massivni bitta tekis qatorga aylantiring.

// function flattenArray(arr) {
//    let newONe = arr.flat(Infinity)
//    console.log(newONe);
// }

// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]



// 39. Berilgan son n uchun n x n ko'paytirish jadvali yaratish.

// function multiplicationTable(nums) {
//     let result = 0
//     for (let i = 1; i < 10; i++) {
//         result =  nums * i
//         console.log(`%c${nums} * ${i} = ${result}`,"color: #00FF00");
//     }
// }
// multiplicationTable(3);



// 40. Berilgan massivni ikkita teng qismga ajrating. Agar massivning uzunligi toq bo'lsa, markaziy elementni ikkinchi qismga qo'shing.







// 41. Berilgan kvadrat matritsaning asosiy va yordamchi diagonallarini almashtiring.

// function swapDiagonals(matrix) {
   
//     matrix.forEach(val => {
//         let reverseArr = val.reverse()
//         console.log(reverseArr);
//     });
//  }
 
//  console.log(swapDiagonals([
//      [1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]
//  ]));
//  // [
//  //   [3, 2, 1],
//  //   [4, 5, 6],
//  //   [9, 8, 7]
//  // ]



// 42. Berilgan massivdagi barcha elementlarning eng katta umumiy bo'luvchisini toping.

// function findGCD(arr) {
   
//     function gcd(a, b) {
//         if (b === 0) {
//             return a;
//         }
//         return gcd(b, a % b);
//     }

//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         result = gcd(result, arr[i]);
//     }

//     return result;
// }

// console.log(findGCD([24, 36, 48])); // 12
// console.log(findGCD([7, 14, 21]));  // 7
