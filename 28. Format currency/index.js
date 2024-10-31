// toLocaleString() = returns a string with a language
//                   sesitive representation of this number

// number.toLocaleString(locale, {options});

// "locale" = specify that language (undefined = default set in browser)
// "options" = object with formatting options

let myNum = 10;

// myNum = myNum.toLocaleString("en-Us"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi
// myNum = myNum.toLocaleString("de-DE"); // Standart German

// myNum = myNum.toLocaleString("en-Us", { style: "currency", currency: "USD" }); //
// myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" }); //
// myNum = myNum.toLocaleString("lt-LT", { style: "currency", currency: "EUR" });// converts to currency

// myNum = myNum.toLocaleString(undefined, { style: "percent" }); // converts to %

myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" }); // converts to celsius.

console.log(myNum);
