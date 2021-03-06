"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
class TokenSetting {
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield store_1.default.collection(this.collection).doc(id).get();
            return result.data();
        });
    }
}
TokenSetting.collection = 'tokenSettings';
exports.default = TokenSetting;
//# sourceMappingURL=token_setting.js.map