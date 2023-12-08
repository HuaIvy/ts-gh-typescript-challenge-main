"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySum = void 0;
/**
 * 計算數字陣列的總和
 * @param numbers - 要計算總和的數字陣列
 *
 * 範例:
 * 輸入: [1, 2, 3, 4, 5]
 * 輸出: 15
 *
 * 輸入: [-1, -2, -3]
 * 輸出: -6
 *
 * 輸入: []
 * 輸出: 0
 */
function arraySum(numbers) {
    var sum = 0;
    numbers === null || numbers === void 0 ? void 0 : numbers.map(function (item) {
        sum += item;
    });
    return sum;
}
exports.arraySum = arraySum;
