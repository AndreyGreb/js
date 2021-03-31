// 1. Используя метод map() напишите код, который получает из массива строк
//новый массив, содержащий их длины.

const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

const array1 = vegetables.map((item) => item.length);
console.log(array1);

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
//Использую метод reduce() напишите функцию currentSums(numbers),
//которая возвращает новый массив из такого же числа элементов, в
//котором на каждой позиции будет находиться сумма элементов массива
//numbers до этой позиции включительно.

const numbers = [2, 3, 5, 7, 11, 13, 17];
const array2 = []

const currentSums = (numbers) => {
    numbers.reduce((total, current) => {
        array2.push(total+=current)
        return total
    }, 0)
    console.log(array2)
};

currentSums(numbers)

//3. Напишите код, который получает из массива чисел новый массив,
//содержащий пары чисел, которые в сумме должны быть равны семи:
//(0:7), (1:6) и т.д.

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let array3 =[]
const sumSeven = (numbers) => {
    numbers.map(item1 => {
        numbers.map(item2 => {
            if(item2 > item1) {
                if(item1 + item2 ===7) {
                    array3.push(item1)
                    array3.push(item2)
                }
            }
            
        })
    })
      
    console.log(array3)
}

sumSeven(arr)

//4. Перед вами переменная, содержащая строку. Напишите код, создащий
//массив, который будет состоять из первых букв слов строки str.

const str = "Каждый охотник желает знать, где сидит фазан."

const foo = (array) => {
    let array4 = array.split(" ")
    let arr = []
    array4.map(item => {
        arr.push(item.charAt(0))
    })

    console.log(arr)
}

foo(str)

//5. Перед вами переменная, содержащая строку. Напишите код, создащий
//массив, который будет состоять из строк, состоящих из предыдущего,
//текущего и следующего символа строки str.

const str5 ="JavaScript"

const foo5 = (arr) => {
    let array5 = arr.split("")
    let stroka =""
    let array = []
    let index = 0
    for(i=0; i<array5.length; i++) {
        index = i - 1
        if(index>=0) {
            stroka = stroka + array5[index]
        }
        index = i
        stroka = stroka + array5[index]
        index = i + 1
        if(index < array5.length) {
            stroka = stroka + array5[index]
        }
       
        array.push(stroka)
        stroka=''
    }
    console.log(array)
} 

foo5(str5)

//6. Напишите код, преобразующий массив цифр, которые располагаются
//неупорядоченно, в массив цифр расположенных по убыванию их
//значений.

const numerics = [5, 7, 2, 9, 3, 1, 8];

const foo6 = (numerics) => {
    console.log(numerics.sort((a,b) =>  a - b))
}

foo6(numerics)

//7. Напишите код, объединяющий три массива цифр, и располагающий
//цифры, в полученном массиве, в порядке убывания их значений через
//пробел.

const a = [1,2,3]
const b = [4,5,6]
const c = [7,8,9]

const getArr = (a,b,c) => {
    let array =[]
    let arrayAfter = []
    let stroka =''
    a.map(item => array.push(item))
    b.map(item => array.push(item))
    c.map(item => array.push(item))
    array = array.sort((a,b) => b - a)
    array.toString()
    array.map(item => {
        stroka = stroka + item + " "
    })
    arrayAfter.push(stroka)
    console.log(arrayAfter)
}

getArr(a,b,c)

//8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите
//сумму элементов этого массива. Массив, конечно же, может быть
//произвольным.

const array8 = [[1, 2, 3], [4, 5], [6]]

const foo8 = (arr) => {
    let sum = 0
    for(i=0; i<arr.length; i++) {
        for(j=0; j<arr[i].length; j++) {
            sum+= arr[i][j]
        }
    }
    console.log(sum)
    
}

foo8(array8)

//9. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7,
//8]]]. Найдите сумму элементов этого массива. Массив, конечно же,
//может быть произвольным.

const array9 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

const foo9 = (arr) => {
    let sum = 0
    for(i=0; i<arr.length; i++) {
        for(j=0; j<arr[i].length; j++) {
            for(k=0; k<arr[i][j].length; k++) {
                sum+= arr[i][j][k]
            }
        }
    }
    console.log(sum)
    
}

foo9(array9)

//10. Дан массив с числами. Не используя метода reverse переверните его
//элементы в обратном порядке.

const array10 = [5, 7, 2, 9, 3, 1, 8];

const foo10 = (arr) => {
    let array = []
    for(i=0; i<arr.length; i++) {
        array.unshift(arr[i])
    }
    console.log(array)
}

foo10(array10)

//11. Дан массив с числами. Узнайте сколько элементов с начала массива
//надо сложить, чтобы в сумме получилось больше 10-ти.

const array11 = [2, 3, 2, 9, 3, 1, 8];

const foo11 = (arr) => {
    let count = 0
    let sum = 0
    for(i=0; i<arr.length; i++) {
        sum+=arr[i]
        if(sum <= 10) {
            count++
        } else {
            break
        }
    }
    console.log(count)
}

foo11(array11)

//12. Сделайте функцию arrayFill, которая будет заполнять массив
//заданными значениями. Первым параметром функция принимает
//значение, которым заполнять массив, а вторым - сколько элементов
//должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x',
//'x', 'x', 'x'].

const arrayFill = (value, count) => {
    let array = []
    for(i=0; i<count; i++) {
        array.push(value)
    }
    console.log(array)
}

arrayFill("x", 5)


