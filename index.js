angular
	.module('app',['leaflet-directive'])
	.provider('appProvider',[function(){this.$get=[function(){return new appProvider();}];function appProvider(){}}])
	.service('appService',[function(){return{};}])
	.factory('appFactory',[function(){return{};}])
	.directive('appDirective',[function(){return{};}])
	.controller("DemoController", [ "$scope", function($scope) {
            var dataPoints = [
                [44.751144316,-63.786260171, 5.5],
                [44.751144316,-63.586260171, 10.5],
                [44.651144316,-63.786260171, 5.5],
                [45.751144316,-63.586260171, 10.5],
                [46.251144316,-63.586260171, 10.5],
                [46.751144316,-63.586260171, 10.5],
                [44.75, -63.5, 0.8] ];

            angular.extend($scope, {
                center: {
                    lat: 44.8091,
                    lng: -63.3636,
                    zoom: 2
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
    }])
;