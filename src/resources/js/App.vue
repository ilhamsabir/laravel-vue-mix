<template>
	<div>
		<span>Hello 2</span>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
}
</script>

<style lang="scss"></style>
