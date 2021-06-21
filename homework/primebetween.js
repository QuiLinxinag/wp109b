function isPrime(n)
{
    for (var i = 2; i < n ** 0.5; ++i)
    {
        if (n % i == 0)
        {
            return 0;
        }
    }
    return 1;
}

function primebetween(a, b)
{
    var primes = [];
    for (var i = a; i != b; ++i)
    {
        if (isPrime(i))
            primes.push(i);
    }
    console.log(primes);
}
primebetween(7, 29);