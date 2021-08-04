
/**
 * Jaro Similarity Function
 * 
 * This algorithm measures the edit distance between two character sequences.
 * In this JavaScript implementation we specifically compare string data types to
 * generate the edit distance.
 * 
 * 0 === no matches found
 * 1 === perfect matches
 *  
 * @param { String } str1 
 * @param { String } str2 
 * @returns Number
 */
 const jaroSimilarity = (str1, str2) => {
    let shortLen = str1.length,
        longLen = str2.length,
        matches = 0,
        transpositions = 0,
        characterMatches = [];

    // Calc the maxmimum distance between characters that we are allowed to compare
    const maxDist = Math.floor(Math.max(shortLen, longLen) / 2) - 1;

    // If strings match 
    if (str1 === str2) return 1;

    // If either string is empty
    if (!shortLen || !longLen) return 0;

    // Swap variables if needed
    if (shortLen > longLen) {
        // Swap lengths
        let temp = shortLen;
            shortLen = longLen;
            longLen = temp;
        // Swap strings
            temp = str1;
            str1 = str2;
            str2 = temp;
    }

    // Create an array with the length of the longest string
    // Initialized with false values, because no matches have been found yet
    // We will convert these to true as we find matches
    const matchedWithLongStringArray = new Array(longLen).fill(false);

    // Initialize a loop based on the short string length
    for (let i = 0; i < shortLen; i++) {

        // Create a start and end to represent the maxDist 
        // that we can compare characters with
        let start = Math.max(i - maxDist, 0),
            end = Math.min(i + maxDist + 1, longLen);

        // Initialize the loop where we will compare characters within the maxDist
        while (start < end) {
            
            // Check if character has already been matched and 
            // whether character is equvialent in both strings 
            // then update matched array and push character from short string to match array
            if (!matchedWithLongStringArray[start] && str2[start] === str1[i]) {
                matches++;
                matchedWithLongStringArray[start] = true;
                characterMatches.push(str1[i]);
                break;
            }
            start++
        }
    }
    
    // Calc transpositions based on the num of truthy values in the matched long string array
    // and whether the character in the long string is equivalent to the character
    // in the characterMatches array 
    let y = 0;
    for (let z = 0; y < matches; z++) {
        if (matchedWithLongStringArray[z]) {
            if (str2[z] !== characterMatches[y]) transpositions++;
            y++
        }
    }

    return ((matches / shortLen) + (matches / longLen) + ((matches - transpositions / 2) / matches)) / 3;
}

module.exports = jaroSimilarity;