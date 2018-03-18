const db = require('../server/db')
const {User, Service, Agreement} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({userName: 'Cody', email: 'cody@email.com', password: '123', accountAddress: null, isAdmin: false}),
    User.create({userName: 'Annabel', email: 'annabel@email.com', password: '1234', accountAddress: null, isAdmin: true}),
    User.create({userName: 'Claudia', email: 'claudia@email.com', password: '345', accountAddress: null, isAdmin: true}),
    User.create({userName: 'Kait', email: 'kait@email.com', password: '432', accountAddress: null, isAdmin: true}),
    User.create({userName: 'Anjali', email: 'anjali@email.com', password: '654', accountAddress: null, isAdmin: true}),
    User.create({userName: 'Bob', email: 'bob@email.com', password: '1111', accountAddress: null, isAdmin: false})
  ])

  const services = await Promise.all([
    Service.create({name: 'Cleaning your car', description: 'I will polish your car any weekend!', categories: 'Misc', userId: 1}),
    Service.create({name: 'Babysitting', description: 'I am great with children, I can watch your kids for 3 hours', categories: 'Childcare', userId: 2}),
    Service.create({name: 'Dog walking', description: 'I will walk your dog for 30 mins', categories: 'Pet', userId: 3}),
    Service.create({name: 'Fresh Jam', description: 'I can offer you 3 jars of homemade jams', categories: 'Food', userId: 4}),
    Service.create({name: 'Web Design', description: 'I can build your website', categories: 'Professional', userId: 5}),
    Service.create({name: 'Basil', description: 'I grow fresh basil from my garden', categories: 'Misc', userId: 6}),
    Service.create({name: 'Hard drive', description: 'I have a full hard drive with lots of movies!', categories: 'Products', userId: 1}),
    Service.create({name: 'Fixing roof', description: 'I am a professional at roof fixing! Great value!', categories: 'Home Maintenance', userId: 2}),
    Service.create({name: 'Cat sitting', description: 'I can watch your cat over a weekend, I have a veterinary degree.', categories: 'Pet', userId: 3})
  ])


  const agreement = await Promise.all([
    Agreement.create({agreementId: null, status: 'Initiated', RequestorId: 1, RequesteeId: 2, RequestorServiceId: null, RequesteeServiceId: 8}),
    Agreement.create({agreementId: '000fsdfhekjh32345', status: 'Accepted', RequestorId: 1, RequesteeId: 3, RequestorServiceId: 1, RequesteeServiceId: 3}),
    Agreement.create({agreementId: '00645gdfheu536ggd', status: 'Completed',RequestorId: 4, RequesteeId: 6, RequestorServiceId: 4, RequesteeServiceId: 6}),
    Agreement.create({agreementId: null, status: 'Rejected', RequestorId: 2, RequesteeId: 6, RequestorServiceId: 4, RequesteeServiceId: 6})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${services.length} services`)
  console.log(`seeded ${agreement.length} agreements`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')

