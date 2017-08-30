<style lang="less" module>
	@import './mixin';
	@keyframes v-loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.button {
		.tran();
		text-align: center;
		line-height: 45px;
		color: #fff;
		background: #C2C5CA;box-shadow: 0 6px 16px 0 rgba(161,165,173,0.30);
		border-radius:22px;
		height: 44px;
		font-size: 17px;
		display: block;
		&.enabled {
			background-image: linear-gradient(-222deg, #0ACFAF 0%, #6CD588 100%);
			box-shadow: 0 5px 12px 0 rgba(10,207,175,0.24);
		}
		span{
			border: 2px solid rgba(0, 0, 0, 0.5);
			border-radius: 50%;
			border-color: #fff #fff transparent transparent;
			animation: v-loading .8s infinite ease;
			display: inline-block;
			vertical-align: middle;
			height: 16px;
			width: 16px;
			margin: -3px 10px 0 -10px;
		}
	}
</style>

<template lang="jade">
	a(:class="[$style.button, enabled?$style.enabled:'']" ,:href="enabled&&href?href:'javascript:;'")
		span(v-show="button")
		|{{text}}
</template>

<script>
	export default {
		props: ['html', 'href', 'enabled'],
		data(){
			return {
				button: config.button,
			}
		},
		computed: {
			text() {
				if(this.button){
					return '请稍等...'
				}else{
					return this.html||'确定'
				}
			}
		}
	}
</script>