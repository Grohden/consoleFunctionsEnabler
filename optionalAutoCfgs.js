
    var FLAGS = {};
    FLAGS.DEBUG = true;
    FLAGS.INFO = true;
    FLAGS.LOG = true;
    FLAGS.ALL = true;

    function makeThemSwitchable(opt) {
        var keysArr = Object.keys(opt);
        //its better use this type of for.
        for (var x = 0; x < keysArr.length; x++) {
            var key = keysArr[x];
            var lowerKey = key.toLowerCase();
            //Only if the key exists
            if (console[lowerKey]) {
                //define the function
                console[lowerKey].setEnabled = setEnabled;
                //Make it enabled/disabled by key.
                console[lowerKey].setEnabled(opt[key] || opt.ALL);
            }
        }
    }
    //Put the set enabled function on the original console using the defined flags and set them.
    makeThemSwitchable(FLAGS);
