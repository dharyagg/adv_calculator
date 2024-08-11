// select elements
const inputElement = document.querySelector(".input");
const outputResultElement = document.querySelector(".result .value");
const outputOperationElement = document.querySelector(".operation .value");

// variables and constants
const OPERATIONS = ["+", "-", "*", "/"];
const POWER = "POWER(";
const FACTORIAL = "FACTORIAL(";

let data = {
	operation: [],
	formula: [],
};

let ans = 0;
// calculator buttons
let calculator_buttons = [
	{
		name: "rad",
		symbol: "Rad",
		formula: false,
		type: "key",
	},
	{
		name: "deg",
		symbol: "Deg",
		formula: false,
		type: "key",
	},
	{
		name: "square-root",
		symbol: "√",
		formula: "Math.sqrt",
		type: "math_function",
	},
	{
		name: "square",
		symbol: "x²",
		formula: POWER,
		type: "math_function",
	},
	{
		name: "open-parenthesis",
		symbol: "(",
		formula: "(",
		type: "number",
	},
	{
		name: "close-parenthesis",
		symbol: ")",
		formula: ")",
		type: "number",
	},
	{
		name: "clear",
		symbol: "C",
		formula: false,
		type: "key",
	},
	{
		name: "delete",
		symbol: "⌫",
		formula: false,
		type: "key",
	},
	{
		name: "pi",
		symbol: "π",
		formula: "Math.PI",
		type: "number",
	},
	{
		name: "cos",
		symbol: "cos",
		formula: "trigo(Math.cos,",
		type: "trigo_function",
	},
	{
		name: "sin",
		symbol: "sin",
		formula: "trigo(Math.sin,",
		type: "trigo_function",
	},
	{
		name: "tan",
		symbol: "tan",
		formula: "trigo(Math.tan,",
		type: "trigo_function",
	},
	{
		name: "7",
		symbol: 7,
		formula: 7,
		type: "number",
	},
	{
		name: "8",
		symbol: 8,
		formula: 8,
		type: "number",
	},
	{
		name: "9",
		symbol: 9,
		formula: 9,
		type: "number",
	},
	{
		name: "division",
		symbol: "÷",
		formula: "/",
		type: "operator",
	},
	{
		name: "e",
		symbol: "e",
		formula: "Math.E",
		type: "number",
	},
	{
		name: "acos",
		symbol: "acos",
		formula: "inv_trigo(Math.acos,",
		type: "trigo_function",
	},
	{
		name: "asin",
		symbol: "asin",
		formula: "inv_trigo(Math.asin,",
		type: "trigo_function",
	},
	{
		name: "atan",
		symbol: "atan",
		formula: "inv_trigo(Math.atan,",
		type: "trigo_function",
	},
	{
		name: "4",
		symbol: 4,
		formula: 4,
		type: "number",
	},
	{
		name: "5",
		symbol: 5,
		formula: 5,
		type: "number",
	},
