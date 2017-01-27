// Ionic wisereader App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'wisereader' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'wisereader.controllers' is found in controllers.js
angular.module('wisereader', ['ionic', 'wisereader.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.recommendations', {
    url: '/recommendations',
    views: {
      'menuContent': {
        templateUrl: 'templates/recommendations.html',
        controller: 'recommendationsCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller: 'browseCtrl'
        }
      }
    })
    .state('app.books', {
      url: '/books',
      views: {
        'menuContent': {
          templateUrl: 'templates/books.html',
          controller: 'booksCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/books/:bookId',
    views: {
      'menuContent': {
        templateUrl: 'templates/book.html',
        controller: 'bookCtrl'
      }
    }
  })

  .state('app.upload', {
      url: '/upload',
      views: {
        'menuContent': {
          templateUrl: 'templates/upload.html',
          controller: 'uploadCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/books');
});
