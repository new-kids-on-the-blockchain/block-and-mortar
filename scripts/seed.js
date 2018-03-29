const db = require('../server/db')
const {User, Service, Message, Thread} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({userName: 'karl', password: '123', accountAddress: '0xcbd14b623d49fd1cad0fa4a805f37b469526c5f6', isAdmin: false, imageURL: '/assets/avatars/avatars_0000_1-copy.png'}),
    User.create({userName: 'annabel', password: '123', accountAddress: '0xbddae5ebde94256d38ea339e0a7a928bcaf3c61e', isAdmin: true, imageURL: '/assets/avatars/avatars_0003_4-copy.png'}),
    User.create({userName: 'claudia', password: '123', accountAddress: '0x9ae54767568a1467585113f63a38aaf8f52492fe', isAdmin: true, imageURL: '/assets/avatars/avatars_0010_11-copy.png'}),
    User.create({userName: 'kait', password: '123', accountAddress: '0x3611e401197303a50972c62d9ac419fe77a3a28f', isAdmin: true, imageURL: '/assets/avatars/avatars_0013_14-copy.png'}),
    User.create({userName: 'anjali', password: '123', accountAddress: '0xc004b142988348ed21d35b80b2dd1e58a3da06e9', isAdmin: true, imageURL: '/assets/avatars/avatars_0011_12-copy.png'}),
    User.create({userName: 'rohit', password: '123', accountAddress: '0x9a5971b15bf5be750eda2a8db3660e0d510e7fc2', isAdmin: false, imageURL: '/assets/avatars/avatars_0012_13-copy.png'}),
    User.create({userName: 'esteban', password: '123', accountAddress: '0x2363935a4aa889c9d9f594c9a85fa680ead942ef', isAdmin: false, imageURL: '/assets/avatars/avatars_0009_10-copy.png'}),
    User.create({userName: 'irene', password: '123', accountAddress: '0x9fa899e5477a10f13206774d1e88cabafe747de7', isAdmin: false, imageURL: '/assets/avatars/avatars_0008_9-copy.png'}),
    User.create({userName: 'leigh', password: '123', accountAddress: '0x103bec78cd3679b723422369643a1e9474702c4a', isAdmin: false, imageURL: '/assets/avatars/avatars_0006_7-copy.png'}),
    User.create({userName: 'kate', password: '123', accountAddress: '0x4cbed4db7330ede5569ea2461304388cd88d697b', isAdmin: false, imageURL: '/assets/avatars/avatars_0004_5-copy.png'}),
    User.create({userName: 'jane', password: '123', accountAddress: '0x2cbed4db7330ede5569ea2461304388cd88d697b', isAdmin: false, imageURL: '/assets/avatars/avatars_0001_2-copy.png'})
  ])

  const services = await Promise.all([
    Service.create({name: 'Cleaning your car', description: 'I will polish your car any weekend!', category: 'Services', buyer: null, seller: 3, isAvailable: true, price: 0.08, status: 'Posted', imgUrl: '/assets/items/car_wash.png'}),
    Service.create({name: 'Babysitting', description: 'I am great with children, I can watch your kids for 3 hours', category: 'Services', buyer: null, seller: 6, isAvailable: true, price: 0.1, status: 'Posted', imgUrl: '/assets/items/babysitting.png'}),
    Service.create({name: 'Dog walking', description: 'I will walk your dog for 30 mins', category: 'Services', buyer: null, seller: 6,  isAvailable: true, price: 0.05, status: 'Posted', imgUrl: '/assets/items/dog_walking.png'}),
    Service.create({name: 'Fresh Jam', description: 'I can offer you 3 jars of homemade jams', category: 'Goods', buyer: null, seller: 7, isAvailable: true, price: 0.02, status: 'Posted', imgUrl: '/assets/items/jam.png'}),
    Service.create({name: 'Web Design', description: 'I can build your website', category: 'Services', buyer: 4, seller: 5, isAvailable: false, price: 0.9, status: 'Pending', imgUrl: '/assets/items/painting.png'}),
    Service.create({name: 'Basil', description: 'I grow fresh basil from my garden', category: 'Goods', buyer: 5, seller: 7, isAvailable: false, price: 0.05, status: 'Completed', imgUrl: '/assets/items/root_vegi.png'}),
    Service.create({name: 'Ironing', description: 'I can iron your clothes!', category: 'Services', buyer: null, seller: 7, isAvailable: true, price: 0.15, status: 'Posted', imgUrl: '/assets/items/iron.png'}),
    Service.create({name: 'Fixing roof', description: 'I am a professional at roof fixing! Great value!', category: 'Services', buyer: 6, seller: 8, isAvailable: false, price: 0.3, status: 'Pending', imgUrl: '/assets/items/service.png'}),
    Service.create({name: 'Cat sitting', description: 'I can watch your cat over a weekend, I have a veterinary degree.', category: 'Services', buyer: null, seller: 10, isAvailable: true, price: 0.15, status: 'Posted', imgUrl: '/assets/items/cat_sitting.png'}),
    Service.create({name: 'Root vegetables', description: 'Too many root vegetables in my garden. Let me know if you want to trade!', category: 'Goods', buyer: null, seller: 9, isAvailable: true, price: 0.05, status: 'Posted', imgUrl: '/assets/items/root_vegi.png'}),
    Service.create({name: 'Lamp', description: 'Moving to Cambridge and need to sell my mattress', category: 'Goods', buyer: null, seller: 2, isAvailable: true, price: 0.05, status: 'Posted', imgUrl: '/assets/items/lamp.png'}),
    Service.create({name: 'Financial advice', description: 'I am a financial advisor and would love to offer my services to my neighbors at a reduced rate', category: 'Services', buyer: null, seller: 1, isAvailable: true, price: 0.12, status: 'Posted', imgUrl: '/assets/items/service.png'}),
    Service.create({name: 'Lawn Mowing', description: 'On summer holiday and willing to do landscaping working', category: 'Services', buyer: null, seller: 9, isAvailable: true, price: 0.05, status: 'Posted', imgUrl: '/assets/items/lawn.png'}),
    Service.create({name: 'Mattress', description: 'Moving to Cambridge and need to sell my mattress', category: 'Goods', buyer: null, seller: 2, isAvailable: true, price: 0.5, status: 'Posted', imgUrl: '/assets/items/bed.png'}),
    Service.create({name: 'Record player and speaker system', description: '2 large speakers and one turntable available', category: 'Goods', buyer: null, seller: 4, isAvailable: true, price: 0.15, status: 'Posted', imgUrl: '/assets/items/record_player.png'}),
    Service.create({name: 'Burmese artwork', description: 'Moving to Cambridge and need to sell my artwork. Purchased in Myanmar', category: 'Goods', buyer: null, seller: 2, isAvailable: true, price: 0.05, status: 'Posted', imgUrl: '/assets/items/painting.png'}),
    Service.create({name: 'Portrait Painting', description: 'I\'m an artist! I can paint you a portrait of whatever you want.', category: 'Services', buyer: null, seller: 11, isAvailable: true, price: 0.9, status: 'Posted', imgUrl: '/assets/items/painting.png'}),
  ])

  const thread = await Promise.all([
    Thread.create({buyerId: 6, sellerId: 8, serviceId: 8 }),
    Thread.create({buyerId: 5, sellerId: 7, serviceId: 6 }),
  ])

const message = await Promise.all([
    Message.create({content: 'Hey! I am interested in this.', senderId: 6, threadId: 1}),
    Message.create({content: 'Hi, I\'m interested! Where are you based?', senderId: 8, threadId: 1}),
    Message.create({content: 'Hi!', senderId: 6, threadId: 1}),
    Message.create({content: 'Hello! Is this still available?', senderId: 5, threadId: 2}),
    Message.create({content: 'Hello!!', senderId: 7, threadId: 2}),
  ])

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${services.length} services`)
  console.log(`seeded ${thread.length} threads`)
  console.log(`seeded ${message.length} messages`)
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
