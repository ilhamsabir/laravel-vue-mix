<template>
	<h1 class="home">HOME SAMPLE</h1>
</template>

<script>
export default {
	head: {
		title: {
			inner: 'It will be a pleasure'
		},
		// Meta tags
		meta: [
			{ name: 'application-name', content: 'Name of my application' },
			{ name: 'description', content: 'A description of the page', id: 'desc' }, // id to replace intead of create element
			// ...
			// Twitter
			{ name: 'twitter:title', content: 'Content Title' },
			// with shorthand
			{ n: 'twitter:description', c: 'Content description less than 200 characters'},
			// ...
			// Google+ / Schema.org
			{ itemprop: 'name', content: 'Content Title' },
			{ itemprop: 'description', content: 'Content Title' },
			// ...
			// Facebook / Open Graph
			{ property: 'fb:app_id', content: '123456789' },
			{ property: 'og:title', content: 'Content Title' },
			{ p: 'og:image', c: 'https://example.com/image.jpg' },

		],
	}


}
</script>

<style>

</style>