'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {


  it('should automatically redirect to /home when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toMatch("/home");
  });

  it('should render home page when user navigates to /home', function () {
    browser.get('index.html#!/home');
    expect(element(by.css('home')).isPresent()).toBe(true);
  });

  describe('createPhonograph', function () {

    beforeEach(function () {
      browser.get('index.html#!/create');
    });

    it('should render createPhonograph page when user navigates to /create', function () {
      expect(element(by.css('create-phonograph')).isPresent()).toBe(true);
    });

  });

  describe('joinPhonograph', function () {
    var queryField;
    var submitButton;

    beforeEach(function () {
      browser.get('index.html#!/join');
      queryField = element(by.model('$ctrl.phonographId'));
      submitButton = element(by.id('submit'));
    });

    it('should render joinPhonograph page when user navigates to /join', function () {
      expect(element(by.css('join-phonograph')).isPresent()).toBe(true);
    });

    it('should redirect to phonograph123 page when user enter id and submit', function () {
      queryField.sendKeys('123');
      submitButton.click();
      expect(expect(element(by.css('phonograph')).isPresent()).toBe(true));
    });

  });

  describe('phonograph', function () {

    beforeEach(function () {
      browser.get('index.html#!/phonographs/123');
    });

    it('should render Phonograph page when user navigates to /phonographId', function () {
      expect(element(by.css('phonograph')).isPresent()).toBe(true);
    });

  });
});
