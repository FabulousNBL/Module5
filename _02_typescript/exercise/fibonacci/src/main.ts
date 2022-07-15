export function sum(n:number):number
{
    let fibonacci = [];
    if (n <= 0)
        return 0;
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    let sum = fibonacci[0] + fibonacci[1];
    for(let i = 2; i <= n; i++)
    {
        fibonacci[i] = fibonacci[i - 1] +
            fibonacci[i - 2];
        sum += fibonacci[i];
    }
    return sum;
}
console.log(sum(4))