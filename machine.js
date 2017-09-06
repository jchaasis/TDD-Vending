//page location for all functions related to the vending machine
//including database interactions.
const Sequelize = require('sequelize');

const db = new Sequelize('vending', 'christianhaasis', '', {
    dialect: 'postgres',
});

const Item = db.define('item', {
    description: Sequelize.STRING,
    cost: Sequelize.INTEGER, //in cents
    quantity: Sequelize.INTEGER,
});

Item.sync();

const Purchase = db.define('purchase', {
    description: Sequelize.STRING,
    cost: Sequelize.INTEGER, //in cents
});

Purchase.sync();

//functions

  //pull up a list of the items
  function viewAllItems() {
    return Item.findAll();
  }

  function findOneItem(id){
    return Item.findById(id)
  }

  //add a new item
  function addItem(desc, cost) {
      return Item.create({
          description: desc,
          cost: cost,
          quantity: 15,
      });
  }

  //customer purchases an item
  function updateQuantity(item_id){
    let newQuantity;

    findOneItem(item_id).then( function(singleItem){
      console.log(singleItem.quantity);
       newQuantity = singleItem.quantity - 1;
      console.log(newQuantity);
    }).then(function(){
      Item.update({
        quantity: newQuantity,
      }, {
        where: {
          id: item_id,
        }
      }).then(function (item){
        console.log(newQuantity);
        return;
      })

      })
    }

    // let newQuantity = Item.quantity - 1;
    // console.log(Item.quantity);
    // return Item.update({
    //   quantity: 13,
    //   }, {
    //           where: {
    //             id: item_id,
    //           }
    //       })

          //
          // Item.update({
          //   quantity: Item.quantity - 1,
          // }, {
          //   where: {
          //     id: item_id,
          //   }
          // }).then(function (item){
          //   console.log(item.quantity);
          //   return;
          // })

  // }

  function addPurchase(desc, cost){
      return Purchase.create({
        description: desc, //req.body.description??
        cost: cost,        //req.body.cost??
      });
  }

  function findChange(cash, cost) {
    let change = cash - cost;
    return change;

  }

  function purchaseItem(cash, item_id){
    //we need to check the cash input with the cost of the item
    //we need to update the item quantity

  }


module.exports = {

  addItem: addItem,
  viewAllItems: viewAllItems,
  findOneItem: findOneItem,
  updateQuantity: updateQuantity,
  addPurchase: addPurchase,
  findChange: findChange,

};
