const connection = require("./database/crudrepository.js");

const main = () => {
  connection.connect();

  let result = connection.findAll((err, locations) => {
    if (err) {
      console.log(err);
    } else {
      console.log(locations);
    }
  });

  connection.close();
};

main();
