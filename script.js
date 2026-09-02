const byteSize = (str) => {
	return new Blob([str]).size
	
  // write your code here
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
