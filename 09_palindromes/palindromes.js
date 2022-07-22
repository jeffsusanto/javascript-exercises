const palindromes = function(string) {
    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
      processedString
        .split("")
        .reverse()
        .join("") == processedString
    );
  };
  
  module.exports = palindromes;

// Do not edit below this line
module.exports = palindromes;
