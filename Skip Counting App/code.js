//numList will store the numbers starting from the "count by" number until the "up to"
//number using skip counting
var numList = [];
// 
//variables for the user inputs
var counterNum = 1;
var counterMax = 10;
//
//WHILE LOOP VERSION OF CODE
onEvent("while_button", "click", function( ) {
  setScreen("whilescreen");
});
//when the user clicks the GO button the program gets the numbers from the user and 
//uses them to run the counter functions
onEvent("start_button", "click", function( ) {
  setText("counter_output", "");
  counterNum = getNumber("count_input");
  counterMax = getNumber("max_input");
  counter(counterNum, counterMax);
});
// 
//counter uses a while loop to add numbers to a list using skip counting
//then counter sets the text on the screen to the list of numbers or
//if the users chooses to count to 100 or more it states that the number is too high
//countNum (number) is the number the user wants to start with
//maxNum (number) is the highest number the user wants to count to
function counter(countNum, maxNum) {
  numList = [];
  var currentVal = 0;
  currentVal = currentVal + countNum;
  while ((currentVal <= maxNum)) {
    appendItem(numList, currentVal);
    currentVal = currentVal+countNum;
  }
  if (maxNum>100) {
    setText("counter_output", "Wow, that's too high for me!");
  } else {
    setText("counter_output", numList.join(", "));
  }
}
// 
//
//
//
//ALL THE SAME STUFF BELOW, BUT USING A FOR LOOP
onEvent("for_button", "click", function( ) {
  setScreen("forscreen");
});
//
onEvent("go_button", "click", function( ) {
  setText("counter_output1", "");
  counterNum = getNumber("count_input1");
  counterMax = getNumber("max_input1");
  counter1(counterNum, counterMax);
});
// 
function counter1(countNum, maxNum) {
  numList = [];
  for (var i = countNum; i <= maxNum; i+=countNum) {
    appendItem(numList, i);
  }
  if (maxNum>100) {
    setText("counter_output1", "Wow, that's too high for me!");
  } else {
    setText("counter_output1", numList.join(", "));
  }
}
