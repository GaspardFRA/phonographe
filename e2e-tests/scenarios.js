'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toMatch("/home");
  });

  it('should render home page when user navigates to /home', function() {
    browser.get('index.html#!/home');
    expect(element(by.css('home')).isPresent()).toBe(true);
  });

  describe('createPhonograph', function() {

    beforeEach(function() {
      browser.get('index.html#!/create');
    });

    it('should render createPhonograph page when user navigates to /create', function() {
      expect(element(by.css('create-phonograph')).isPresent()).toBe(true);
    });

  });

  describe('joinPhonograph', function() {

    beforeEach(function() {
      browser.get('index.html#!/join');
    });

    it('should render joinPhonograph page when user navigates to /join', function() {
      expect(element(by.css('join-phonograph')).isPresent()).toBe(true);
    });

  });

  describe('phonograph', function() {

    beforeEach(function() {
      browser.get('index.html#!/someId');
    });

    it('should render Phonograph page when user navigates to /phonographId', function() {
      expect(element(by.css('phonograph')).isPresent()).toBe(true);
    });

  });
});
