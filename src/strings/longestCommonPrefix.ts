let strs: string[] = ["flower","flow","flight"]

function longestCommonPrefix(strs: string[]): string {
    let counter = 0;
    while(strs[0][counter] && strs.every(w => w[counter] === strs[0][counter]))
        counter++;
    return strs[0].substring(0, counter)
}

console.log(longestCommonPrefix(strs))
