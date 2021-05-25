const fetch = require('node-fetch');
const fs = require('fs').promises;
const postmanToOpenApi = require('postman-to-openapi')
const YAML = require('yamljs');
const {API_ENDPOINT, INPUT_FILE, OUTPUT_FILE} = require(
    './../config'
)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
setTimeout(createJSONFile, 21600)


async function createJSONFile() {
  try {
    const response = await fetch(API_ENDPOINT)
    const json = await response.json()
    await fs.writeFile(INPUT_FILE, JSON.stringify(json));
    console.log("The JSON file was saved!");
  } catch (error) {
    console.log(error);
  }

};

(async function createYAMLFile() {
    try {
        await postmanToOpenApi(INPUT_FILE,OUTPUT_FILE, { defaultTag: 'General' })
    } catch (error) {
        console.log(error)
    }
  })();
  
  const ymlfile = YAML.load(OUTPUT_FILE);
  
  module.exports = ymlfile