var myApp = angular.module( 'myApp', [] );
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

}); // end controller
