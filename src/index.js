const axios = require('axios');

const greet = name => 'Hello ' + name;

const users = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
  return res.data;
}

users()

module.exports = {
  users,
  greet
}