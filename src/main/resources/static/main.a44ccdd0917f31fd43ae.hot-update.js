webpackHotUpdate("main",{

/***/ "./node_modules/@githubprimer/octicons-react/dist/index.esm.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-day-picker/lib/style.css":
false,

/***/ "./node_modules/react-day-picker/DayPicker.js":
false,

/***/ "./node_modules/react-day-picker/DayPickerInput.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/Caption.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/DateUtils.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/Day.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/DayPicker.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/DayPickerInput.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/Helpers.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/LocaleUtils.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/ModifiersUtils.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/Month.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/Navbar.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/PropTypes.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/Weekday.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/Weekdays.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/classNames.js":
false,

/***/ "./node_modules/react-day-picker/lib/src/keys.js":
false,

/***/ "./node_modules/react-day-picker/lib/style.css":
false,

/***/ "./src/components/notes.jsx":
/*!**********************************!*\
  !*** ./src/components/notes.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\src\\\\components\\\\notes.jsx: Unexpected token, expected \\\",\\\" (232:129)\\n\\n\\u001b[0m \\u001b[90m 230 | \\u001b[39m                                    \\u001b[33m<\\u001b[39m\\u001b[33mtbody\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 231 | \\u001b[39m                                        {\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39mnotes\\u001b[33m.\\u001b[39mmap((note\\u001b[33m,\\u001b[39m i) \\u001b[33m=>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 232 | \\u001b[39m                                            \\u001b[33m<\\u001b[39m\\u001b[33mtr\\u001b[39m key\\u001b[33m=\\u001b[39m{\\u001b[32m'secret-'\\u001b[39m \\u001b[33m+\\u001b[39m note\\u001b[33m.\\u001b[39mtitle} style\\u001b[33m=\\u001b[39m{ \\u001b[36mnew\\u001b[39m \\u001b[33mDate\\u001b[39m(note\\u001b[33m.\\u001b[39mdate)\\u001b[33m<\\u001b[39m\\u001b[33mDate\\u001b[39m\\u001b[33m.\\u001b[39mnow() \\u001b[33m?\\u001b[39m {background\\u001b[33m-\\u001b[39mcolor\\u001b[33m:\\u001b[39m \\u001b[32m'red;'\\u001b[39m} \\u001b[33m:\\u001b[39m {}}\\u001b[33m>\\u001b[39m \\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m                                                                                                                                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 233 | \\u001b[39m                                                \\u001b[33m<\\u001b[39m\\u001b[33mtd\\u001b[39m style\\u001b[33m=\\u001b[39m{{ width\\u001b[33m:\\u001b[39m \\u001b[32m'30%'\\u001b[39m }}\\u001b[33m>\\u001b[39m{note\\u001b[33m.\\u001b[39mtitle}\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mtd\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 234 | \\u001b[39m                                                \\u001b[33m<\\u001b[39m\\u001b[33mtd\\u001b[39m style\\u001b[33m=\\u001b[39m{{ width\\u001b[33m:\\u001b[39m \\u001b[32m'60%'\\u001b[39m }}\\u001b[33m>\\u001b[39m{note\\u001b[33m.\\u001b[39mdescription}\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mtd\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 235 | \\u001b[39m                                                \\u001b[33m<\\u001b[39m\\u001b[33mtd\\u001b[39m style\\u001b[33m=\\u001b[39m{{ width\\u001b[33m:\\u001b[39m \\u001b[32m'20%'\\u001b[39m }}\\u001b[33m>\\u001b[39m{note\\u001b[33m.\\u001b[39mdate}\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mtd\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Object.raise (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6344:17)\\n    at Object.unexpected (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7659:16)\\n    at Object.expect (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7645:28)\\n    at Object.parseObj (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9134:14)\\n    at Object.parseExprAtom (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8774:21)\\n    at Object.parseExprAtom (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3599:20)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8413:23)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8393:21)\\n    at Object.parseExprOps (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8280:23)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8253:23)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8200:21)\\n    at Object.parseConditional (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8267:30)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8260:17)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8200:21)\\n    at Object.parseExpression (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8148:23)\\n    at Object.jsxParseExpressionContainer (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3450:30)\\n    at Object.jsxParseAttributeValue (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3417:21)\\n    at Object.jsxParseAttribute (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3468:44)\\n    at Object.jsxParseOpeningElementAfterName (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3488:28)\\n    at Object.jsxParseOpeningElementAt (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3481:17)\\n    at Object.jsxParseElementAt (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3513:33)\\n    at Object.jsxParseElement (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3587:17)\\n    at Object.parseExprAtom (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3594:19)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8413:23)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8393:21)\\n    at Object.parseExprOps (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8280:23)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8253:23)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8200:21)\\n    at Object.parseFunctionBody (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9390:24)\\n    at Object.parseArrowExpression (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9349:10)\\n    at Object.parseParenAndDistinguishExpression (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8986:12)\\n    at Object.parseExprAtom (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8760:21)\\n    at Object.parseExprAtom (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3599:20)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8413:23)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8393:21)\\n    at Object.parseExprOps (C:\\\\Users\\\\Sergio\\\\Documents\\\\workspaces\\\\workspace-utad\\\\my-app-segura\\\\front\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8280:23)\");\n\n//# sourceURL=webpack:///./src/components/notes.jsx?");

/***/ })

})