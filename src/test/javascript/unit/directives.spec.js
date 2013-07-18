'use strict';

describe("Library Directives Tests", function() {

  var element, scope;
  
  beforeEach(module('partials/navbar.html'));
  beforeEach(module('library.services'));
  beforeEach(module('library.directives'));
  
  beforeEach(inject(function($rootScope) {
    element = angular.element('<div data-navbar></div>');
    scope = $rootScope;
  }));
  
  it('should create navbar not logged in', inject(function($compile, userService) {
    
    spyOn(userService, 'isLoggedIn').andReturn(false);
    
    $compile(element)(scope);
    scope.$digest();
    
    expect(element.find('span.loggedIn').css('display')).toBe('none');
    expect(element.find('span.notLoggedIn').css('display')).not.toBe('none');
    
  }));
  
  it('should create navbar logged in', inject(function($compile, userService) {
    
    spyOn(userService, 'isLoggedIn').andReturn(true);
    spyOn(userService, 'getFullName').andReturn('Zaphod');
    spyOn(userService, 'isAdmin').andReturn(false);
    
    $compile(element)(scope);
    scope.$digest();
    
    expect(element.find('span.loggedIn').css('display')).not.toBe('none');
    expect(element.find('span.notLoggedIn').css('display')).toBe('none');
    expect(element.find('span.loggedIn a.login').html()).toBe('Zaphod');
    expect(element.find('span.loggedIn .createBook').css('display')).toBe('none');
    
  }));
  
  it('should create navbar logged in as admin', inject(function($compile, userService) {
    
    spyOn(userService, 'isLoggedIn').andReturn(true);
    spyOn(userService, 'getFullName').andReturn('Zaphod');
    spyOn(userService, 'isAdmin').andReturn(true);
    
    $compile(element)(scope);
    scope.$digest();
    
    expect(element.find('span.loggedIn .createBook').css('display')).not.toBe('none');
    
  }));
  
  
});

