const houses = [];

let i = 0;
while (i < 10) {
    let house = function () { // функция «дом»
        console.log(i); // выводит номер дома
    };
    houses.push(house);
    i++;
}
houses[0](); // 10 — у нулевого дома номер 10
houses[7](); // 10 — и у седьмого дома номер 10

let house = function () { // функция «дом»
    // лексическое окружение: { i: 10 }
    console.log(i); // выводит номер дома
};

const houses2 = [];
let i2 = 0;
while (i2 < 10) {
    let houseNumber2 = i2; // Здесь мы создаём блочную переменную,
                            // которая сохранит значение i для конкретной итерации цикла, и
                            // именно её значение попадёт в лексическое окружение функции house.
    let house2 = function () { // функция «дом»
        console.log(houseNumber2); // выводит номер дома
    };
    houses2.push(house2);
    i++;
}
houses2[0](); // 0 — у нулевого дома номер 0
houses2[7](); // 7 — и у седьмого дома номер 7
    
// Или внутри функции house:

const houses3 = [];
let i3 = 0;
while (i3 < 10) {
    let house3 = function () { // функция «дом»
    let houseNumber3 = i3; // Здесь мы создаём блочную
                        // переменную, которая сохранит значение i, и именно её значение
                        // попадёт в лексическое окружение функции house.
        console.log(houseNumber3); // выводит номер дома
    };
    houses3.push(house3);
    i3++;
}
houses3[0](); // 0 — у нулевого дома номер 0
houses3[7](); // 7 — и у седьмого дома номер 7