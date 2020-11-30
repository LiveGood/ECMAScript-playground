require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});
class RemainderPrinter {
    constructor({ str1, str2, startCount, endCount, remainderArgs }) {
        /* PRIVATE INSTANCE FIELDS*/
        // result reducer
        this.#getStringResult = function (action) {
            switch (action) {
                case RemainderPrinter.#PRINT_FIRST:
                    return this.str1;
                case RemainderPrinter.#PRINT_SECOND:
                    return this.str2;
                case RemainderPrinter.#PRINT_BOTH:
                    return this.bothResults;
                default:
                    return null;
            }
        };
        this.#getCountString = function (num) {
            const [remainder1, remainder2] = this.remainderArgs;
            if (RemainderPrinter.#checkRemainder(num, remainder1) && RemainderPrinter.#checkRemainder(num, remainder2))
                return this.#getStringResult(RemainderPrinter.#PRINT_BOTH);
            else if (RemainderPrinter.#checkRemainder(num, remainder1))
                return this.#getStringResult(RemainderPrinter.#PRINT_FIRST);
            else if (RemainderPrinter.#checkRemainder(num, remainder2))
                return this.#getStringResult(RemainderPrinter.#PRINT_SECOND);
            else
                return num;
        };
        this.str1 = str1;
        this.str2 = str2;
        this.startCount = startCount;
        this.endCount = endCount;
        this.remainderArgs = remainderArgs;
        this.#setBothResults = { str1, str2 };
    }
    /* PRIVATE STATIC FIELDS*/
    static #PRINT_FIRST;
    static #PRINT_SECOND;
    static #PRINT_BOTH;
    static #checkRemainder;
    /* PRIVATE INSTANCE FIELDS with public getter and private setter*/
    #bothResults;
    get bothResults() { return this.#bothResults; }
    set #setBothResults({ str1, str2 }) {
        this.#bothResults = str1 + str2;
    }
    /* Pirvat instance files with Public acces*/
    #str1;
    get str1() { return this.#str1; }
    set str1(newStr) {
        this.#setBothResults = { str1: newStr, str2: this.str2 };
        this.#str1 = newStr;
    }
    #str2;
    get str2() { return this.#str2; }
    set str2(newStr) {
        this.#setBothResults = { str1: this.str1, str2: newStr };
        this.#str2 = newStr;
    }
    /* PRIVATE INSTANCE FIELDS*/
    // result reducer
    #getStringResult;
    #getCountString;
    execute() {
        for (let i = this.startCount; i <= this.endCount; i++) {
            console.log(this.#getCountString(i));
        }
    }
}
/* PRIVATE STATIC FIELDS*/
RemainderPrinter.#PRINT_FIRST = "PRINT_FIRST";
RemainderPrinter.#PRINT_SECOND = "PRINT_SECOND";
RemainderPrinter.#PRINT_BOTH = "PRINT_BOTH";
RemainderPrinter.#checkRemainder = function (num, rem) {
    return num % rem == 0;
};
// str1, str2, startCount, endCount, remainderArgs
let printer = new RemainderPrinter({
    str1: 'Fizz',
    str2: 'Buzz',
    startCount: 1,
    endCount: 5,
    remainderArgs: [3, 5]
});
// printer.bothResults = { str1: 'dumb', str2: ' access'}
printer.str1 = 'Muzzle';
console.log(printer.bothResults);
printer.execute();
try {
    // Throws error on JS run time;
    printer.bothResults = 'new';
}
catch (err) {
    console.error(`${err.name}: ${err.message}`);
}
//  Throws an error on Babel compile time
// printer.#setBothResults = 'new'
