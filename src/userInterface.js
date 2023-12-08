"use strict";
/**
 * 用戶介面已被移除，你需要自己定義一個新的用戶介面。
 * 用戶介面應該包含 firstName 和 lastName 兩個屬性，都是字串型別。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullName = void 0;
// let myUser:User ={ 
//     firstName: 'John', 
//     lastName: 'Doe' 
// }
/**
 * 獲取用戶的全名
 * @param user - 用戶物件，應該包含 firstName 和 lastName 兩個屬性
 *
 * 範例:
 * 輸入: { firstName: 'John', lastName: 'Doe' }
 * 輸出: 'John Doe'
 */
function getFullName(user) {
    return user.firstName + " " + user.lastName;
}
exports.getFullName = getFullName;
