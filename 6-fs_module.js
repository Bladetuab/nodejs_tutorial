const {readFileSync, writeFileSync} = require('fs');


const first = readFileSync('./content/subfolder/file.txt','utf-8');
const second = readFileSync('./content/subfolder/file1.txt','utf-8');

//copy from first to second

writeFileSync('./content/subfolder/results_Sync.txt',`The first program said: ${first}, ${second}`);
