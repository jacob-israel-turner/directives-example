var app = angular.module('directivesApp', []);

app.controller('mainCtrl', function($scope){

  $scope.images = [
    'http://i.imgur.com/B9Zf2tq.jpg',
    'http://truestorieswithgill.com/wp-content/uploads/2013/09/20130915-191127.jpg',
'http://i1383.photobucket.com/albums/ah307/JIsraelTurner/King%20Spencer_zps6ecq9gxs.jpg'
  ]

});

app.directive('jtImage', function(){
  
  return {
    template: 
      `
        <div>
          <img ng-src='{{ url }}'>
        </div>
      `,
    restrict: 'E',
    transclude: true,
    scope: {

      url: '='

      // test: '@' // scope.test = whatever you typed in the attr, as a string. 
      // test: '=' // scope.test = whatever you typed in the attr, as evaluated on the scope.  ($scope.whatever === 'stuff!!', so scope.test === 'stuff!!')
      // test: '&' // scope.test = the function or expression passed in the attr. will run on the parent scope/controller.
    },
    link: function(scope, element, attributes){

     element.on('click', function(){
      var child = element.children('div').children('img');
      child.width(child.width() * 2);
     });

    }



    // controller: 'theNameOfTheController
    /*
    controller: function($scope, mainService, $http){
     console.log($scope); 
    }
    */
  }

});


