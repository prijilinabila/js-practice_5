var num=5;
var n1=0,n2=1,nextterm;
console.log('fibonacci series',);
for(i=1;i<=num;i++){
    console.log(n1);
    console.log('\t');
    nextterm=n1+n2;
    n1=n2;
    n2=nextterm;
}
