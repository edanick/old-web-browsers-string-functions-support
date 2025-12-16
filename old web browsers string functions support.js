
/*
    Author: Edan
    Version: 1.0.4
*/

/**
 * Checks if a substring exists within a string.
 * Compatible with old browsers (Early ES versions era).
 *
 * @param {string} string - The main string to search in.
 * @param {string} substring - The substring to look for.
 * @returns {boolean} - True if substring is found, false otherwise.
 */
function includes(string, substring) {
    if (substring.length === 0) {
        return true;
    }

    var x, y, match;
    for (x = 0; x <= string.length - substring.length; x++) {
        match = true;
        for (y = 0; y < substring.length; y++) {
            if (string.charAt(x + y) !== substring.charAt(y)) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    return false;
}

/**
 * Replaces all occurrences of a substring within a string.
 *
 * This implementation manually checks character by character
 * to determine if the search substring occurs at the current
 * position in `string`. If a match is found, it appends the
 * replacement and skips ahead by the length of the search.
 * Otherwise, it appends the current character and moves forward.
 *
 * Compatible with old browsers (Early ES versions era).
 *
 * @param {string} string - The original string to process.
 * @param {string} search - The substring to search for.
 * @param {string} replacement - The string to replace each occurrence with.
 * @returns {string} A new string with all occurrences of `search` replaced by `replacement`.
 */
function replaceAll(string, search, replacement) {
    var result = "";
    var x = 0;

    while (x < string.length) {
        var match = true;
        for (var y = 0; y < search.length; y++) {
            if (string.charAt(x + y) !== search.charAt(y)) {
                match = false;
                break;
            }
        }

        if (match) {
            result += replacement;
            x += search.length;
        } else {
            result += string.charAt(x);
            x++;
        }
    }

    return result;
}

