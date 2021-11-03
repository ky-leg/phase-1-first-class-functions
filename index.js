function receivesAFunction(cb) {
    cb()
}


function returnsANamedFunction() { 
   return function jimbo() {}
}

function returnsAnAnonymousFunction () {
    return function (){}
}