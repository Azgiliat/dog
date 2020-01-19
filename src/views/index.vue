<template>
	<div class="main" v-scroll="infinScroll" ref="main">
		<div class="container">
		<div class="main__cards cards">
			<breed-card class="cards__breed-card" v-for="(breed, index) in displayingBreeds" :breed="breed.name"
						:class="{'first-card': index === 0}" :key="index" :ref="`card-${index}`" />
		</div>
	</div>
	</div>
</template>

<script>
import scroll from '@/directives/scroll.js'
import { mapGetters } from 'vuex'
import breedCard from '@/components/breedCard.vue' 
export default {
	name: 'index',
	directives: {
		scroll
	},
	components: {
		'breed-card': breedCard
	},
	data () {
		return {
			currentDisplay: 13
		}
	},
	computed: {
		...mapGetters('global', {
			breedsNames: 'getBreedsNames'
		}),
		displayingBreeds () {
			return this.breedsNames.slice(0, this.currentDisplay)
		}
	},
	methods: {
		infinScroll () {
			if (window.scrollY + this.$refs['card-2'].clientHeight * 2 >= this.$refs.main.clientHeight - 300) {
				this.currentDisplay += 12
			}
		}
	}
}
</script>

<style scoped lang="scss">
.main {
	padding-left: 60px;
	padding-right: 60px;
	padding-top: 50px;
}
.cards {
	display: grid;
	grid-template-columns: repeat(3, minmax(367px, 1fr));
	column-gap: 30px;
	row-gap: 30px;	
}

.cards__breed-card {
}

.cards__breed-card:first-child {
	grid-column: 1 / span 3;
}

.first-card {
	height: 513px;
}

.container {
	width: 1280px;
	margin: 0 auto;
}
</style>