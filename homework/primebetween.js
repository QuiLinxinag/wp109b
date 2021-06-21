function between(a,b)
{
    for(var n = a ; n < b ; n++)

    if (isPrime(n))
    {
        console.log(n)
    }
}
   
function isPrime(n){
    
    if(n < 2)
    {
        return false
    }

    if(n == 2)
    {
        return true
    }


    for (var i = 2 ; i < n ; i++)
    {
        if(n % i == 0)
        {
            return false
        }
        return true
    }
}

between(1,15)