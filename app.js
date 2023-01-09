let i;
let num=0;
let num2=1;
let calculation="quo";
let count=0

if(calculation=="sum"){
  for(i=1; i<=10; i++){
    num=num+i;
  }
  alert("1から10まで足し算した合計は"+num+"です");
}else if(calculation=="dif"){
  for(i=1; i<=10; i++){
    num=num-i;
  }
  alert("1から10まで引き算した結果は"+num+"です");
}else if(calculation=="pro"){
  for(i=1; i<=10; i++){
    num2=num2*i;
  }
  alert("1から10まで掛け算した結果は"+num2+"です");
}else if(calculation=="quo"){
  for(i=1; i<=10; i++){
    num2=num2/i;
  }
  alert("1から10まで割り算した結果は"+num2+"です");
}else{
  alert("計算式がが入力されていません");
}