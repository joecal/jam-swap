"use strict";

(function(){
  angular
  .module("jamswap", [
    "ui.router",
    "ngResource",
    "categories",
    "posts",
    "jobs",
    "meetups"
  ])
  .config(["$stateProvider", "$locationProvider", RouterFunction]);

    function RouterFunction($stateProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $stateProvider
      .state("categoryIndex", {
        url: "/categories",
        templateUrl: "categories/index.html.erb",
        controller: "category_controller",
        controllerAs: "CategoryIndexViewModel"
      })
      .state("categoryShow", {
        url: "/categories/:id",
        templateUrl: "categories/show.html.erb",
        controller: "CategoryShowController",
        controllerAs: "CategoryShowViewModel"
      })
      .state("postIndex", {
        url: "/posts",
        templateUrl: "posts/index.html.erb",
        controller: "post_controller",
        controllerAs: "PostIndexViewModel"
      })
      .state("postShow", {
        url: "/posts/:id",
        templateUrl: "posts/show.html.erb",
        controller: "PostShowController",
        controllerAs: "PostShowViewModel"
      })
      .state("jobIndex", {
        url: "/jobs",
        templateUrl: "jobs/index.html.erb",
        controller: "job_controller",
        controllerAs: "JobIndexViewModel"
      })
      .state("jobShow", {
        url: "/jobs/:id",
        templateUrl: "jobs/show.html.erb",
        controller: "JobShowController",
        controllerAs: "JobShowViewModel"
      })
      .state("meetupIndex", {
        url: "/meetups",
        templateUrl: "meetups/index.html.erb",
        controller: "meetup_controller",
        controllerAs: "MeetupIndexViewModel"
      })
      .state("meetupShow", {
        url: "/meetups/:id",
        templateUrl: "meetups/show.html.erb",
        controller: "MeetupShowController",
        controllerAs: "MeetupShowViewModel"
      });
  }
})();
