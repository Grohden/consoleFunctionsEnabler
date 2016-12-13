# consoleFunctionsEnabler
A simple js function to enable or disable console functions

##Usage
You write `console.fn.setEnabled = setEnabled;` where `fn` is a console function (rly?) then you can call `console.fn.setEnabled(false)` and all calls for the console.fn will not produce any log.

Also, i wrote another file, the *optionalAutoCfgs.js*, it sets the setEnabled function on all console functions that has the same name as the flag key, it also call the enabler function for that respective flag key.

##Why use this?
You don't lose the caller line, you can easily enable the original function, and in the future i will implement flags on setEnabler..
