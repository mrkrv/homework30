let masiv = [2,5,13,25,32,45,52,54,75,12]

// //1. Функция принимает массив и выводит его на экран.
// let f1 = function(masiv){
//     return masiv
// }
// document.write(f1(masiv))

// 2. Функция принимает массив и выводит только четные элементы.

// let f2 = (masiv1) =>
// {
//     for (let i = 0; i < masiv1.length; i++)
//     {
//         if(masiv1[i] % 2 == 0){
//             document.write(`<p>${masiv1[i]}</p>`);
//         }
//     }
// }
// f2(masiv)
// document.write(f2(masiv1))

//3. Функция принимает массив и возвращает сумму всех элементов массива.

// let sumf3 = 0
// let f3 = (masiv1) =>
// {

//     for (let i = 0; i  < masiv1.length; i ++)
//     {
//         sumf3 += masiv1[i];
//     }
//         document.write(sumf3)
// }
// f3(masiv)

//4. Функция принимает массив и возвращает его максимальный элемент.


// let f4 = (masiv1) =>
// {
//     let max = masiv1[0];

//     for(let i = 1; i< masiv1.length; i++){
//         if(masiv1[i] > max){
//             max = masiv1[i];
//         }
//     }
//     return max
// }
// f4(masiv)

//5. Функция добавления нового элемента в массив по указанному индексу.

//     let f5 = (masiv1,index) =>{
//         let m1 = +prompt("Введіть число яке буде занесене в масив")
//         masiv1.splice(index,0,m1);
//         return masiv1
//     }

// let new_arr = f5(masiv,2)
// document.write(new_arr)

//6. Функция удаления элемента из массива по указанном индексу
let index = + prompt("Скільки елементів вит хочите видалити з масива ?")
let f6 = (masiv1,index) =>{
    let m1 = +prompt("Введіть індекс числа починаючи з якого потрібно видаляти( де індекс 0 - перше число)");
    
    masiv1.splice(m1,index);
    return masiv1
}

let new_arr = f6(masiv,index)
document.write(new_arr)

