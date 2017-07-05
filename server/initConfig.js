/*
*
*/
var Path = require('path');
var rf=require("fs");
var async = require('async');


function readHostConf(name){
  	var homePath = process.env.HOME
  	var FILE_PATH = Path.resolve(homePath, name)

	rf.readFile(FILE_PATH, 'utf-8', function(err,data){  
	    if(err){  
	        console.log("this file do not exist");  
	    }else{  
	        console.log(data);  
	    }  
	}); 
}

module.exports = {
	readHostConf : readHostConf
}