const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('3J2TeXI6G0', uuidlib.v4());
	}

module.exports = generateId
