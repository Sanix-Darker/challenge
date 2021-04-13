import logger from '../utils/logger';
import fs from 'fs'

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
    let roman = "";
    let i = 3;

    // We loop over keys and
    // append our roman value
    while (i--)
        roman = (keys[+digits.pop() + (i * 10)] || "") + roman;

    return Array(+digits.join("") + 1).join("M") + roman;
}



/**
 *
 * @param {*} req
 * @param {*} res
 */
export const sendSSE = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    setInterval(function() {
        const num = fs.readFileSync('./public/tmp', {
            encoding:'utf8',
            flag:'r'
        });
        res.write(converter(num));
    }, 1000);
}
