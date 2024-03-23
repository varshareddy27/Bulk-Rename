const fs= request('fs');
const path =require('path');
const replaceWith ="hi"
const preview = true
const folder=path(__dirname)
try{
    fs.readdir(folder,(err,data)=>{
        console.log(data);
        for(let index=0;index<data.length;index++){
            const item=data[index];
            let newFile="data/"+item.replaceAll(replaceThis,replaceWith)
if(!preview)

{
    fs.rename("data/"+item,newFile,()=>{
        console.log("Rename Success",item,newFile)
    })
}
else{
    if("data/"+ item !==newFile)console.log(""+item+"will be renamed to"+newFile)
    }
}
})
}
catch(err){
console.log(err)
}