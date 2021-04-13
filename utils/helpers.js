
/**
 * converter
 * This method take an input number and return it' value in
 * roman representation
 * 
 * @param {*} num
 * @returns
 */
const converter = (num) => {
    // We return it if it's not a number
    if (isNaN(num))
        return NaN;

    const digits = String(+num).split("");
    const keys = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"];
    const roman = "";
    const i = 3;

    // We loop over keys and
    // append our roman value
    while (i--)
        roman = (keys[+digits.pop() + (i * 10)] || "") + roman;

    return Array(+digits.join("") + 1).join("M") + roman;
}
