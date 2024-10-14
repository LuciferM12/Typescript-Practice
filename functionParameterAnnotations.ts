//Regular Func
function addOne(num: number) {
    return num + 1;
}

const result = addOne(3);

//Arrow Func Annotations
const double = (x: number, y: number) => x * y;
const res = double(2,10); //if we give more or less arguments then we will recive a warning
console.log(res);