var client = require('./client.js').client,
    expect = require('chai').expect;

describe('Test http://www.ranjan.net.adoptapet.com/', function(){
    before(function(done) {
        client.init().url('http://www.ranjan.net.adoptapet.com/', done);
    });

    describe('Check homepage', function(){
        it('should see the correct title', function(done) {
            client.getTitle(function(err, title){
                var checkTitle = 'Pet Adoption - Search dogs or cats near you. Adopt a Pet Today. Pictures of dogs and cats who need a home. Search by breed, age, size and color. Adopt a dog, Adopt a cat.';
                expect(title).to.have.string(checkTitle);
                done();
            });
        });
    });

    after(function(done) {
        client.end();
        done();
    });
});
