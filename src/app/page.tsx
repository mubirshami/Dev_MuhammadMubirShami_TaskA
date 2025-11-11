'use client';

import { useState } from 'react';
import { searchPosts } from '../../services/search';
import { generateSummary } from '../utils/generateSummary';

interface SearchResult {
	id: string;
	title: string;
	body: string;
	score: number;
}

export default function Page() {
	const [input, setInput] = useState('');
	const [results, setResults] = useState<SearchResult[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [summary, setSummary] = useState<string | null>(null);

	const handleSearch = async () => {
		if (!input.trim()) {
			setError('Please enter a query to search.');
			setResults([]);
			setSummary(null);
			return;
		}

		setLoading(true);
		setError(null);
		setResults([]);
		setSummary(null);

		try {
			const data = await searchPosts(input);
			setResults(data.results || []);
			if (data.results && data.results.length > 0) {
				setSummary(generateSummary(data.results));
			} else {
				setError('No results found for your query. Please try a different query.');
			}
		} catch (err: unknown) {
			if (err instanceof Error && err.message.includes('400')) {
				setError('Bad request: Please provide a valid search query. Please try a different query.');
			} else {
				setError('An unexpected error occurred. Please try again.');
			}
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	const handleClear = () => {
		setInput('');
		setResults([]);
		setSummary(null);
		setError(null);
		setLoading(false);
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
			<div className="w-full max-w-2xl bg-white rounded-lg p-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Search</h1>

				<div className="flex mb-6 space-x-2">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Search for faqs..."
						className="grow p-3 border border-gray-300 rounded-lg text-gray-900"
						disabled={loading}
					/>
					<button
						onClick={handleSearch}
						className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
						disabled={loading}
					>
						Search
					</button>
					<button
						onClick={handleClear}
						className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 disabled:opacity-50 cursor-pointer"
						disabled={loading && !input}
					>
						Clear
					</button>
				</div>

				{loading && <div className="text-center text-gray-600">Loading results...</div>}

				{error && <div className="text-red-600 text-center mb-4">{error}</div>}

				{summary && (
					<div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 mb-6">
						<h2 className="font-bold text-lg mb-2">Summary</h2>
						<p className="mb-2">{summary}</p>
						<p className="text-sm">Sources: [{results.map((r) => r.id).join(', ')}]</p>
					</div>
				)}

				{results.length > 0 && (
					<div className="space-y-4">
						{results.map((result) => (
							<div key={result.id} className="bg-gray-50 p-4 rounded-md border border-gray-200">
								<h3 className="text-xl font-semibold text-gray-800">{result.title}</h3>
								<p className="text-gray-700 mt-2">{result.body.substring(0, 50)}...</p>
							</div>
						))}
					</div>
				)}

				{!loading && !error && results.length === 0 && !summary && (
					<div className="text-center text-gray-500">Start by searching for faqs.</div>
				)}
			</div>
		</div>
	);
}
