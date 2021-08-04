const jaroSimilarity = require('./jaro');
const jaroWinklerSimilarity = require('./jaro-winkler');

// Jaro/Jaro-Winkler Similarity Tests
console.log('---------------------')
console.log('Jaro Similarity Tests')
console.log('---------------------')
console.log('jaroSimilarity(TRATE, TRACE) ', jaroSimilarity('TRATE', 'TRACE')) // 0.8666
console.log('jaroSimilarity(CRATE, TrACEE)' , jaroSimilarity('CRATE', 'TrACEE')) // 0.5777
console.log('jaroSimilarity(DwAyNE, DuANE) ', jaroSimilarity('DwAyNE', 'DuANE')) // 0.8222
console.log('jaroSimilarity(DIXON, DICKSONX)', jaroSimilarity('DIXON', 'DICKSONX')) // 0.7666
console.log('jaroSimilarity(MARTHA, MARHTA) ', jaroSimilarity('MARTHA', 'MARHTA')) // 0.9444
console.log('jaroSimilarity(JELLYFISH, SMELLYFISH) ', jaroSimilarity('JELLYFISH', 'SMELLYFISH')) // 0.8962
console.log('jaroSimilarity(THING, THING) ', jaroSimilarity('THING', 'THING')) // 1
console.log('jaroSimilarity(THING, THING) ', jaroSimilarity('THING', '')) // 0
console.log('jaroSimilarity(THING, THING) ', jaroSimilarity('', '')) // 1
console.log('jaroSimilarity(THING, THING) ', jaroSimilarity('', 'THING')) // 0
console.log('---------------------')

console.log('Jaro-Winkler Tests')
console.log('---------------------')
console.log('jaroWinklerSimilarity(TRATE, TRACE) ', jaroWinklerSimilarity('TRATE', 'TRACE')) // 0.90666
console.log('jaroWinklerSimilarity(CRATE, TrACEE)' , jaroWinklerSimilarity('CRATE', 'TrACEE')) // 0.6200
console.log('jaroWinklerSimilarity(DwAyNE, DuANE) ', jaroWinklerSimilarity('DwAyNE', 'DuANE')) // 0.8577
console.log('jaroWinklerSimilarity(DIXON, DICKSONX)', jaroWinklerSimilarity('DIXON', 'DICKSONX')) // 0.8133
console.log('jaroWinklerSimilarity(MARTHA, MARHTA) ', jaroWinklerSimilarity('MARTHA', 'MARHTA')) // 0.9611
console.log('jaroWinklerSimilarity(JELLYFISH, SMELLYFISH) ', jaroWinklerSimilarity('JELLYFISH', 'SMELLYFISH')) // 0.9066
console.log('jaroWinklerSimilarity(THING, THING) ', jaroWinklerSimilarity('THING', 'THING')) // 1
console.log('jaroWinklerSimilarity(THING, THING) ', jaroWinklerSimilarity('THING', '')) // 0
console.log('jaroWinklerSimilarity(THING, THING) ', jaroWinklerSimilarity('', '')) // 1
console.log('jaroWinklerSimilarity(THING, THING) ', jaroWinklerSimilarity('', 'THING')) // 0
console.log('---------------------')