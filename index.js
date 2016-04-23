var sweet = require('sweet.js');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
	var config = loaderUtils.getLoaderConfig(this, "sweet");
	
	config.filename = loaderUtils.interpolateName(this, "[name].[ext]", {})
	
	console.log("hey")
	this.cacheable()
	
	try {
		var compiled = sweet.compile(source, config);
		this.callback(null, compiled.code, compiled.sourceMap) // beware that sourceMaps are not yet supported
	} catch (e) {
		this.callback(e)
	}
};
