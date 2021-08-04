const jaroSimilarity = require('./jaro');

/**
 * Jaro-Winkler Similarity Function
 * 
 * An optimized algorithm that builds on the Jaro Similarity, which gives 
 * a more favourable rating to strings with matching prefixes.
 * 
 * 0 === no matches found
 * 1 === perfect matches
 *  
 * @param { String } str1 
 * @param { String } str2 
 * @returns Number
 */
const jaroWinklerSimilarity = (str1, str2) => {

    const jaroSim = jaroSimilarity(str1, str2);
      
    // Number of common prefixes in succession
    let prefix = 0;

    // How much the score is adjusted upwards for having common prefixes.
    // Should never exceed 4, Winkler's standard value is 0.1
    const scalingFactor = 0.1;

    // Find the number of identical prefixes between
    // both strings, to a max dist of 4
    const dist = Math.min(str1.length, str2.length, 4);

    // Compare each character in the string at (at the same index), 
    // if they are equal increment the prefix by 1
    for (let i = 0; i < dist; i++) {
        if (str1[i] === str2[i]) prefix++;
    }

    // Calculate Jaro Winkler Similarity
    return jaroSim + (prefix * scalingFactor * (1 - jaroSim));
}

module.exports = jaroWinklerSimilarity;