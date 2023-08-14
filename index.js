let string = "Worry less Live More";

let reversedString = reverse(string,"");  //eroM eviL ssel yrroW
// let reversedString = reverse(string," ");  //More Live less Worry
// reversedString = reverse(reversedString,""); //yrroW ssel eviL eroM

console.log(reversedString)

function reverse(string,seperator){
    return string.split(seperator).reverse().join(seperator);
}