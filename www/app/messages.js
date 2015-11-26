define(function () {
    return {
        getHello: function () {
		return require("text!./hello-world.txt");
        }
    };
});
