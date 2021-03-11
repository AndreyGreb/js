// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается
//параметром.
const func1 = value1 => {
    return console.log(Math.pow(value1,2))
}

func1(3)

//2. Сделайте функцию, которая возвращает сумму двух чисел.
const func2 = (a = 0,b = 0) => {
    return console.log(a + b)
}

func2(3 + 2)

//3. Сделайте функцию, которая отнимает от первого числа второе и делит на
//третье.
const func3 = (a = 0, b = 0, c = 1) => {
    return console.log((a - b) / c)
}

func3(6,2,2)

//4. Сделайте функцию, которая принимает параметром число от 1 до 7, а
//возвращает день недели на русском языке.
const func4 = value4 => {
    let a
    switch(value4) {
        case 1:
            a = "Понедельник"
            break
        case 2:
            a = "Вторник"
            break
        case 3:
            a = "Среда"
            break
        case 4:
            a = "Четверг"
            break
        case 5:
            a = "Пятница"
            break
        case 6:
            a = "Суббота"
            break
        case 7:
            a = "Воскресенье"
            break
    }
    return console.log(a)
}

func4(6)

//5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа
//равны - пусть функция вернет true, а если не равны - false.
const func5 = (a,b) => {
    if(typeof(a) === "number" && typeof(b) ==="number" && a === b) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

func5(6,6)

//6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
//больше 10 - пусть вернет true, а если нет то - false.
const func6 = (a,b) => {
    if(typeof(a) === "number" && typeof(b) ==="number" && a + b > 10) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

func6(6,6)

//7. Сделайте функцию, которая параметром принимает число и проверяет -
//отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а
//если нет - false.
const func7 = (a) => {
    if(typeof(a) === "number" && a < 0) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

func7(-2)

//8. Сделайте функцию isNumberInRange , которая параметром принимает
//число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть
//функция возвращает true , если не так - false.
const isNumberInRange = (value) => {
    if(typeof(value) === "number" && value > 0 && value < 10) {
        return true
    } else {
        return false
    }
}

isNumberInRange(2)

//9. Дан массив с числами. Запишите в новый массив только те числа, которые
//больше нуля и меньше 10-ти. Для этого используйте вспомогательную
//функцию isNumberInRange из предыдущей задачи.
const isSortArray = array => {
    let newArray = []
    for(element of array) {
        if(isNumberInRange(element)) {
            newArray.push(element)
        }
    }
    return console.log(newArray)
}

isSortArray([3,5,7,8,56,9,7,5])

//10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром
//принимает целое число и возвращает сумму его цифр.
const getDigitSum = value => {
    let number
    let count = 0
    if(typeof(value) === 'number') {
        number = String(value).split('')
        for(element of number) {
            count += Number(element)
        }
        return count
    }
}

getDigitSum(456)

//11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого
//используйте вспомогательную функцию getDigitsSum из предыдущей
//задачи.

const getRangeYear = () => {
    let year
    let newArray = []
    for(i=1; i<=2020; i++) {
        year = getDigitSum(i)
        if(year === 13) {
            newArray.push(i)
        }
    }
    return console.log(newArray)
}

getRangeYear()

//12. Сделайте функцию i sEven() (even - это четный), которая параметром
//принимает целое число и проверяет: четное оно или нет. Если четное -
//пусть функция возвращает true , если нечетное - false.
const isEvent = value => {
    if(typeof(value) === 'number' && (value % 2 === 0)) {
        return true
    } else {
        return false
    }
}

isEvent(22)

//13. Дан массив с целыми числами. Создайте из него новый массив, где
//останутся лежать только четные из этих чисел. Для этого используйте
//вспомогательную функцию isEven из предыдущей задачи.
const getEventArray = array => {
    let newArray = []
    for(element of array) {
       if(isEvent(element)) {
           newArray.push(element)
       }
    }
    return console.log(newArray)
}

getEventArray([3,5,6,5,67,45,8,6,7654,765,875,4])

//14. Сделайте функцию getDivisors , которая параметром принимает число и
//возвращает массив его делителей (чисел, на которое делится данное
//число).
const getDivisors = value => {
    let newArray = []
    for(i=0; i<=value; i++) {
        if(value % i === 0) {
            newArray.push(i)
        }
    }
    return console.log(newArray)
}

getDivisors(16)

//15. Дан массив с числами. Выведите последовательно его элементы используя
//рекурсию и не используя цикл.
const func15 = (array, count = 0) => {
    document.write("<div>" + array[count] + "</div>")
    if(count < array.length - 1) {
        count++
        func15(array, count)
    } else {
        return console.log(true)
    }
}

func15([2,3,5,6,7,89,654])

//16. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять
//сложите его цифры. И так, пока сумма не станет однозначным числом (9 и
//менее).
const getNumber = value => {
    let count = 0
    count = getDigitSum(value)
    if(count > 9) {
        getNumber(count)
    } else {
        return console.log(count)
    }
}

getNumber(3234)