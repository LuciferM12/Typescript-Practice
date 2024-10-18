//Regular Function
function double1(x: number): number {
    return x * x;
}

const resDouble1 = double1(2);
console.log(resDouble1)

//using ArrowFunction
const double2 = (x: number): number => x * x;
const resDouble2 = double2(2);
console.log(resDouble2);