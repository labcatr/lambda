
import { persistentAtom } from '@nanostores/persistent';

function getOuterHtml(elements: HTMLElement[]): string {
	let result: string[] = [];
	for (const element of elements) {
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
		div.innerHTML = element;
		result.push(div.firstChild as HTMLElement);
	}
	return result;
}


export const $citationsMap = persistentAtom<HTMLElement[]>('citations', [], {
	encode: getOuterHtml,
	decode: parseCitations,
});