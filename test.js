const chai = require('chai')
, assert = chai.assert
, expect = chai.expect
, should = chai.should()

describe('String', function() {
    let name = 'John'
    it('should be of type string', function() {
        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name,'string')
    })

    it('should contain John', function(){
        name.should.not.equals('Kate')
        name.should.equal('John')
        expect(name).to.equals('John')
        assert.equal(name,'John')
    })
})