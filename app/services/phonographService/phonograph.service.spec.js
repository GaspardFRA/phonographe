'use strict';

describe('phonographService', function () {
    var httpBackend;
    var PhonographFactory;

    var phonographs = [
        {
            id: '1',
            name: 'Test 1',
            songs: []
        },
        {
            id: '2',
            name: 'Test 2',
            songs: [
                { name: 'Song1', author: 'Author1' },
                { name: 'Song2', author: 'Author2' },
                { name: 'Song3', author: 'Author3' }
            ]
        },
        {
            id: '3',
            name: 'Test 3',
            songs: [
                { name: 'Song1', author: 'Author1' }
            ]
        }
    ];

    beforeEach(module('phonographService'));

    beforeEach(inject(function (_PhonographService_, _$httpBackend_) {
        httpBackend = _$httpBackend_;
        PhonographFactory = _PhonographService_;
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the phonographs data from `/phonographs`', function () {
        httpBackend.expectGET('/phonographs').respond(phonographs);
        var phonographsQuery = PhonographFactory.query();

        httpBackend.flush();
        phonographsQuery.then(response => {
            expect(response.data).toEqual(phonographs);
        });
    });

    it('should fetch the phonograph1 data from `/phonographs/1`', function () {
        httpBackend.expectGET('/phonographs/1').respond(phonographs[0]);
        var phonographsQuery = PhonographFactory.get('1');

        httpBackend.flush();
        phonographsQuery.then(response => {
            expect(response.data).toEqual(phonographs[0]);
        });
    });
});