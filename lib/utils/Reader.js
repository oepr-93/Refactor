const fs = require("fs");

class Reader{
	
	static readJsonFile(path){
		//path = "../../package.json";
		try{
			const rawdata = fs.readFileSync(path);
			return JSON.parse(rawdata);
		}catch(e){
			return {path: path, result: "File not found"};
		}
	}
}

module.exports = Reader;
//const read = Reader.readJsonFile("./assets/files/explorers.json");
//console.log(read.result);