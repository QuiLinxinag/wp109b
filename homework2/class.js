class Vector
{
    constructor(array)
    {
        this.value = array;
    }

    add(v)
    {
        var a = []
        for(var i = 0;i < this.value.lengh ; i++)
        {
            a[i] = v.value[i] + this.value[i]
        }
        return new Vector(a)
    }

    sub(v)
    {
        var a = []
        for(var i = 0;i < v.value.lengh ; i++)
        {
            a[i] = this.value[i] - v.value[i]
        }
        return new Vector(a)
    }

    dot(v)
    {
        var j = 0
        for(var i = 0;i < this.value.lengh ; i++)
        {
            j += this.value[i] * v.value[i] 
        }
        return j
    }

    neg()
    {
        var a = []
        for(var i = 0;i < this.value.lengh ; i++)
        {
            if(this.value[i]>0) a[i] = this.value[i] * -1
            else a[i] = this.value[i]
        }
        return new Vector(a)
    }

}

var v1 = new Vector([1,2,3]);
var v2 = new Vector([1,1,1]);

console.log("v1=",v1);
console.log("v2=",v2);
console.log("v1.add(v2)=",v1.add(v2));
console.log("v1.sub(v2)=",v1.sub(v2));
console.log("v1.dot(v2)=",v1.dot(v2));
console.log("v1.neg()=",v1.neg());