// `searchByCompany.js` script prints the client  `id`, `phone`, and `company` for all clients whose `company` starts with the provided `company` argument.

 const clients = require('./clients.json');
 const company = process.argv[2];
 const clientsFromCompany = clients.filter(function (item) {
       return (item.company.toLowerCase().startsWith(company.toLowerCase()))
 });

 let outputArray = clientsFromCompany.map(function (element){
      return { "id": element.id, "company": element.company, "phone": element.phone,  }
 })

console.log ('Finding companies with name "' + company + '"...')
console.log (outputArray)