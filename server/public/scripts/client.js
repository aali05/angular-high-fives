var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/daffy', {
    templateUrl: 'views/pages/daffy.html',
    controller: 'DaffyController as dc'
  }).when('/elmer', {
    templateUrl: 'views/pages/elmer.html',
    controller: 'ElmerController as ec'
  }).when('/bugs', {
    templateUrl: 'views/pages/bugs.html',
    controller: 'FirstController as fc'
  }).when('/tweety', {
    templateUrl: 'views/pages/tweety.html',
    controller: 'TweetyController as tc'
  }).otherwise('/daffy');

  $locationProvider.html5Mode(true);
});

// controller
myApp.controller('FirstController', function( GetHighFives ){
  console.log('NG');
  // global variable to controller
  var vm = this;
  vm.count = 0;
  // current count

  vm.skill = GetHighFives.randoSkill();

  vm.highFive = function(){
    console.log('in high five on client');
    vm.hf = GetHighFives.highFive();
    console.log("high five ran num: ",vm.hf);
    // .then(function () {
    vm.count = GetHighFives.countFive(vm.hf);
      // console.log(vm.hf);
    // });
  };

}); // end FirstController controller
// controller
myApp.controller('ElmerController', function (RandomNumber, GetHighFives) {
  console.log('NG');
  var vm = this;
  vm.skill = RandomNumber.randoNumb(4, 10);
  vm.highFive = function(){
    console.log('in high five on client');
    vm.hf = GetHighFives.highFive();
    console.log("high five ran num: ",vm.hf);
    // .then(function () {
    vm.count = GetHighFives.countFive(vm.hf);
  };
}); // end ElmerController

myApp.controller('TweetyController', function (RandomNumber, GetHighFives) {
  console.log('NG');
  var vm = this;
  vm.skill = RandomNumber.randoNumb(6, 10);
  vm.highFive = function(){
    console.log('in high five on client');
    vm.hf = GetHighFives.highFive();
    console.log("high five ran num: ",vm.hf);
    // .then(function () {
    vm.count = GetHighFives.countFive(vm.hf);
  };
}); // end TweetyController

myApp.controller('DaffyController', function (RandomNumber, GetHighFives) {
  console.log('NG');
  var vm = this;
  vm.count = 0;
  // current count

  vm.skill = GetHighFives.randoSkill();

  vm.highFive = function(){
    console.log('in high five on client');
    vm.hf = GetHighFives.highFive();
    console.log("high five ran num: ",vm.hf);
    // .then(function () {
    vm.count = GetHighFives.countFive(vm.hf);
  };
}); // end DaffyController
