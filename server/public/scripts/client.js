var myApp = angular.module( 'myApp', [] );
// controller
myApp.controller('FirstController', function($http, GetHighFives ){
  console.log('NG');
  // global variable to controller
  var vm = this;
  vm.count = 0;
  // current count

  vm.skill = GetHighFives.randoSkill();
  vm.highfive = GetHighFives.highFive();
  vm.countfive = GetHighFives.countFive();


}); // end controller
