
function scuberGreetingForFeet(distance) {
  if (distance < 400) {
    return 'This one is on me!'
  }
  if ((distance > 200) && (distance < 2500)){
    return 'I will gladly take your thirty bucks.'
  }
  if (distance > 2500) {
    return 'No can do'
  }
}
