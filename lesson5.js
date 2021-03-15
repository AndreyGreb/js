//1. Преобразовать строку в массив слов
//Напишите функцию stringToarray(str) , которая преобразует строку в
//массив слов.
const str1 = "Каждый охотник желает знать где сидит фазан"
const stringToArray = str1 => {
    let newArray = []
    newArray = str1.split(" ")
    return console.log(newArray)
}
stringToArray(str1)

//2. Удаление указанного количества символов из строки
//Напишите функцию delete_characters(str, length) , которая возвращает
//подстроку, состоящую из указанного количества символов.
const str2 = "Каждый охотник желает знать где сидит фазан"
const delete_characters = (str2, length = str2.length) => {
    return console.log(str2.slice(0, length))
}
delete_characters(str2, 4)

//3. Вставить тире между словами строки
//Напишите функцию insert_dash(str) , которая принимает строку str в
//качестве аргумента и вставляет тире (-) между словами. При этом все
//символы строки необходимо перевести в верхний регистр.
const str3 = "HTML JavaScript PHP"
const insert_dash = str3 => {
    return console.log(str3.replace(/(\w+)/g, (a) => {
        return a.toUpperCase()
    }).replace(/[" "]/g, "-"))
}
insert_dash(str3)

//4. Сделать первую букву строки прописной
//Напишите функцию, которая принимает строку в качестве аргумента и
//преобразует регистр первого символа строки из нижнего регистра в верхний.
const str4 = "string not starting with capital"
const cursive_letter = str4 => {
    return console.log(str4.charAt(0).toUpperCase()+str4.slice(1))
}
cursive_letter(str4)

//5. Первая буква каждого слова заглавная
//Напишите функцию capitalize(str) , которая возвращает строку, в которой
//каждое слово начинается с заглавной буквы.
const str5 = "Каждый охотник желает знать где сидит фазан"
const capitalize = str => {
    return console.log(str.replace(/[А-Яа-я0-9_]+/g, (a) => {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }))  
}
capitalize(str5)

//6. Смена регистра символов строки
//Напишите функцию change_register(str) , которая принимает в качестве
//аргумента строку и и заменяет регистр каждого символа на противоположный.
//Например, если вводится «КаЖдЫй ОхОтНиК» , то на выходе должно быть «кАжДыЙ
//оХоТнИк».
const str6 = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь"
const change_register = str => {
    let array = str.split(" ")
    let newArray = ""
    for(element of array) {
        let word = ''
        for(i=0; i<element.length; i++) {
            let lowerCase = element[i].toLowerCase()
            if(element[i] < lowerCase) {
                word += lowerCase
            } else {
                word += element[i].toUpperCase()
            }
            if(i===element.length - 1) {
                newArray = newArray + " " + word
            }
        }
    }
    return console.log(newArray)
}
change_register(str6)

//7. Удалить все не буквенно-цифровые символы
//Напишите функцию remove_char(str) , которая возвращает строку,
//очищенную от всех не буквенно-цифровых символов.
const str7 = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know"
function remove_char(str) {
    let res = "";
    res = str.replace(/[^\w\s]|_/g, "")
           .replace(/\s+/g, " ");
    return console.log(res);      
}

remove_char(str7)

//8. Нулевое заполнение строки
//Напишите функцию zeros(num, len) , которая дополняет нулями до указаной
//длины числовое значение с дополнительным знаком «+» или « -« в
//зависимости от передаваемого аргумента.
const zeros = (num, len, sign) => {
    let num2 = String(num)
    let array = num2.split("")
    if(sign === "+") {
        for(i=0; i<len; i++) {
            array.push(0)
        }
    } else if (sign === "-") {
        for(i=0; i<len; i++) {
            array.unshift(0)
        }
    }
    let newArray = ''
    for(element of array) {
        newArray += element
    }
    return console.log(newArray)
}
zeros(456, 3, "-")

