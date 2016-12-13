/*-----------------------*\
     Console Controls
\*-----------------------*/

    //Make a copy of the old console.
    var oldConsole = Object.assign({}, console); //should change this to a old JS clone function.

    //This function redefine the caller with the original one. (well, at least i expect this to work in chrome, not tested in others)
    function setEnabled(bool) {
        if (bool) {
            //Rewrites the disable function with the original one.
            console[this.name] = oldConsole[this.name];
            //Make sure the setEnable will be callable from original one.
            console[this.name].setEnabled = setEnabled;
        } else {
            //Rewrites the original.
            var fn = function () {/*function disabled, to enable call console.fn.setEnabled(true)*/};
            //Defines the name, to remember.
            Object.defineProperty(fn, "name", {value: this.name});
            //replace the original with the empty one.
            console[this.name] = fn;
            //set the enable function
            console[this.name].setEnabled = setEnabled

        }
    }
