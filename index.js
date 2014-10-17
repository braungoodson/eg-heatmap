angular
	.module('app',['leaflet-directive'])
	.provider('appProvider',[function(){this.$get=[function(){return new appProvider();}];function appProvider(){}}])
	.service('appService',[function(){return{};}])
	.factory('appFactory',[function(){return{};}])
	.directive('appDirective',[function(){return{};}])
	.controller("DemoController", [ "$scope", function($scope) {
        var dataPoints = [];

        angular.extend($scope, {
                center: {
                    lat: 34,
                    lng: -72,
                    zoom: 6
                },
                layers: {
                    baselayers: {
                        osm: {
                            name: 'OpenStreetMap',
                            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                            type: 'xyz'
                        }
                    },
                    overlays: {
                        heatmap: {
                            name: 'Heat Map',
                            type: 'heatmap',
                            data: dataPoints,
                            visible: true
                        }
                    }
                }
            });

        
        setInterval(function(){
          var lat,lng,radius;
          lat = (Math.random()*10)+34;
          lng = (Math.random()*-35)-72;
          radius = 10;
          $scope.center.lat = lat;
          $scope.center.lng = lng;
            $scope.layers.overlays.heatmap.data.push([
              lat,lng,radius
            ]);
            console.log(lat,lng,radius);
            $scope.$apply();
        },1000);

        function init() {
          if (!_init) {
          
          } else {
          dataPoints = [
                [44.751144316,-63.786260171, 5.5],
                [44.751144316,-63.586260171, 10.5],
                [44.651144316,-63.786260171, 5.5],
                [45.751144316,-63.586260171, 10.5],
                [46.251144316,-63.586260171, 10.5],
                [46.751144316,-63.586260171, 10.5],
                [44.75, -63.5, 0.8] ];
          }
        
        }
    }])
;
