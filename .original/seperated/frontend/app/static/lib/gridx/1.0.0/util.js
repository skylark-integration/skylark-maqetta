//>>built
define("gridx/util",{stopEvent:function(_1){
if(_1&&_1.stopPropagation&&_1.preventDefault){
_1.stopPropagation();
_1.preventDefault();
}
},biSearch:function(_2,_3){
var i=0,j=_2.length,k;
for(k=Math.floor((i+j)/2);i+1<j;k=Math.floor((i+j)/2)){
if(_3(_2[k])>0){
j=k;
}else{
i=k;
}
}
return _2.length&&_3(_2[i])>=0?i:j;
}});
