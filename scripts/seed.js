const db = require('../server/db')
const {User, Service, Message} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({userName: 'karl', email: 'karl@email.com', password: '123', accountAddress: '0xcbd14b623d49fd1cad0fa4a805f37b469526c5f6', isAdmin: false, imageURL: '/assets/avatars/avatars_0000_1-copy.png'}),
    User.create({userName: 'annabel', email: 'annabel@email.com', password: '123', accountAddress: '0xbddae5ebde94256d38ea339e0a7a928bcaf3c61e', isAdmin: true, imageURL: '/assets/avatars/avatars_0003_4-copy.png'}),
    User.create({userName: 'claudia', email: 'claudia@email.com', password: '123', accountAddress: '0x9ae54767568a1467585113f63a38aaf8f52492fe', isAdmin: true, imageURL: '/assets/avatars/avatars_0010_11-copy.png'}),
    User.create({userName: 'kait', email: 'kait@email.com', password: '123', accountAddress: '0x3611e401197303a50972c62d9ac419fe77a3a28f', isAdmin: true, imageURL: '/assets/avatars/avatars_0013_14-copy.png'}),
    User.create({userName: 'anjali', email: 'anjali@email.com', password: '123', accountAddress: '0xc004b142988348ed21d35b80b2dd1e58a3da06e9', isAdmin: true, imageURL: '/assets/avatars/avatars_0011_12-copy.png'}),
    User.create({userName: 'rohit', email: 'rohit@email.com', password: '123', accountAddress: '0x9a5971b15bf5be750eda2a8db3660e0d510e7fc2', isAdmin: false, imageURL: '/assets/avatars/avatars_0012_13-copy.png'}),
    User.create({userName: 'esteban', email: 'este@email.com', password: '123', accountAddress: '0x2363935a4aa889c9d9f594c9a85fa680ead942ef', isAdmin: false, imageURL: '/assets/avatars/avatars_0009_10-copy.png'}),
    User.create({userName: 'irene', email: 'bob@email.com', password: '123', accountAddress: '0x9fa899e5477a10f13206774d1e88cabafe747de7', isAdmin: false, imageURL: '/assets/avatars/avatars_0008_9-copy.png'}),
    User.create({userName: 'leigh', email: 'leigh@email.com', password: '123', accountAddress: '0x103bec78cd3679b723422369643a1e9474702c4a', isAdmin: false, imageURL: '/assets/avatars/avatars_0006_7-copy.png'}),
    User.create({userName: 'kate', email: 'kate@gmail.com', password: '123', accountAddress: '0x4cbed4db7330ede5569ea2461304388cd88d697b', isAdmin: false, imageURL: '/assets/avatars/avatars_0004_5-copy.png'})
  ])

  const services = await Promise.all([
    Service.create({name: 'Cleaning your car', description: 'I will polish your car any weekend!', category: 'Services', buyer: null, seller: 6, isAvailable: true, price: 0.08, status: 'Posted', imgUrl: 'https://png.pngtree.com/element_origin_min_pic/16/07/04/115779d386cea55.jpg'}),
    Service.create({name: 'Babysitting', description: 'I am great with children, I can watch your kids for 3 hours', category: 'Services', buyer: null, seller: 6, isAvailable: true, price: 0.1, status: 'Posted', imgUrl: 'http://clipground.com/images/crib-clipart-2.png'}),
    Service.create({name: 'Dog walking', description: 'I will walk your dog for 30 mins', category: 'Services', buyer: null, seller: 6,  isAvailable: true, price: 0.05, status: 'Posted', imgUrl: 'https://rlv.zcache.com/miniature_schnauzer_dog_cartoon_postcard-r7bf8673c5fd3442a878de0df645898f8_vgbaq_8byvr_324.jpg'}),
    Service.create({name: 'Fresh Jam', description: 'I can offer you 3 jars of homemade jams', category: 'Goods', buyer: null, seller: 7, isAvailable: true, price: 0.02, status: 'Posted', imgUrl: 'http://moziru.com/images/drawn-jam-cartoon-10.jpg'}),
    Service.create({name: 'Web Design', description: 'I can build your website', category: 'Services', buyer: 4, seller: 7,isAvailable: false, price: 0.9, status: 'Pending', imgUrl: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=48512695'}),
    Service.create({name: 'Basil', description: 'I grow fresh basil from my garden', category: 'Goods', buyer: 5, seller: 7, isAvailable: false, price: 0.05, status: 'Completed', imgUrl: 'http://www.clker.com/cliparts/U/G/e/U/g/K/plant-in-pot.svg'}),
    Service.create({name: 'Ironing', description: 'I can iron your clothes!', category: 'Services', buyer: null, seller: 7, isAvailable: true, price: 0.15, status: 'Posted', imgUrl: 'https://png.pngtree.com/element_origin_min_pic/17/08/17/2815fc0230aedc29e33e9f5eb3e646dd.jpg'}),
    Service.create({name: 'Fixing roof', description: 'I am a professional at roof fixing! Great value!', category: 'Services', buyer: 6, seller: 8, isAvailable: false, price: 0.3, status: 'Pending', imgUrl: 'http://www.clker.com/cliparts/6/1/6/6/1333483035815281949My%20House%20Cartoon.svg.hi.png'}),
    Service.create({name: 'Cat sitting', description: 'I can watch your cat over a weekend, I have a veterinary degree.', category: 'Services', buyer: null, seller: 10, isAvailable: true, price: 0.15, status: 'Posted', imgUrl: 'http://www.animalclipart.net/animal_clipart_images/sleepy_cartoon_cat_0515-1004-0101-1102_SMU.jpg'}),
    Service.create({name: 'Root vegetables', description: 'Too many root vegetables in my garden. Let me know if you want to trade!', category: 'Goods', buyer: null, seller: 9, isAvailable: true, price: 0.05, status: 'Posted', imgUrl: 'http://www.clker.com/cliparts/U/G/e/U/g/K/plant-in-pot.svg'}),
    Service.create({name: 'Lamp', description: 'Moving to Cambridge and need to sell my mattress', category: 'Goods', buyer: null, seller: 2, isAvailable: true, price: 0.05, status: 'Posted', imgUrl: 'https://orig00.deviantart.net/4a9b/f/2015/005/9/1/walfas_custom_prop__oil_lamp_by_jtd786-d8cql0j.png'}),
    Service.create({name: 'Financial advice', description: 'I am a financial advisor and would love to offer my services to my neighbors at a reduced rate', category: 'Services', buyer: null, seller: 1, isAvailable: true, price: 0.12, status: 'Posted', imgUrl: 'http://www.galswithgoals.com/wp-content/uploads/2015/09/stock-market-cartoon.jpg'}),
    Service.create({name: 'Lawn Mowing', description: 'On summer holiday and willing to do landscaping working', category: 'Services', buyer: null, seller: 9, isAvailable: true, price: 0.05, status: 'Posted', imgUrl: 'https://png.pngtree.com/element_pic/00/16/10/1257fe0a7489893.jpg'}),
    Service.create({name: 'Mattress', description: 'Moving to Cambridge and need to sell my mattress', category: 'Goods', buyer: null, seller: 2, isAvailable: true, price: 0.5, status: 'Posted', imgUrl: 'https://media.istockphoto.com/illustrations/mattress-illustration-id165962190'}),
    Service.create({name: 'Record player and speaker system', description: '2 large speakers and one turntable available', category: 'Goods', buyer: null, seller: 4, isAvailable: true, price: 0.15, status: 'Posted', imgUrl: 'http://www.clker.com/cliparts/A/V/K/f/p/4/record-player-hi.png'}),
    Service.create({name: 'Burmese artwork', description: 'Moving to Cambridge and need to sell my artwork. Purchased in Myanmar', category: 'Goods', buyer: null, seller: 2, isAvailable: true, price: 0.05, status: 'Posted', imgUrl: 'http://www.craftsy.com/blog/wp-content/uploads/2013/08/nrushdry01-copy.jpg'})
  ])

const message = await Promise.all([
    Message.create({subject: 'message1', content: 'messsage1 content', sender: 1, recipient: 2}),
    Message.create({subject: 'message2', content: 'messsage2 content', sender: 2, recipient: 1}),
    Message.create({subject: 'message3', content: 'messsage3 content', sender: 1, recipient: 2}),
    Message.create({subject: 'message4', content: 'messsage4 content', sender: 2, recipient: 3}),
    Message.create({subject: 'message5', content: 'messsage5 content', sender: 3, recipient: 2})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${services.length} services`)
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

