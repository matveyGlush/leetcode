function reverseWords(s: string): string {
    return s.trim().split(' ').filter(str => str !== '').reverse().join(' ')
}
console.log(reverseWords("a good   example"))
