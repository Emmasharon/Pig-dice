$(document).ready(function(){
$("#play1").click(function(){
  $(".hide1").fadeIn();
  $(".para1").fadeIn();
});
$("#play2").click(function(){
  $(".hide2").fadeIn();
  $(".para2").fadeIn();
});

 var name1 , cummulativeRoll1, total1,  name2 , cummulativeRoll2, total2,  ;

 total1 = 0;
 cummulativeRoll1 = 0;
 total2 = 0;
 cummulativeRoll2 = 0;


 $("#roll1").click(function() {
   randomNo = Math.floor(Math.random() * 6) + 1;

   if (randomNo === 1) {
     alert("Oops, you rolled a 1");
     cummulativeRoll1 = 0;
     $("#count1").text(cummulativeRoll1);
     total1 += roundCounts1;
     $("#total1").text(total1);
     $(".hide1").hide();
   } else {
     $("#turn1").text(randomNo);
     cummulativeRoll1 += randomNo;
     $("#count1").text(cummulativeRoll1);
   }

 });

 $("#hold1").click(function(){
    total1 += cummulativeRoll1;
    $("#total1").text(totalPoints1);
    cummulativeRoll1 = 0;
    $(".hide1").hide();
 });

});
});









//to promp players to insert names//











// $("#play").click(function(){
//   $(".hide1").show();





































//   if ($("#p1") == "" || $("#p2").val() == "") {
//   alert("Please fill in your names to continue!");
//   location.reload();
//   }
//   else{
//    nameInput1 =$("input#p1").val();
//    nameInput2 =$("input#p2").val();
//   $("#first").text(nameInput1);
//   $("#second").text(nameInput2);
// }
// })
//
//   var totalSum1=0;
//   var sum1=[];
//   var currentScore1=0;
//   var totalSum2=0;
//   var sum2=[];
//   var currentScore2=0;
//
//
// $(".roll1")function() {
//     rollDice1=Math.floor(Math.random() *6) +1;
//     document.getElementById('#pl1')
//     if(rollDice1 === 1){
//       alert("good job!want to roll again?");
//     }

    // if(rollDice1==6){
    //   alert("good job!want to roll again?");
    // }
    // else if(rollDice1==2){
    //   alert("good job!want to roll again?");
    // }
    // else if(rollDice1==3){
    //   alert("good job!want to roll again?");
    // }
    // else if(rSSollDice1==4){
    //   alert("good job!want to roll again?");
    // }
    // else if(rollDice1==5){
    //   alert("good job!want to roll again?");
    // }
    // else if (rollDice1==1){
    //   alert("Oops! That's a 1")
    // }
    // if(rollDice1!=1){
    //     currentScore1+=rollDice1;
    //
    // }
    // else{
    //  currentScore1=0;
    //  sum1=[];
    //  $(".bt1").hide();
    //  $(".bt2").show();
    //  $("#blue").css({opacity: "0.2"});
    //  $("#green").css({opacity: "1"});
    // }

// });
