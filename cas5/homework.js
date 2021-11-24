
const syllableRegex = /[^aeiou]*[aeiou]+(?:[^aeiou]*$|[^aeiou](?=[^aeiou]))?/gi

function findSyllabify(words) {
    
    if(!(words.match(syllableRegex)))
        return words

    else
        return words.match(syllableRegex)

}

console.log(['aerodrom', 'shtrk', 'slon', 'Majka', 'plastika', 'kompjuter', 'vrv'].map(findSyllabify))