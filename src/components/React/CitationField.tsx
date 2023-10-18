import { useEffect, useState } from 'react';
import { $citationsMap } from '../../atoms/citationsMap';



function CitationField() {
	let [citations, setCitations] = useState<HTMLElement[]>([...$citationsMap.get()]);

	function handleStorageEvent() {
		const nextMap = [...$citationsMap.get()];
		setCitations(nextMap);
	}
	useEffect(() => {
		window.dispatchEvent(new Event('citation-field-updated'));
	}, [citations]);
	// Code to run on component mount
	useEffect(() => {
		setCitations([...$citationsMap.get()]);
		window.addEventListener('storage', handleStorageEvent);
		window.dispatchEvent(new Event('citation-field-mounted'));
	}, []);


	// NOTE: There is still a warning about duplicate keys. Not necessarily a problem, but should be fixed. Need to figure out a way to prevent duplicate citations.
	return (
		<>
			{
				citations.map((citation) =>
					<div key={citation.id} id={citation.id} className="article-citation flex flex-row items-center content-center my-1 even:bg-neutral py-1 px-3 rounded-md">
						<div className='citation-inner' dangerouslySetInnerHTML={{ __html: citation.innerHTML }}></div>
						<div className="flex flex-row items-center justify-center ml-4">
							<button
								data-for={citation.id}
								data-method="text"
								className="copy-button rounded-md h-6 bg-success hover:opacity-80 flex items-center justify-center content-center aspect-square mr-1"
							>
								<i className="ri-file-copy-2-line h-6 aspect-square block text-secondary-content"
								></i>
							</button>
							<button
								data-for={citation.id}
								data-method="markdown"
								className="copy-button rounded-md h-6 bg-primary hover:bg-primary-focus flex items-center justify-center content-center aspect-square mr-1"
							>
								<i className="ri-markdown-line h-6 aspect-square block text-secondary-content"
								></i>
							</button>
							<button
								className="delete-button rounded-md h-6 bg-warning hover:bg-error flex items-center justify-center content-center aspect-square"
								data-for={citation.id}
							>
								<i className="ri-close-circle-line text-warning-content h-6 aspect-square block"
								></i>
							</button>
						</div>
					</div>
				)
			}
		</>
	);
}

export default CitationField;;