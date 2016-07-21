"use strict";

(function(){
  angular
  .module("homes")
  .factory("HomeFactory", [
    "$resource",
    HomeFactoryFunction
  ]);

  function HomeFactoryFunction($resource) {
    return $resource("https://localhost:3000/home/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
