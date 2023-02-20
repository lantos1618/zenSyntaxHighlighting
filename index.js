// convert zen.tmLanguage.yaml to zen.tmLanguage.json

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const yamlFile = path.join("syntaxes", 'zen.tmLanguage.yaml');
const jsonFile = path.join("syntaxes", 'zen.tmLanguage.json');



// read YAML file
let doc = yaml.load(fs.readFileSync(yamlFile, 'utf8'));

// write JSON file
fs.writeFileSync(jsonFile, JSON.stringify(doc, null, 2));

console.log("new json written");