const faker = require("faker");

function genData() {
  const authors = [];
  for (let i = 0; i < 100; i++) {
    const books = [];

    for (let k = 0; k < 20; k++) {
      books.push({
        id: faker.random.uuid(),
        name: faker.internet.domainName(),
        numPages: faker.random.number()
      });
    }

    authors.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      company: faker.company.bs(),
      books
    });
  }

  return authors;
}

module.exports.data = genData();
