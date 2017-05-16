myApp.service('GetHighFives', function(){
  var counter = 0;
  // var skill = 0;
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
    this.skill = Math.floor(Math.random() * 10 + 1);
    console.log("this is the skill", this.skill);
    return this.skill;

  };


  this.highFive = function () {
    console.log('in random skills');
    var highfive = Math.floor(Math.random() * 10 + 1);
    console.log('this is the high five', highFive);
    return highfive;


  };

  this.highFive();

  this.countFive = function(foo) {
    console.log('button clicked in service');
    if (foo >= this.skill) {
      console.log('highFive ->' , foo);
      console.log('skill ->' , this.skill);
      counter++;
      console.log('wins:', counter);
      return counter;
    } else {
      console.log('sorry didnt match');
      return counter;
    }

  };
}); // end service
