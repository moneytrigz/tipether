"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
function id(d) { return d[0]; }
const parser_1 = require("./parser");
const moo = require("moo");
const lexer = moo.compile({
    space: / +/,
    address: /0x[0-9a-fA-F]{40}/,
    username: /@[0-9a-zA-Z_]{1,15}/,
    number: /(?:[1-9][0-9]*|0)(?:\.[0-9]+)?/,
    eth: /(?:ETH|eth)/,
    command: ['tip', 'withdraw', 'deposit', 'balance', 'help'],
    any: /.+/
});
;
;
;
exports.Lexer = lexer;
exports.ParserRules = [
    { "name": "Main", "symbols": ["AnyCommand", "_"], "postprocess": d => d[0] },
    { "name": "Main", "symbols": ["AnyCommand", "__", "Any"], "postprocess": d => d[0] },
    { "name": "AnyCommand", "symbols": ["TipCommand"], "postprocess": id },
    { "name": "AnyCommand", "symbols": ["WithdrawCommand"], "postprocess": id },
    { "name": "AnyCommand", "symbols": ["BalanceCommand"], "postprocess": id },
    { "name": "AnyCommand", "symbols": ["DepositCommand"], "postprocess": id },
    { "name": "AnyCommand", "symbols": ["HelpCommand"], "postprocess": id },
    { "name": "TipCommand", "symbols": ["__", { "literal": "tip" }, "__", "Username"], "postprocess": d => ({ type: parser_1.CommandType.TIP, username: d[3] }) },
    { "name": "TipCommand", "symbols": ["TipCommand", "_", "Amount"], "postprocess": d => Object.assign(d[0], d[2]) },
    { "name": "WithdrawCommand", "symbols": ["__", { "literal": "withdraw" }, "__", "Amount", "__", "Address"], "postprocess": d => Object.assign({ type: parser_1.CommandType.WITHDRAW, address: d[5] }, d[3]) },
    { "name": "DepositCommand", "symbols": ["__", { "literal": "deposit" }], "postprocess": d => ({ type: parser_1.CommandType.DEPOSIT }) },
    { "name": "BalanceCommand", "symbols": ["__", { "literal": "balance" }], "postprocess": d => ({ type: parser_1.CommandType.BALANCE }) },
    { "name": "HelpCommand", "symbols": ["__", { "literal": "help" }], "postprocess": d => ({ type: parser_1.CommandType.HELP }) },
    { "name": "Amount", "symbols": ["Number", "_", "Symbol"], "postprocess": d => ({ amount: d[0], symbol: d[2] }) },
    { "name": "Symbol", "symbols": [(lexer.has("eth") ? { type: "eth" } : eth)], "postprocess": d => 'ETH' },
    { "name": "Address", "symbols": [(lexer.has("address") ? { type: "address" } : address)], "postprocess": d => d[0].value },
    { "name": "Username", "symbols": [(lexer.has("username") ? { type: "username" } : username)], "postprocess": d => d[0].value.slice(1) },
    { "name": "Number", "symbols": [(lexer.has("number") ? { type: "number" } : number)], "postprocess": d => parseFloat(d[0].value) },
    { "name": "Any", "symbols": [(lexer.has("any") ? { type: "any" } : any)], "postprocess": d => d[0].value },
    { "name": "_$ebnf$1", "symbols": [(lexer.has("space") ? { type: "space" } : space)], "postprocess": id },
    { "name": "_$ebnf$1", "symbols": [], "postprocess": () => null },
    { "name": "_", "symbols": ["_$ebnf$1"], "postprocess": d => null },
    { "name": "__", "symbols": [(lexer.has("space") ? { type: "space" } : space)], "postprocess": d => null }
];
exports.ParserStart = "Main";
//# sourceMappingURL=command.js.map