import { NextResponse } from 'next/server';
import data from '../../../../data/data.json';
export async function POST(req: Request) {
	const { query } = await req.json();
	const value = query.toLowerCase().split(' ');
	if (value.length === 0 || !query) {
		return NextResponse.json({ message: 'No query provided', results: [] }, { status: 400 });
	}
	const scoredData = data.map((item) => {
		let score = 0;
		const title = item.title.toLowerCase();
		const content = item.body.toLowerCase();

		value.forEach((word: string) => {
			if (title.includes(word)) {
				score += 10;
			}
			if (content.includes(word)) {
				score += 5;
			}
		});

		return { ...item, score };
	});
	scoredData.sort((a, b) => b.score - a.score);
	const results = scoredData.filter((field) => field.score > 0).slice(0, 3);
	if (results.length === 0) {
		return NextResponse.json({ message: 'No results found', results: [] });
	}
	return NextResponse.json({ mesaage: 'Results Found', results });
}
