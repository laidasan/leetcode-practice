const chai = require('chai');
const expect = chai.expect;

const $threesum = require('../threesum').threesum;
const $nums = require('../threesum').testary;
const $nums_2 = require('../threesum').testary_2;
const $nums_3 = require('../threesum').testary_3;
describe('testing threesum.js',() => {
    it('test threesum.js result need an Array',() => {
        expect($threesum($nums) instanceof Array).to.equal(true);
    })
    it('test threesum..js result-ary,ary numbers sum need === 0',() => {
        let result = false;
        result = $threesum($nums).every((resultNums) => {
            let sum = resultNums.reduce((sum,num) => {
                return sum + num;
            })
            return sum === 0
        })
        expect(result).to.equal(true);
    })
    it('test threesum.js result length === 1',() => {
        expect($threesum($nums_2).length).to.equal(1);
    })
})