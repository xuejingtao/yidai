<style lang="less" module>
@import './mixin';
.header{
	height: 44px;position: relative;background-image: linear-gradient(-222deg, #0ACFAF, #6CD588);color:#fff;line-height: 44px;
	h2{
		font-size: 17px;font-weight: 500;text-align: center;
	}
	dl{
		position: absolute;top:0;left:0;justify-content: space-between;width: 100%;overflow: hidden;
		dt{
			background: url(../v/img/header.png) center no-repeat;width: 44px;height: 44px;background-size: 16px;float: left;
		}
		dd{
			padding:0 20px;float: right;
		}
	}
}
</style>

<template lang="jade">
div(:class="$style.header")
	h2 {{html}}
	dl
		dt(@click="back" v-if="!noback")
		dd(v-if="logout") 退出登录
</template>

<script>
export default {
	props: ['html', 'logout' , 'noback'],
	methods:{
		back(){
			history.back()
		}
	}
}
</script>