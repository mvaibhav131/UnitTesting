const { string } = require("yargs");

function sum(a,b){
    if(typeof a ==="string" && typeof b ==="string"){
        return;
    }
    return a+b;
}
module.exports=sum;
// console.log(sum(9,5));