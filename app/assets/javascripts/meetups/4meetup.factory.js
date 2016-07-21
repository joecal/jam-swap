"use strict";

(function(){
  angular
  .module("meetups")
  .factory("MeetupFactory", [
    "$resource",
    MeetupFactoryFunction
  ]);

  function MeetupFactoryFunction($resource) {
    return $resource("https://localhost:3000/meetups/:id.json", {}, {
      update: {method: "PUT"}
    });
  }
}());
