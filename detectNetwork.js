// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  
  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var length = cardNumber.length;
  var firstCharVal = cardNumber.charAt(0);
  var secondCharVal = cardNumber.charAt(1);
  var fourSubstring = cardNumber.substring(0,4);
  var threeSubstring = cardNumber.substring(0,3);
  var twoSubstring = cardNumber.substring(0,2);

  
  if(firstCharVal === '3'){
  	if(length === 14 && (secondCharVal === '8' || secondCharVal === '9')){
  		return "Diner's Club";
  	}else if(length === 15 && (secondCharVal === '4' || secondCharVal === '7')){
  		return "American Express";
  	}
  }else if(firstCharVal === '4'){
  	if(length === 13 || length === 16 || length === 19){
  		return "Visa";
  	}
  }else if(fourSubstring === '5018' || fourSubstring === '5020' ||
  	       fourSubstring === '5038' || fourSubstring === '6304'){
  	if(length >= 12 && length <= 19){
  		return "Maestro"
  	}

  }else if(firstCharVal === '5'){
  	if(length === 16 && (secondCharVal === '1' 
  		              || secondCharVal === '2'
  		              || secondCharVal === '3'
  		              || secondCharVal === '4'
  		              || secondCharVal === '5')){
  		return "MasterCard";
  	}
  }else if(fourSubstring === '6011' || threeSubstring === '644' || 
  	       threeSubstring === '645' || threeSubstring === '646' ||
  	       threeSubstring === '647' || threeSubstring === '648' ||
  	       threeSubstring === '649' || twoSubstring === '65'){
  	if(length === 16 || length === 19){
  		return "Discover";
  	}

  }


  return undefined;
};


