# consoleFunctionsEnabler
A simple js function to enable or disable console functions

##Usage
You write `console.fn.setEnabled = setEnabled;` where `fn` is a console function (rly?) then you can call `console.fn.setEnabled(false)` and all calls for the console.fn will not produce any log.

##Why use this?
You don't lose the caller line, you can easily enable the original function, and in the future i will implement flags on setEnabler..
