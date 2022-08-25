function binary(sortarray,k)
{
    let start=0;
    let end=sortarray.length -1;
    while(start<=end)
    {
       let mid=Math.floor((start+end)/2);
    
    if(sortarray[mid]===k)
    {
        return(mid);
    }
    else if(sortarray[mid]<k)
    {
        start=mid+1;
    
    }
    else
    {
        end=mid-1;
    }
}
    return("not found")
}
console.log(binary([1,2,3,4,5,6,7,8,9,10,11],112));