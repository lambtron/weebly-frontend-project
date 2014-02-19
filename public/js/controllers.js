'use strict';

weeblyApp.controller('mainController',
  ['$scope', '$http',
	function ($scope, $http)
{
  // Global state variable.
  var state = $scope.state = {
    pages: [],
    elements: [],
    siteGridOn: false,
    newPageTitle: '',
    selectedPage: {},
    addPage: function addPage () {
      if (this.newPageTitle === '')
        this.newPageTitle = 'Page';
      var newPage = new Page(this.newPageTitle);
      this.pages.push(newPage);
      this.newPageTitle = '';
      this.selectedPage = newPage;
    },
    deletePage: function deletePage (index) {
      this.pages.splice(index, 1);
    },
    selectPage: function selectPage (page) {
      this.selectedPage = page;
    },
    toggleSiteGrid: function toggleSiteGrid () {
      this.siteGridOn = !this.siteGridOn;
    }
  };

  // Page object.
  function Page (title) {
    this.title = title;
    this.elements = [];
    this.editTitle = function editTitle (title) {
      this.title = title;
    };
    this.addElement = function addElement (type) {
      var newElement = new Element(type);
      this.elements.push(newElement);
    };
    this.deleteElement = function deleteElement (id) {

    };
  }

  // Element object.
  function Element (type, location, size) {
    this.type = type;
    this.location = location; // location = {x: 0, y: 0}
    this.size = size;         // size = {x: 0, y: 0}
  }

  function initializePage () {
    var titleElement = new Element('title')
      , textElement = new Element('text')
      , imageElement = new Element('image')
      , navElement = new Element('nav');
    state.elements.push(titleElement, textElement, imageElement, navElement);
  }

  initializePage();
  state.addPage();
  state.pages[0].addElement('image')
  state.addPage();
}]);