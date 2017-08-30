<style lang="less" module>
@import './mixin';
.nolog{
	background: url(../v/img/nolog.png) center 140px no-repeat;background-size: 126px auto;text-align: center; padding-top: 270px;color:@gray;
}
</style>

<template lang="jade">
	div(:class="$style.nolog") {{html}}
</template>

<script>
	export default {
		props: ['html']
	}
</script>