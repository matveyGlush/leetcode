let s: string[] = ["h","e","l","l","o"]

function reverseString(s: string[]): void {
    let start = 0
    let end = s.length - 1
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++
        end--
    }
}

reverseString(s)
console.log(s)
