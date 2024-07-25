import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	// Default values
	if (!title) title = 'Next.js & TailwindCSS Portfolio Project';
    if (!keywords) keywords = 'next.js, react, web, ui';
    if (!description) description = 'Simple and multi-page Next.js and React application';

    // Return the Head component with the provided title, keywords, and description
    // The 'link rel="icon" href="/favicon.ico"' line is used to add a favicon to the webpage
    // The 'title' prop is used to set the title of the webpage
    // All other props are used to set meta tags for SEO and accessibility
    // Note: You can add more meta tags as needed for different types of pages in your application
    // For example: <meta name="og:title" content={title} /> or <meta name="twitter:card" content="summary_large_image" />
    // For more information on meta
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
}

// PagesMetaHead.defaultProps = {
// 	title: 'Next.js & TailwindCSS Portfolio Project',
// 	keywords: 'next.js, react, web, ui',
// 	keywords: 'Simple and multi-page next.js and react application',
// };

export default PagesMetaHead;
