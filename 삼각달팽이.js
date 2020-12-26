function solution(n) {
    var answer = [];
    //console.log(n);
    var tri=[];
    for(var i=1;i<n+1;i++){
        tri=[];
        if(i==n){
            for(var j=n;j<2*n;j++){
                tri.push(j);
                
            }
            
//             for(var k=n-1, l=2*n;k>0,l<2*n-2;k--,l++){
//                 tri[k].push(l);
//             }

        }else tri.push(i);
               
        answer.push(tri);
    
    }
    var t=2*n;
     for(var k=n-2;k>0;k--){       
         answer[k].push(t++);
       }
               
         
    return answer;
}
