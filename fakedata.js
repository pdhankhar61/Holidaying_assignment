const faker = require('faker');
const fs = require('fs')

function generateUsers() {

    let restaurants = [];

    for (let id = 1; id <= 100; id++) {
        let image = faker.image.food();
        let productName = faker.commerce.productName();
        let description = faker.commerce.productDescription();
        let rating = faker.random.number(5);

        restaurants.push({
            "id": id,
            "image": image,
            "name": productName,
            "description": description,
            "rating": rating
        });
    }

    return { "data": restaurants }
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));