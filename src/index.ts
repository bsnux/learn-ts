import fetch from 'node-fetch';
import commander from 'commander';

const version = '0.0.1';
const baseUrl = 'https://www.balldontlie.io/api/v1';

let pullUrl = `${baseUrl}/players`;

commander
  .version(version)
  .description('Listing NBA players')
  .option('-s, --search <term>', 'search');

commander.parse(process.argv);

if (commander.search) {
  pullUrl = `${pullUrl}?search=${commander.search}`;
}

fetch(pullUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })