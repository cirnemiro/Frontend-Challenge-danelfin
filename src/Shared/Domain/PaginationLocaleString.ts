export const getAndConvertLocaleString = (str: string): string => {
    let regex = /(\d+)/g;
    let matches = str.match(regex);
    
    // Ensure matches is defined and has at least three elements
    if (!matches || matches.length < 3) {
        throw new Error("The input string does not contain enough numeric values.");
    }

    // Convert each match to a locale string
    let start = parseInt(matches[0], 10).toLocaleString('en-US');
    let end = parseInt(matches[1], 10).toLocaleString('en-US');
    let total = parseInt(matches[2], 10).toLocaleString('en-US');

    // Replace the original numbers with the formatted ones
    let transformedStr = str.replace(matches[0], start)
                        .replace(matches[1], end)
                        .replace(matches[2], total);

    return transformedStr;
}