//9. Сравнение строк без учёта регистра
//Напишите функцию comparison(str1, str2) , которая сравнивает строки
//без учёта регистра символов.
const comparsion = (str1, str2) => {
    if(str1.toLowerCase() === str2.toLowerCase()) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

comparsion("asdfG", "asdsfg")

//10. Поиск без учета регистра
//Напишите функцию insensitive_search(str1, str2) , которая
//осуществляет поиск подстроки str2 в строке str1 без учёта регистра
//символов.
const insensitive_search = (str1, str2) => {
    let str4 = str1.toLowerCase()
    let str5 = str2.toLowerCase()
    return console.log(str4.includes(str5))
}
insensitive_search("ASDF", "Asdf")

//11. ВерблюжийРегистр (CamelCase)
//Напишите функцию initCap(str) , которая преобразует стиль написания
//составных слов строки в CamelCase , при котором несколько слов пишутся
//слитно без пробелов, при этом каждое слово внутри строки пишется с
//заглавной буквы.
const str11 = "hEllo woRld my name is ANDRY"
const initCap = str => {
    let array = str.split(" ")
    let newString = ''
    let flag = true
    for(element of array) {
        if(flag) {
            newString = newString + element.toLowerCase()
            flag = false
        } else {
            for(i = 0; i < element.length; i++) {
                if(i === 0) {
                    newString = newString + element[i].toUpperCase()
                } else {
                    newString = newString + element[i].toLowerCase()
                }
            }
        }
        
    }
    return console.log(newString)
}

initCap(str11)

//12. Змеиный_регистр (snake_case)
//Напишите функцию initSnake(str) , которая преобразует стиль написания
//составных слов строки из CamelCase в snake_case , при котором несколько
//слов разделяются символом подчеркивания (_) , причём каждое слово
//пишется с маленькой буквы.
const str12 = "helloWorldMyNameIsAndry"
const initSnake = str => {
    let array = str.split("")
    let string = ""
    for(element of array) {
        if(element.toLowerCase() > element) {
            string = string + "_" + element.toLowerCase()
        } else {
            string += element
        }
    }
    return console.log(string)
}
initSnake(str12)

//13. Повторить строку n раз
//Напишите функцию repeatStr(str, n) , которая вовращает строку повторяемую
//определённое количество раз.
const repeatStr = (str, n = 1) => {
    let string = ""
    for(i=0; i<n; i++) {
        string += str
    }
    return console.log(string)
}

repeatStr("asdf", 4)

//14. Получить имя файла
//Напишите функцию path(pathname) , которая вовращает имя файла
//(подстрока после последнего символа "\" ) из полного пути к файлу.
const pathName = "/home/user/dir/file.txt"
const path = pathName => {
    flag = true
    let position
    let string = pathName
    while(flag) {
        position = string.indexOf("/")
        
        if(position > -1) {
            string = string.slice(position + 1)
        } else {
            return console.log(string)
        }
        
    }
}
path(pathName)

//15. Заканчивается ли строка символами другой строки
//Создайте метод объекта String endsWith() , который сравнивает подстроку
//str1 с окончанием исходной строки str и определяет заканчивается ли строка
//символами подстроки.
const str15 = "Каждый охотник желает знать"
String.prototype.endsWith = function(substring) {
    if(substring.length > this.length) return false
    if(this.substr(this.length - substring.length) === substring) {
        return true
    } else {
        return false
    }
    
}

console.log(str15.endsWith("ать"))

//16. Подстрока до/после указанного символа
//Напишите функцию getSubstr(str, char, pos) , которая возвращает часть
//строки, расположенную после или до указанного символа char в зависимости
//от параметра pos .
const str16 = 'Астрономия — Наука о небесных телах'
const getSubstr = (str, char, pos) => {
    let position = str.indexOf(char)
    
    if (pos === "+") {
        return console.log(str.slice(position + 1))    
    } else if (pos === "-") {
        return console.log(str.slice(0, position))   
    }
}
getSubstr(str16, "н", "+")

//17. Вставить подстроку в указанную позицию строки
//Напишите функцию insert(str, substr, pos) , которая вставляет
//подстроку substr в указханную позицию pos строки str . По умолчанию
//подстрока вставляется в начало строки.
const insert = (str, substr, pos = 0) => {
    let stringAfter = str.slice(pos)
    let stringBefore = str.slice(0, pos)
    return console.log(stringBefore + substr + stringAfter)
}

insert("Asddg", "Andry", 3)

//18. Ограничить длину строки
//Напишите функцию limitStr(str, n, symb) , которая обрезает строку, если
//она длиннее указанного количества символов n . Усеченная строка должна
//заканчиваться троеточием «...» (если не задан параметр symb ) или
//заданным символом symb .
const limitStr = (str, n, symb = "...") => {
    if(str.length <= n) {
        return console.log(str)
    } else {
        return console.log(str.slice(0, n) + symb)
    }
    
}

limitStr("Asddfg", 3, "///")

//19. Поделить строку на фрагменты
const cutString = (str,n) => {
    let array = str.split("")
    let string =""
    let length = Math.ceil(str.length / n)
    let count = 0
    for(element of array) {
        if(count < length) {
            string = string + element
            count++
        } else {
            string = string + "/" + element
            count = 1
        }

    }
    return console.log(string)
}
cutString("asksdflsdksdfsdlknn", 3)

//20. Количество вхождений символа в строке
//Напишите функцию count(str, stringsearch) , которая возвращает
//количество символов stringsearch в строке str .
const str20 = "Астрономия это наука о небесных объектах"
const symb = "о"
const count = (str, symb) => {
    let flag = true
    let position = 0
    let string = str
    let count = 0
    while(flag) {
        position = string.indexOf(symb)
        if(position > -1) {
            string = string.slice(position + 1)
            count ++
        } else {
            return console.log(count)
        } 
        
    }
}
count(str20, symb)

//21. Удалить HTML-теги из строки
//Напишите функцию cutTegs(str) , которая возвращает строку str , очищенную от
//всех HTML-тегов.
const cutTegs = str => {
    return console.log(str.replace(/[<,>]/g, ""))
}
cutTegs("<ddfdf>asdaf<dadf>affad")

//22. Удалить лишние пробелы из строки
//Напишите функцию strip(str) , которая удаляет все лишние пробелы из
//строки str.
const strip = str => {
    return console.log(str.replace(/[" "]/g, ""))
}
strip(" Max is a good boy ")

//23. Удалить лишние слова из строки
//Напишите функцию cutString(str, n) , которая удаляет лишние слова из строки
//str , оставив в ней n слов.
const cutStringg = (str, n=0) => {
    let array = str.split(" ")
    let count = 0
    let string =""
    if(n >= array.length) {
        return console.log(str)
    }
    for(element of array) {
        if(count !== n) {
            string = string + " " + element
            count++
        } else {
            return console.log(string)
        }
    }
}

cutStringg("Andrey Haha Hey", 2)

//24. Сортировка символов строки по алфавиту
//Напишите функцию alphabetize(str) , которая возвращает строку, отсортировав её
//символы в алфавитном порядке.
const alphabetize = str => {
    let array = str.split("")
    array = array.sort()
    let string =""
    for(element of array) {
        string += element
    }
    return console.log(string)
}
alphabetize("sdjfdjfsjdfjsf")

//25. Найти слово в строке
//Напишите функцию findWord(word, str) , которая проверяет, существует ли в
//строке str слова word .
const str25 = 'abc def ghi jkl mno pqr stu'
const findWord = (str, word) => {
    return console.log(str.includes(word))
}
findWord(str25, "abc")
