<template>
	<nav class="header">
		<div class="container container--flex">
			<h1 class="header__title">
				Пёсель
			</h1>
			<div class="header__favourite facourite">
				<p class="favourite__title">
					Избранные пёсели
				</p>
				<div class="favourite__icon-wrapper">
				<svg width="16" height="14" class="favourite__icon">
					<use xlink:href="#heart" />
				</svg>
			</div>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'Header'
}
</script>

<style lang="scss">
.container {
	width: 1280px;
	margin: 0 auto;

	&--flex {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}
}

.header {
	background: #151419;
	box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
}

.header__title {
	font-size: 27px;
	text-transform: uppercase;
	margin: 0;
	padding: 35px 0 38px;
	color: #3C59F0;
}

.facourite {
	display: flex;
}

.favourite__icon-wrapper {
	fill: #626262;
	margin-left: 10px;
}

.favourite__title {
	color: #626262;
	margin: 0;
}
</style>