function fuzzysearch(str1, str2) {
    if (!str1 || !str2 || str2.length < str1.length) return false;

    const searchString = Array.from(str2).reduce((acc, cur) => {

        if (str1.includes(cur)) acc += cur;

        return acc;
    }, '');

    return str1 === searchString;
}

console.log(fuzzysearch('wll', 'cartwheell'));