/**
 * Add babel-support for the server code
 */
require("@babel/polyfill");
require("@babel/register");
/**
 * Run the actual server code
 */
require("./server");
