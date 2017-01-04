// for loop :

function repeatForLoop(str, num) {
 if (num <= 0){
   return "";
 }else {
   var x = str;
   for (var i = 0 ; i < num-1 ; i++){
     str = str + x;
   }
 }
  return str;
}

repeatForLoop("*", 3);

// while loop :

function repeatWhileLoop(str, num) {
 if (num <= 0){
   return "";
 }else {
   var x = str;
   var z = 0;
   while (z < num-1){
     str = str + x;
     z++;
   }
 }
  return str;
}

repeatWhileLoop("*", 3);

// do while loop:

function repeatDoWhileLoop(str, num) {
 if (num <= 0){
   return "";
 }else if (num == 1){
   str =str;
 }else {
   var x = str;
   var z = 0;
  do{
     str = str + x;
     z++;
   } while (z < num-1);
 }
  return str;
}


repeatDoWhileLoop("*", 3);
