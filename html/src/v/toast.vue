<style lang="less" module>
	.toast {
		position: fixed;
		bottom: 15%;
		left: 50%;
		background: rgba(0, 0, 0, .7);
		color: #fff;
		border-radius: 4px;
		padding: 8px;
		transform: translate(-50%, -50%);
		max-width: 172px;
		line-height: 1.5;
		text-align: center;
		z-index: 100;
	}
</style>

<template lang="jade">
span(:class="$style.toast" v-show="toast.msg") {{content}}
</template>

<script>
	export default {
		data() {
			return {
				toast: config.toast,
				fn: null
			}
		},
		computed: {
			content() {
				clearTimeout(this.fn)
				this.fn = setTimeout(() => {
					this.toast.msg = ""
				}, 3000)
				return this.toast.msg
			}
		}
	}
</script>