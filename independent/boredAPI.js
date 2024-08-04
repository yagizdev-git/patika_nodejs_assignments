const axios = require('axios');

async function getActivity() {
  try {
    let response = await axios.get('https://bored-api.appbrewery.com/random');
    console.log("\n");
    console.log(`Are you bored? You could ${(response.data.activity).toLowerCase()}.`);
    console.log("\n");
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

getActivity();