myApp.service('RandomNumber' , function (){
this.randoNumb = function (min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
};
});
