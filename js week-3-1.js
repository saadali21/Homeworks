function threeCallback(val){
  if (val % 3 == 0){
    console.log(val + ' : I am divisible by three');
  }
}

function fiveCallback(val){
  if (val % 5 == 0){
    console.log(val + ' : I am divisible by five');
  }
}

function threeFive(startVal , endVal , firstCallback , secondCallback){
  var counter = 0;
  var arr = [];
  if (startVal > endVal || startVal < 0 || endVal < 0){
     return "Invalide values";
  } else {
        for ( var i = startVal ; i <= endVal ; i++){
           arr[counter] = i;
           counter++;
        }
    }
  for (var n = 0 ; n < arr.length ; n++){
     firstCallback(arr[n]);
     secondCallback(arr[n]);
  }
}

threeFive(10,15,threeCallback,fiveCallback);
