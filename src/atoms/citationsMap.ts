import crypto from 'crypto';
import { persistentAtom } from '@nanostores/persistent';
import sanitizeHtml from 'sanitize-html';
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

// TODO: Make an api to get a key for this, and store it in a server side nanostore.
// NOTE: Consider using server-storage for all of the citations for every user, as it is just text. 
// However, using the cryptography algorithm allows me to use the localStorage, which is better for performance.

// const key = crypto.scryptSync("12340918234720398474774234987", 'GfG', 24);
// const iv = Buffer.alloc(16, 0);
// const algorithm = 'aes-256-cbc';

function getOuterHtml(elements: HTMLElement[]): string {
	let result: string[] = [];
	// let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
	for (const element of elements) {
		if (element == null) continue;
		result.push(element.outerHTML);
	}
	// return cipher.update(JSON.stringify(result)).toString('hex');
	return JSON.stringify(result);
}

function parseCitations(value: string): HTMLElement[] {
	if (value.length === 0) {
		console.log(value);
		return [];
	}
	// let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);

	// value = decipher.update(value, 'hex', 'utf8') + decipher.final('utf8');

	let result: HTMLElement[] = [];
	const elements = JSON.parse(value);
	for (const element of elements) {
		const div = document.createElement('div');
		div.innerHTML = sanitizeHtml(element);
		result.push(div.firstChild as HTMLElement);
	}
	return result;
}


export const $citationsMap = persistentAtom<HTMLElement[]>('citations', [], {
	encode: getOuterHtml,
	decode: parseCitations,
});