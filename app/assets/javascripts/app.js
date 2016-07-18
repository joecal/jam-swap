"use strict";

(function(){
  angular
  .module("jamswap", [
    "ui.router",
    "ngResource",
    "users",
    "categories",
    "posts",
    "comments"
  ])
  .config(["$stateProvider", "$locationProvider", RouterFunction]);

    function RouterFunction($stateProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $stateProvider
      .state("userIndex", {
        url: "/users",
        templateUrl: "app/views/users/index.html.erb",
        controller: "UserIndexController",
        controllerAs: "UserIndexViewModel"
      })
      .state("userShow", {
        url: "/users/:id",
        templateUrl: "app/views/users/show.html.erb",
        controller: "UserShowController",
        controllerAs: "UserShowViewModel"
      })
      .state("categoryIndex", {
        url: "/categories",
        templateUrl: "app/views/categories/index.html.erb",
        controller: "CategoryIndexController",
        controllerAs: "CategoryIndexViewModel"
      })
      .state("categoryShow", {
        url: "/categories/:id",
        templateUrl: "app/views/categories/show.html.erb",
        controller: "CategoryShowController",
        controllerAs: "CategoryShowViewModel"
      })
      .state("postIndex", {
        url: "/posts",
        templateUrl: "app/views/posts/index.html.erb",
        controller: "PostIndexController",
        controllerAs: "PostIndexViewModel"
      })
      .state("postShow", {
        url: "/posts/:id",
        templateUrl: "app/views/posts/show.html.erb",
        controller: "PostShowController",
        controllerAs: "PostShowViewModel"
      })
      .state("commentIndex", {
        url: "/comments",
        templateUrl: "app/views/comments/index.html.erb",
        controller: "CommentIndexController",
        controllerAs: "CommentIndexViewModel"
      })
      .state("commentShow", {
        url: "/comments/:id",
        templateUrl: "app/views/comments/show.html.erb",
        controller: "CommentShowController",
        controllerAs: "CommentShowViewModel"
      });
  }
})();
