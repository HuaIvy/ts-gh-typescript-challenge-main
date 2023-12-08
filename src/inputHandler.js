"use strict";
/**
 * 這個函式的目的是根據輸入的類型返回對應的描述。
 * 你需要使用 TypeScript 的聯合類型來定義輸入可以是字串或數字，並在函式中返回對應的描述。
 * 函式的返回值應該是一個字串，這個字串描述了輸入的類型和值。
 *
 * 範例:
 * 輸入: 'Hello'
 * 輸出: 'Input is a string: Hello'
 *
 * 輸入: 123
 * 輸出: 'Input is a number: 123'
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleInput = void 0;
function handleInput(input) {
    var str = '';
    if (typeof input === 'number') {
        str = "Input is a number: ".concat(input);
    }
    else if (typeof input === 'string') {
        str = "Input is a string: ".concat(input);
    }
    return str;
}
exports.handleInput = handleInput;
