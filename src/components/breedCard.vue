<template>
	<div class="breed-card">
		<div class="breed-card__icon-wrapper">
			<svg width="29" height="26">
				<use xlink:href="#heart" />
			</svg>
		</div>
		<div class="breed-card__img-wrapper">
			<img class="breed-card__img" :src="breedImg(breed)">
		</div>
		<p class="breed-card__title">
			{{breed}}
		</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data () {
		return {
		}
	},
	props: {
		breed: {
			type: String,
			require: true
		}
	},
	computed: {
		...mapGetters('global', {
			breedImg: 'getBreedImg'
		})
	}
}
</script>

<style scoped lang="scss">
.breed-card {
	position: relative;
	transition: transform 0.4s;

	&:hover {
		transform: scale(1.1);
	}
}

.breed-card__title {
	position: absolute;
	font-weight: 600;
	font-size: 25px;
	line-height: 28px;
	text-align: right;
	letter-spacing: 0.01em;
	bottom: 25px;
	right: 25px;
	color: #ffffff;
	margin: 0;
}

.breed-card__img {
	width: 100%;
	height: 100%;
}

.breed-card__img-wrapper {
	width: 100%;
	height: 290px;
	border-radius: 8px;
	overflow: hidden;
}

.first-card .breed-card__img-wrapper {
	width: 100%;
	height: 100%;
}

	.first-card .breed-card__icon-wrapper {
		top: 35px;
		left: 35px;
	}

.breed-card__icon-wrapper {
	position: absolute;
	top: 25px;
	left: 25px;
	fill: #ffffff;
}
</style>