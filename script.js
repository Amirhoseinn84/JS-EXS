'use strict'

// var num = 'Amir';

// if (num.length == 4) {
//     console.log('its true');
// } else {
//     console.log('its wrong');
// }


// for(var i = 0 ; i < 50 ; i++) {
//         console.log(i)
// }

// var list = [1,2,3,4,5]

// function sum(array) {
//         var total = 0;
//         for (i= 0; i < array.length; i++) {
//                 console.log(array[i]);
//         }
        
// }

// console.log(list);


var i = 0;
var list = [];

while (i < 10) {
        if (i % 2 == 0) {
                console.log('A')
        } else {
                console.log('B')
        }
        
        if (i % 2 !== 0) {
                list.push(i);
        }
        i++;
}

console.log(list);