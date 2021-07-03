let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) (
    greeting = 'Good evening!'
)
else if (hourNow > 12) (
    greeting = 'Good afternoon!'
)
else if (hourNow > 0) (
    greeting = 'Good morning!'
)
else (
    greeting = 'Welcome!'
)

document.write('<h1>' + greeting + '<h1>')

let isGreater = 4 > 1;
console.log(isGreater);

const max = 57;
    const actual = max - 13;
    const percentage  = actual / 3;

    console.log(percentage);


