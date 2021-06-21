function star(n)
{
    var stars = []
    for (var i = 0; i != n; ++i)
    {
        stars.push("*");
    }
    console.log(stars);
}
star(7);