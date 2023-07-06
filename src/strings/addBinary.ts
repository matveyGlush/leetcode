let a: string = "1010"
let b: string = "1011"

function addBinary(a: string, b: string): string {
    let ans = "";
    let ca = 0;
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        ca += i >= 0 ? parseInt(a[i]) : 0;
        ca += j >= 0 ? parseInt(b[j]) : 0;
        ans += ca % 2;
        ca = Math.floor(ca / 2);
    }
    ans += ca == 1 ? ca : "";
    return ans.split('').reverse().join('');
}

console.log(addBinary(a,b))
