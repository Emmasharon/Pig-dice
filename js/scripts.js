// $(#submit).submit(function(event){
//   event,preventDefault();
//   num++;
//   if (num>2){
//     alert("only two players please");
//     reset();
//   }
//   else if (num==2) {
//     $
//   }
// }

$("#play").click(function(){
  if ($("#p1") == "" || $("#p2").val() == "") {
  alert("Please fill in your names to continue!");
  location.reload();
  }
  else{
   nameInput1 =$("input#name1").val();
   nameInput2 =$("input#name2").val();
  $("#first").text(nameInput1);
  $("#second").text(nameInput2);
}
})
