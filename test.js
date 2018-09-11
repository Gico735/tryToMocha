const Animator = require('./pure_function_for_tests/animtor')
const chai = require('chai');
const should = chai.should();




describe('Anime', () => {
  it('set new state for blockForTest', (done) => {

    const blockForTest = {
      className: 'block block_element'
    }
    const animator = new Animator(blockForTest)

    animator.set(0)
    blockForTest.className.should.be.a('string')
    animator.set(1)
    blockForTest.className[blockForTest.className.length - 1].should.equal('1')
    done()
  })
})