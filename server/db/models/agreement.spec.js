/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Agreement = db.model('agreement')
const Service = db.model('service')
const User = db.model('user')

describe('Agreement model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('hooks: ', () => {
    let testServiceOne;
    let testServiceTwo;

      beforeEach(() => {

        const testUserAndServiceOne =  User.create({userName: 'Cody', email: 'cody@email.com', password: '123', accountAddress: null, isAdmin: false})
        .then(user => {
          console.log('testUserOne', user)
          return Service.create({
            name: 'bake cookies',
            description: '10 cookies',
            category: 'Food',
            userId: user.id
          })
          .then(service => {
            testServiceOne = service
            })
        })


        const testUserAndServiceTwo =  User.create({userName: 'Annabel', email: 'annabel@email.com', password: '1234', accountAddress: null, isAdmin: true})
        .then(user => {
          console.log('testUserTwo', user)
          return Service.create({
            name: 'mow lawn',
            description: '10 cookies',
            category: 'Home Maintenance',
            userId: user.id
          })
          .then(service => {
            testServiceTwo = service
            })
          })


        return Promise.all([testUserAndServiceOne, testUserAndServiceTwo])
          .then(() => {
            return Agreement.create({
              status: 'Initiated',
              RequestorId: 1,
              RequesteeId: 2,
              RequestorServiceId: 1,
              RequesteeServiceId: 2
            })
            .then(agreement => {
              console.log(testServiceOne, 'testServiceOne')
              console.log(testServiceTwo, 'testServiceTwo')
              console.log('agreement before update', agreement)
              return agreement.update({status: "Accepted"})
              console.log('agreement after update', agreement)
            })
        })
      })

      describe('the beforeUpdate agreement hook', () => {
        it('correctly updates related services', () => {
          console.log('testServiceOne in the test', testServiceOne)
          expect(testServiceOne.isAvailable).to.equal(false)
          expect(testServiceTwo.isAvailable).to.equal(false)
        })
      })
    })
  })
