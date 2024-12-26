function countWord(){
    let x =document.getElementById("text1").value;
    let count =0;
    let split =x.split(" ");
    for(let i =0; i< split.length; i++){
        if(split[i]!=""){
            count =count+1;
        }
        
    }
document.getElementById("spantag").innerHTML = count;
}