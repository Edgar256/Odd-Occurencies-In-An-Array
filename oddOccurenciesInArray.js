function solution(A) {
        
    var sortedA = A.sort(function(a,b){return a - b } );
    var len = sortedA.length;
    //console.log(sortedA);
    
    for(var i=0; i<len; i++){
        while(sortedA[i] == sortedA[i+1]){//check if consecutive elements are repeated
            sortedA.splice(i,2);//remove repeated elements
        }
        return sortedA[i];
    }    
    
    
}