
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result=[];
  
if(matrix==[]||matrix==undefined){
  result=[];
} else{ for(let i=0; i<matrix.length; i++){
  let part = matrix[i];

  if((i==0)||(i%2==0)){
    for(let i=0;i<part.length;i++){
      result.push(part[i]);
      }
    
    
    }
  else{
    let rev = part.reverse();
    for(let i=0;i<rev.length;i++){
      result.push(rev[i]);
      }
    
    }
  
  }}

  
  
  return result;
}
