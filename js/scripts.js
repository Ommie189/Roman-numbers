// BUSINESS LOGIC
function convertToRoman(num) {
  var romanToNum = {
    M: 1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
     V:5,
     IV:4,
     I:1,
  };

  // var romanumber=function convertToRoman(num){
  var roman= "";

  for(var key in romanToNum) {
  //   console.log("key: ",key)
  //   console.log("value: ", romanToNum[key]);
  // }
    while(num >=romanToNum[key]) {
      roman += key;
      num -= romanToNum[key];
      console.log("Num is decreased: ", num)
    };
  };
  return roman;
};




// USER INTERFACE

$(document).ready(function(){//function to affect the whole page
 $("form#normalint").submit(function(event){
   event.preventDefault();//prevents the page from auto refreshing
   var num=parseInt($("input#number").val());//converts user input to intergers

   var result=convertToRoman(num);//what converts input to roman numerals
   $(".result").text(result);//displays on the html page
  console.log(num);//displays on console

 });
});
