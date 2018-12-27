const PhoneNumber = require('./PhoneNumber.js')
const Bob = require('./Bob');
const Meetup = require('./Meetup');

const attempt = (input, test, ...actions) => {
  console.log("====Testing====");
  try{
    let x = new PhoneNumber(input);
    actions.forEach(A => {
      switch(A){
        case "number": case "pretty": case "areaCode": 
        case "exchangeCode": case "lineNumber":
          console.log(x[A]());
          break;
        default:
          throw new Error("Enter valid test and actions on attempt(input,...actions)");
      }
    });
  }catch (error){
    console.log(error.toString())
  }
  
  console.log("===============");
}

(function(){
  console.log("Attempting new PhoneNumber('59179097')");
  console.log("Should print: Error: Phone string is invalid")
  attempt('59179097');

  console.log("Attempting new PhoneNumber('5059179097').number()");
  console.log("Should print: 5059179097")
  attempt('5059179097','number');

  console.log("Attempting all actions on new PhoneNumber('15059179097')");
  console.log("Should print: 5059179097\n(505) 917-9097\n505\n917\n9097");
  attempt('15059179097','number','pretty','areaCode','exchangeCode','lineNumber');

  console.log("Attempting new PhoneNumber('25059179097')")
  console.log("Should print: Error: Phone string is invalid")
  attempt('25059179097');

  console.log("Attempting new PhoneNumber('115059179097')")
  console.log("Should print: Error: Phone string is invalid")
  attempt('115059179097');


  console.log("\nTESTING BOB")
  console.log("Attempting Bob.hey()")
  console.log("Should print: Whatever.")
  Bob.hey();
  console.log("Attempting Bob.hey(13)")
  console.log("Should print: Whatever.")
  Bob.hey('13');
  console.log("Attempting Bob.hey(1HEY)")
  console.log("Should print: Whoa, chill out!")
  Bob.hey('1HEY!!!');
  console.log("Attempting Bob.hey('    ')");
  console.log("Should print: Fine. Be that way!")
  Bob.hey('    ')
  console.log("Attempting Bob.hey('')");
  console.log("Should print: Fine. Be that way!")
  Bob.hey('')
  console.log("Attempting Bob.hey('Hey, what is up?')");
  console.log("Should print: Sure.")
  Bob.hey('Hey, what is up?');
  console.log("Attempting Bob.hey('Hey, what is up?   ')");
  console.log("Should print: Sure.")
  Bob.hey('Hey, what is up?   ');

  console.log("\nTESTING MEETUP");
  console.log("Attempting Meetup.meetupDay(2012, 12, 'Monday', 'teenth'");
  console.log(Meetup.meetupDay(2012, 12, "Monday", "teenth").toDateString());
  console.log("Attempting Meetup.meetupDay(2012, 12, 'Monday', 'last'");
  console.log(Meetup.meetupDay(2012, 12, "Monday", "last").toDateString());
  console.log("Attempting Meetup.meetupDay(2012, 12, 'Monday', 'first'");
  console.log(Meetup.meetupDay(2012, 12, "Monday", "first").toDateString());
  console.log("Attempting Meetup.meetupDay(2012, 12, 'Monday', '2nd'");
  console.log(Meetup.meetupDay(2012, 12, "Monday", "2nd").toDateString());
  console.log("Attempting Meetup.meetupDay(2012, 12, 'Monday', '3rd'");
  console.log(Meetup.meetupDay(2012, 12, "Monday", "3rd").toDateString());
  console.log("Attempting Meetup.meetupDay(2012, 12, 'Monday', '4th'");
  console.log(Meetup.meetupDay(2012, 12, "Monday", "4th").toDateString());
}());