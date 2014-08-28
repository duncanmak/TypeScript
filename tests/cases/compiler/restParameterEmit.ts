function shouldEmit(x, y, z, ...rest) {
    return rest;
}

function shouldEmit2(x, y, z, ...rest) {
    var a = rest.concat([x, y, z]);
}

function shouldEmit3(a: string, b: number, ...rest: any[]) {
    g();
    return;

    function g(): any {
        return rest[0];
    }
}

function shouldEmit4(a: number, ...rest: number[]) {
    function g(x: number = rest[0]): number {
        return a || x;
    }

    return g();
}

function shouldNotEmit(x, y, z, ...rest) {
    return;
}

var shouldNotEmit2 = (a, b, ...c) => a.concat([1,2,3]);

function shouldNotEmit3(a: string, b: number, ...rest: any[]) {
    g();
    return;

    function g(): any {
        return a;
    }
}

function shouldNotEmit4(a: number, b: number[], ...rest: number[]) {
    function g(x: number = b[0]): number {
        return a || x;
    }

    return g();
}
