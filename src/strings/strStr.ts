let haystack: string = "badbutsad"
let needle: string = "sad"

function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle)
}

console.log(strStr(haystack, needle))
