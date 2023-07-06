let a: string = "1010"
let b: string = "1011"

function addBinary(a: string, b: string): string {
    let ans = "";
    let ca = 0;
    for(let i = 0, j = 0; i < a.length || j < b.length; i++, j++) {
        ca += i < a.length ? parseInt(a[i]) : 0;
        ca += j < b.length ? parseInt(b[j]) : 0;
        ans += ca % 2;
        ca = Math.floor(ca / 2);
    }
    ans += ca == 1 ? ca : "";
    return ans;
}

console.log(addBinary(a,b))
