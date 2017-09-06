const machine = require('./machine');

//tests TODO:  updateQuantity,

// //when we add an item it actually adds
// test('vendor can add a new item', function() {
//   return machine.addItem('pretzels', 75).then(function (newItem){
//     expect(newItem.description).toBe('pretzels');
//     expect(newItem.cost).toBe(75);
//     expect(newItem.quantity).toBe(15);
//   });
// });

//test to see if the list of items reflects the total number of items
//we know to be available
test('I get 2 item when I run viewAllItems()', function(){
  return machine.viewAllItems().then(function(items){
    expect(items.length).toBe(2);
  });
});

//find item by id
test('find an item by its id',  function(){
  return machine.findOneItem(1).then(function(item){
    expect(item.description).toBe('gum');
  });
});

//add a new purchase item
// test('new purchase added to the purchase table', function(){
//   return machine.addPurchase('pretzels', 75).then(function (newPurchase){
//       expect(newPurchase.description).toBe('pretzels');
//       expect(newPurchase.cost).toBe(75);
//   });
// });

//update quantity when a purchase is made
// test('decrease quantity by 1', function(){
//   return machine.updateQuantity(1).then(function(item){
//     expect(item.quantity).toBe(9);
//   });
// });
// test("multiplier", function () {
//   expect(multiplier(3, 5)).toBe(15);
// })

//find change
test('calculate change', function(){
  // expect(machine.findChange(100, 50)).toBe(50);
  return machine.findChange(100, 50).then(function(){
    expect(change).toBe(50);
  });
});
