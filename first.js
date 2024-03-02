// check my github knowledge

function app(){
let t1=0;
let t2=1;
let nextTerm=t1+t2;
console.log(t1,t2);  
for(let i=2; i<=8; i++){
 
    t1=t2;
   t2=nextTerm;
    nextTerm=t1+t2;

}
return nextTerm;
}
console.log(nextTerm);
