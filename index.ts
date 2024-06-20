'use strict';
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const resetTerminalText = '\x1b[0m';
const redTerminalText = '\x1b[31m';
const greenTerminalText = '\x1b[32m';
const emptyArrayErrorMessage = `${redTerminalText}Please enter the array of string!`;

startApp();

function startApp() {
    console.log(`${resetTerminalText}-------------------------------------------------------------`);
    console.log("[NOTE] Type 'exit' to exit from this application.");
    console.log('[EXAMPLE] ["flower", "flow", "flight"]');
    rl.question('Please provide the array: ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log(`${resetTerminalText}Exiting ...`);
            rl.close();
        } else if (input.length <= 0) {
            console.error(emptyArrayErrorMessage);
            startApp();
        } else {
            const convertedInput = convertToArray(input);
            if (convertedInput.findIndex(data => typeof data !== 'string') !== -1) {
                console.error(emptyArrayErrorMessage);
            } else if (convertedInput.length > 0) {
                displayResult(findCommonPrefix(
                    convertedInput, findMaxPrefixLength(convertedInput)
                ));
            } else {
                console.error(emptyArrayErrorMessage);
            }

            startApp();
        }
    });
}

function convertToArray(input: string): string[] {
    let convertedInput = [];
    try {
        convertedInput = JSON.parse(input);
    } catch (error) {
        console.error(`${redTerminalText}[ERROR] ${input} is not a correct form of array.`);
    }

    return convertedInput;
}

function findMaxPrefixLength(input: string[]): number {
    return Math.min(...input.reduce((filtered: number[], data: string) => {
        if (data.length > 0 && typeof data === 'string') {
            filtered.push(data.length);
        }

        return filtered;
    }, []));
}

function findCommonPrefix(convertedInput: string[], prefixLength: number): string {
    if (prefixLength === Infinity) return '';

    const list = getPrefixListByLength(convertedInput, prefixLength);
    let response = Object.keys(list).find(prefix => list[prefix] === convertedInput.length);
    if (!response && prefixLength > 1) {
        response = findCommonPrefix(convertedInput, prefixLength - 1)
    }

    return response ? response : '';
}

function getPrefixListByLength(data: string[], prefixLength: number): { [key: string]: number } {
    let slicedString = '';
    let response: { [key: string]: number } = {};
    data.forEach(element => {
        if (element.length > 0) {
            slicedString = element.slice(0, prefixLength);
            if (response[slicedString]) {
                response[slicedString]++;
            } else {
                response[slicedString] = 1;
            }
        }
    });

    return response;
}

function displayResult(prefix: string) {
    console.log('####################### Execution Complete! #######################');
    console.log(`${greenTerminalText}"${prefix}"`);
    console.log(`${resetTerminalText}####################### Execution Complete! #######################`);
}
