$(document).ready(function(){
$("#play1").click(function(){
  $(".hide1").fadeIn();
  $(".para1").fadeIn();
});
$("#play2").click(function(){
  $(".hide2").fadeIn();
  $(".para2").fadeIn();
});

 var name1 , cummulativeRoll1, total1,  name2 , cummulativeRoll2, total2  ;

 total1 = 0;
 cummulativeRoll1 = 0;
 total2 = 0;
 cummulativeRoll2 = 0;


 $(".roll1").click(function() {
   randomNo = Math.floor(Math.random() * 6) + 1;

   if (randomNo === 1) {
     alert("Oops, you rolled a 1");
     cummulativeRoll1 = 0;
     $("#count1").text(cummulativeRoll1);
     total1 += cummulativeRoll1;
     $("#total1").text(total1);
     $(".hide1").hide();
   } else {
     $("#Roll1").text(randomNo);
     cummulativeRoll1 += randomNo;
     $("#count1").text(cummulativeRoll1);
   }

 });
 $("#hold1").click(function(){
    total1 += cummulativeRoll1;
    $("#total2").text(totalPoints2);
    cummulativeRoll1 = 0;
    $(".hide1").hide();
 });
//for player 2//
 $(".roll2").click(function() {
   randomNo = Math.floor(Math.random() * 6) + 1;

   if (randomNo === 1) {
     alert("Oops, you rolled a 1");
     cummulativeRoll2 = 0;
     $("#count2").text(cummulativeRoll2);
     total2 += cummulativeRoll2;
     $("#total2").text(total2);
     $(".hide2").hide();
   } else {
     $("#Roll2").text(randomNo);
     cummulativeRoll2 += randomNo;
     $("#count2").text(cummulativeRoll2);
   }
   $("#hold2").click(function(){
      total2 += cummulativeRoll2;
      $("#total2").text(totalPoints2);
      cummulativeRoll2 = 0;
      $(".hide2").hide();
   });

});
});
