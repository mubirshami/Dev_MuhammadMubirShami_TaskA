interface SearchResult {
	id: string;
	title: string;
	body: string;
	score: number;
}
export function generateSummary(results: SearchResult[]): string {
	if (results.length === 0) {
		return '';
	}

	const titles = results.map((r) => r.title);
	const snippets = results.map((r) => r.body.substring(0, 25) + '...');

	let summary = '';
	if (titles.length === 1) {
		summary = `The top result, \"${titles[0]}\", discusses: ${snippets[0]}`;
	} else if (titles.length === 2) {
		summary = `The top two results, \"${titles[0]}\" and \"${titles[1]}\", discuss: ${snippets[0]} Additionally, it covers: ${snippets[1]}`;
	} else {
		summary = `The top results, including \"${titles[0]}\", \"${titles[1]}\", and \"${titles[2]}\", discuss topics such as: ${snippets[0]} Further details include: ${snippets[1]} and also: ${snippets[2]}`;
	}

	return summary;
}
