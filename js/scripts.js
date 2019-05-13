
//to promp players to insert names//
$("#play").click(function(){
  if ($("#p1") == "" || $("#p2").val() == "") {
  alert("Please fill in your names to continue!");
  location.reload();
  }
  else{
   nameInput1 =$("input#p1").val();
   nameInput2 =$("input#p2").val();
  $("#first").text(nameInput1);
  $("#second").text(nameInput2);
}
})

  var totalSum1=0;
  var sum1=[];
  var currentScore1=0;
  var totalSum2=0;
  var sum2=[];
  var currentScore2=0;
$(function roll1() {
    var rollDice1=parseInt(Math.floor((Math.random()*6+1)));
    document.getElementById('#pl1');
    if(rollDice1==6){
      alert("good job!want to roll again?");
    }
    else if(rollDice1==2){
      alert("good job!want to roll again?");
    }
    else if(rollDice1==3){
      alert("good job!want to roll again?");
    }
    else if(rSSollDice1==4){
      alert("good job!want to roll again?");
    }
    else if(rollDice1==5){
      alert("good job!want to roll again?");
    }
    else if (rollDice1==1){
      alert("Oops! That's a 1")
    }
    if(rollDice1!=1){
        currentScore1+=rollDice1;

    }
    else{
     currentScore1=0;
     sum1=[];
     $(".bt1").hide();
     $(".bt2").show();
     $("#blue").css({opacity: "0.2"});
     $("#green").css({opacity: "1"});
    }

});
