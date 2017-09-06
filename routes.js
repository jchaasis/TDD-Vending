const machine = require('./machine');


function createRoutes(server){

  //get
    //customer gets a list of all the items
    server.get('/api/customer/items', function(req, res){
      res.send();
    });

    //vendor gets a list of all purchases with their item and date/time
    server.get('/api/vendor/purchases', function(req, res){
      res.send();
    });

    //vendor get a total amount of money accepted by the machine
    server.get('/api/vendor/money', function(req, res){
      res.send();
    });

  //post

    //vendor adds an item
    server.post('/api/vendor/items', function(req, res){
      res.send();
    });

    //customer purchases an items
    server.post('/api/customer/items/:item_id/purchases', function(req, res){
      res.send();
    });
    
  //put

    //vendor update an item quantity, description, and cost
    server.put('/api/vendor/items/:itemId', function(req, res){
      res.send();
    });



};

module.exports = createRoutes;
