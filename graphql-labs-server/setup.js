import process from 'node:process';
import path from 'node:path';
import fs from 'fs-extra';

let labNumber = process.argv[2];

if (!labNumber) {
	console.error('No lab number passed, exiting');
	process.exit(1);
}

if (labNumber.length === 1) labNumber = '0' + labNumber;

let labFolder = `lab-${labNumber}`;
let labPath = path.resolve('../labs', 'starters', labFolder);
let mainPath = path.resolve('./');

fs.copySync(labPath, mainPath);
