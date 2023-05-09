import process from 'node:process';
import path from 'node:path';
import fs from 'fs-extra';

let files = [
	'codegen.ts',
	'graphql.schema.json',
	'schema.graphql',
	'src',
];

let labNumber = process.argv[2];

if (!labNumber) {
	console.error('No lab number passed, exiting');
	process.exit(1);
}

if (labNumber.length === 1) labNumber = '0' + labNumber;

let labFolder = `lab-${labNumber}`;
let labPath = path.resolve('../labs', 'starters', labFolder);
let mainPath = path.resolve('./');

// Back everything up
let backupDest = `./tmp/backup-${Date.now()}`;
fs.ensureDirSync(path.resolve(backupDest));

for (let file of files) {
	let src = path.resolve(`./${file}`);
	let dest = path.resolve(`${backupDest}/${file}`);
	fs.copySync(src, dest);
}

fs.copySync(labPath, mainPath);
