const db = require('../server/db')
const {User, Service, Agreement} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({userName: 'karl', email: 'karl@email.com', password: '123', accountAddress: '0xcbd14b623d49fd1cad0fa4a805f37b469526c5f6', isAdmin: false}),
    User.create({userName: 'annabel', email: 'annabel@email.com', password: '123', accountAddress: '0xbddae5ebde94256d38ea339e0a7a928bcaf3c61e', isAdmin: true}),
    User.create({userName: 'claudia', email: 'claudia@email.com', password: '123', accountAddress: '0x9ae54767568a1467585113f63a38aaf8f52492fe', isAdmin: true}),
    User.create({userName: 'kait', email: 'kait@email.com', password: '123', accountAddress: '0x3611e401197303a50972c62d9ac419fe77a3a28f', isAdmin: true}),
    User.create({userName: 'anjali', email: 'anjali@email.com', password: '123', accountAddress: '0xc004b142988348ed21d35b80b2dd1e58a3da06e9', isAdmin: true}),
    User.create({userName: 'rohit', email: 'rohit@email.com', password: '123', accountAddress: '0x9a5971b15bf5be750eda2a8db3660e0d510e7fc2', isAdmin: false}),
    User.create({userName: 'esteban', email: 'este@email.com', password: '123', accountAddress: '0x2363935a4aa889c9d9f594c9a85fa680ead942ef', isAdmin: false}),
    User.create({userName: 'irene', email: 'bob@email.com', password: '123', accountAddress: '0x9fa899e5477a10f13206774d1e88cabafe747de7', isAdmin: false}),
    User.create({userName: 'leigh', email: 'leigh@email.com', password: '123', accountAddress: '0x103bec78cd3679b723422369643a1e9474702c4a', isAdmin: false}),
    User.create({userName: 'kate', email: 'kate@gmail.com', password: '123', accountAddress: '0x4cbed4db7330ede5569ea2461304388cd88d697b', isAdmin: false})
  ])

  const services = await Promise.all([
    Service.create({name: 'Cleaning your car', description: 'I will polish your car any weekend!', category: 'Misc', BuyerId: null, SellerId: 6, isAvailable: true, price: 0.08, status: 'Posted', imgUrl: 'https://png.pngtree.com/element_origin_min_pic/16/07/04/115779d386cea55.jpg'}),
    Service.create({name: 'Babysitting', description: 'I am great with children, I can watch your kids for 3 hours', category: 'Childcare', BuyerId: null, SellerId: 6, isAvailable: true, price: 0.1, status: 'Posted', imgUrl: 'http://clipground.com/images/crib-clipart-2.png'}),
    Service.create({name: 'Dog walking', description: 'I will walk your dog for 30 mins', category: 'Pet', BuyerId: null, SellerId: 6,  isAvailable: true, price: 0.05, status: 'Posted', imgUrl: 'https://rlv.zcache.com/miniature_schnauzer_dog_cartoon_postcard-r7bf8673c5fd3442a878de0df645898f8_vgbaq_8byvr_324.jpg'}),
    Service.create({name: 'Fresh Jam', description: 'I can offer you 3 jars of homemade jams', category: 'Food', BuyerId: null, SellerId: 7, isAvailable: true, price: 0.02, status: 'Posted', imgUrl: 'http://moziru.com/images/drawn-jam-cartoon-10.jpg'}),
    Service.create({name: 'Web Design', description: 'I can build your website', category: 'Professional', BuyerId: 4, SellerId: 7,isAvailable: false, price: 0.9, status: 'Pending', imgUrl: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=48512695'}),
    Service.create({name: 'Basil', description: 'I grow fresh basil from my garden', category: 'Food', BuyerId: 5, SellerId: 7, isAvailable: false, price: 0.05, status: 'Completed', imgUrl: 'http://www.clker.com/cliparts/U/G/e/U/g/K/plant-in-pot.svg'}),
    Service.create({name: 'Ironing', description: 'I can iron your clothes!', category: 'Misc', BuyerId: null, SellerId: 7, isAvailable: true, price: 0.15, status: 'Posted', imgUrl: 'https://png.pngtree.com/element_origin_min_pic/17/08/17/2815fc0230aedc29e33e9f5eb3e646dd.jpg'}),
    Service.create({name: 'Fixing roof', description: 'I am a professional at roof fixing! Great value!', category: 'Home Maintenance', BuyerId: 6, SellerId: 8, isAvailable: false, price: 0.3, status: 'Pending', imgUrl: 'http://www.clker.com/cliparts/6/1/6/6/1333483035815281949My%20House%20Cartoon.svg.hi.png'}),
    Service.create({name: 'Cat sitting', description: 'I can watch your cat over a weekend, I have a veterinary degree.', category: 'Pet', BuyerId: null, SellerId: 10, isAvailable: true, price: 0.15, status: 'Posted', imgUrl: 'http://www.animalclipart.net/animal_clipart_images/sleepy_cartoon_cat_0515-1004-0101-1102_SMU.jpg'}),
    Service.create({name: 'Root vegetables', description: 'Too many root vegetables in my garden. Let me know if you want to trade!', category: 'Food', BuyerId: null, SellerId: 9, isAvailable: true, price: 0.05, status: 'Posted', imgUrl: 'http://www.clker.com/cliparts/U/G/e/U/g/K/plant-in-pot.svg'})
  ])

  // const agreement = await Promise.all([
  //   Agreement.create({agreementId: null, status: 'Initiated', BuyerId: 1, SellerId: 2, ServiceId: 2}),
  //   Agreement.create({agreementId: '000fsdfhekjh32345', status: 'Initiated', BuyerId: 1, SellerId: 4, ServiceId: 4}),
  //   Agreement.create({agreementId: '00645gdfheu536ggd', status: 'Initiated', BuyerId: 4, SellerId: 5, ServiceId: 5}),
  //   Agreement.create({agreementId: null, status: 'Initiated', BuyerId: 2, SellerId: 6, ServiceId: 6}),
  //   Agreement.create({agreementId: null, status: 'Initiated', BuyerId: 3, SellerId: 1, ServiceId: 7}),
  //   Agreement.create({agreementId: null, status: 'Initiated', BuyerId: 3, SellerId: 2, ServiceId: 8})
  // ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${services.length} services`)
  // console.log(`seeded ${agreement.length} agreements`)
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

