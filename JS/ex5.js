console.log("Example 5");

let listStop = "" ;
let myList = [];

while (listStop.toLowerCase() !== "stop"){
    listStop = prompt("please eneter a word \n when you type 'stop', the program will stop:");
    myList.push(listStop);
    if (myList[0].toLowerCase() == "stop"){
        alert("No words to display, Stop was the first word entered");
        break
    }    
}  
myList.pop();
console.log (`You entered the following words: \n ${myList}`)



