myApp.service('GetHighFives', function($http){
  var counter = 0;
  var skill = 0;
  var highFive = 0;
  // return current value

  this.highFiveGet = function(){
    return counter;
  };

  this.highFiveSet = function () {
    console.log('high five set running');
    counter++;
  };

  this.randoSkill = function () {
    console.log('in random skills');
    var skill = Math.floor(Math.random() * 10 + 1);
    console.log("this is the skill", skill);
    return skill;

  };
    this.randoSkill();


  this.highFive = function () {
    console.log('in random skills');
    var highFive = Math.floor(Math.random() * 10 + 1);
    console.log('this is the high five', highFive);
    return highFive;


  };

  this.highFive();

  this.countFive = function() {
    console.log('button clicked');
    if (highFive >= skill) {
      console.log('highFive ->' , highFive);
      console.log('skill ->' , skill);
      counter++;
      console.log('wins:', counter);
      return counter;
    } else {
      console.log('sorry didnt match');
    }

  };
  this.countFive();
}); // end service
