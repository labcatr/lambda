import { persistentAtom } from '@nanostores/persistent';
import sanitizeHtml from 'sanitize-html';

function getOuterHtml(elements: HTMLElement[]): string {
	let result: string[] = [];
	for (const element of elements) {
		if (element == null) continue;
		result.push(element.outerHTML);
	}

	return JSON.stringify(result);
}

function parseCitations(value: string): HTMLElement[] {
	if (value.length === 0) {
		console.log(value);
		return [];
	}

	let result: HTMLElement[] = [];
	const elements = JSON.parse(value);
	for (const element of elements) {
		const div = document.createElement('div');
		// div.innerHTML = sanitizeHtml(element);
		div.innerHTML = sanitizeHtml(element, {
			allowedAttributes: { div: ["class", "id", "data-*"] }
		});
		result.push(div.firstChild as HTMLElement);
	}

	return result;
}


export const $citationsMap = persistentAtom<HTMLElement[]>('citations', [], {
	encode: getOuterHtml,
	decode: parseCitations,
});