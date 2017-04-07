function writeTweet()
{
  var randIndex;
  var sentence;

  var intro = ["What is this?", "I am", "What are you wearing, Jake from State farm?",
  "On Wednesday's, we wear"];
  var body = ["a school for ants?", "Batman", "khakis", "pink", "dude"];
  var end = ["crying", "stoked"];

  randIndex = randomUpTo(intro.length-1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length-1);
  sentence = sentence + " " + body[randIndex];
  randIndex = randomUpTo(body.length-1);
  sentence = sentence + " " + end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
