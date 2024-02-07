<template>
	<dialog class="dialog" @click.stop>
		<div
			class="dialog-body"
			
		>
			<div class="d-head">
				<div class="title">
					<h4>{{ title }}</h4>
				</div>
				<div class="close" @click="$emit('close')">
					x
				</div>
			</div>
			<div class="d-body">
				<slot></slot>
			</div>
		</div>
	</dialog>
</template>

<script>
export default {
	props: ["title"],
	methods: {
		close() {
			this.$emit("close");
		},
	},
};
</script>

<style scoped>
h4 {
	color: white;
}
.dialog {
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(3px);
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.dialog-body {
	width: 45%;
	background: var(--color-white);
	position: relative;
}
.big-dialog {
	width: 65%;
}
.massive-dialog {
	width: 75%;
}
.dialog-body .d-head {
	background: var(--color-primary);
	padding: 1.4em;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.dialog-body .close {
	color: var(--color-white);
	cursor: pointer;
}
.dialog-body .close .mdi {
	font-size: 20px;
}
.dialog-body .d-body {
	padding: 1.4em;
	position: relative;
}

@media only screen and (max-width: 600px) {
	.dialog-body {
		width: 340px;
	}
}
@media only screen and (max-width: 340px) {
	.dialog-body {
		width: 280px;
	}
}
</style>
