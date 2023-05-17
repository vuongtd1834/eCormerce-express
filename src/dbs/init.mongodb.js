'use strict';

const mongoose = require('mongoose');

// TODO: use env
const connectString = 'mongodb://localhost:27017/shopDEV';

class Database {
  constructor() {
    this.connect();
  }

  connect(type = 'mongodb') {
    // TODO: check env
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }

    mongoose
      .connect(connectString)
      .then(() => console.log(`Connected Mongodb success`))
      .catch((_err) => console.log(`Error Connect!`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDB = new Database();

module.exports = instanceMongoDB;
