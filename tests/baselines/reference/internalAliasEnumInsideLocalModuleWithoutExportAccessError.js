//// [internalAliasEnumInsideLocalModuleWithoutExportAccessError.ts]
export module a {
    export enum weekend {
        Friday,
        Saturday,
        Sunday
    }
}

export module c {
    import b = a.weekend;
    export var bVal: b = b.Sunday;
}

var happyFriday = c.b.Friday;

//// [internalAliasEnumInsideLocalModuleWithoutExportAccessError.js]
(function (a) {
    (function (weekend) {
        weekend[weekend["Friday"] = 0] = "Friday";
        weekend[weekend["Saturday"] = 1] = "Saturday";
        weekend[weekend["Sunday"] = 2] = "Sunday";
    })(a.weekend || (a.weekend = {}));
    var weekend = a.weekend;
})(exports.a || (exports.a = {}));
var a = exports.a;
(function (c) {
    var b = a.weekend;
    c.bVal = 2 /* Sunday */;
})(exports.c || (exports.c = {}));
var c = exports.c;
var happyFriday = c.b.Friday;
