function throwError(msg: string): never {
    throw new Error(msg);
}

//function that has an infinite loop
function infiniteLoop(): never {
    while (true) {}
}

//A variable that can never have a value
let x: never;

function neverReturns() :never {
    while(true) {}
}

x = neverReturns()