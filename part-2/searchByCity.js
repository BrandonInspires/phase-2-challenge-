// `searchByCity.js` script prints the client `id`, `rep_name`, `company`, `city`, and `state` that for all clients whose `city` matches the provided `city` argument.

 const clients = require('./clients.json');
 const city = process.argv[2];
 let clientsInCity = clients.filter(function (item) {
       return (item.city.toLowerCase() == city.toLowerCase())
 });

 let outputArray = clientsInCity.map(function (element){
      return { "id": element.id, "rep_name": element.rep_name, "company": element.company, "city": element.city, "state": element.state }
 })

console.log (outputArray)