angular.module('wisereader.controllers', ['ionic', 'ion-affix'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('booksCtrl', function($scope) {
  $scope.books = [
    { id: 1, title: 'Reggae', imgUrl: 'img/img1.jpg', pdfUrl: 'pdf/1.pdf', shortDesc: 'ksjf jshjfh hhsf odfjfd jjhf hhlhfs hffjsj'},
    { id: 2, title: 'Chill', imgUrl: 'img/img2.jpg', pdfUrl: 'pdf/2.pdf', shortDesc: 'jdsf kkels fgkfjgrn djjds bnsks'  },
    { id: 3, title: 'Dubstep',  imgUrl: 'img/img3.jpg', pdfUrl: 'pdf/3.pdf', shortDesc: 'nnxuso hjss hue dkld kkdjsk jkss' },
    { id: 4, title: 'Indie', imgUrl: 'img/img4.jpg', pdfUrl: 'pdf/4.pdf', shortDesc: 'mbjsdj mfjd ksle skedmd ndss klsnzj' },
    { id: 5, title: 'Rap', imgUrl: 'img/img5.jpg', pdfUrl: 'pdf/5.pdf', shortDesc: 'ndiks ioewhd jekd jiend hhjjj' },
    { id: 6, title: 'Cowbell', imgUrl: 'img/magic.jpg', pdfUrl: 'pdf/6.pdf', shortDesc: 'uns jsjs haauj jksks hssks '}
  ];


var shuffleArray = function(books) {
              var m = books.length, t, i;

              // While there remain elements to shuffle
              while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = books[m];
                books[m] = books[i];
                books[i] = t;
              }

              return books;
            }
shuffleArray($scope.books);


})

.controller('bookCtrl', function($scope, $stateParams) {
});
