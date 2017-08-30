<style lang="less" module>
@import '../v/mixin';
.view{
	background:#fff url(../index/04.png) center 27.5px no-repeat;padding-top: 157px;text-align: center;
	background-size: 128px auto;font-size: 16px;line-height: 24px;
	p{
		font-size: 12px;color:@gray;padding: 12px 0;
	}
}
.button{
	padding:32px 20px;
}
</style>

<template lang="jade">
div(:class="$style.main")
	vHeader(html="运营商信息")
	div(:class="$style.view") 申请已成功提交<br>请等待审核
		p 3S后将自动跳转到首页
	div(:class="$style.button")
		vButton(html="好的" enabled="1" href="#/")
</template>

<script>
export default {
	data() {
		return {
		}
	},
	created() {
		//document.setTitle('一带')
		config.menu.index = '0'
		// axios.post("/v1/api/account/getAssetByUid")
		// 	.then(result => {
		// 		document.setTitle('学交易')
		// 		this.$set(this, 'userAssetDto', result.body.userAssetDto)
		// 		this.userPositionDtoList = result.body.userPositionDtoList
		// 		this.weixinPayStatus = result.body.weixinPayStatus
		// 		this.weixinTXStatus = result.body.weixinTXStatus
		// 		this.userflag = result.body.userflag
		// 	})
		// 	.catch(error => config.toast.msg = error.message)

		// axios.get("/html/static/index.json")
		// 	.then(result => {
		// 		this.$set(this, 'news', result.body.news)
		// 		this.list = result.body.list
		// 	})
	},

	methods: {
		showPopup(){
			this.popupTop = "40%"
			this.maskTop = "0"
		},
		hidePopup(){
			this.popupTop = "-100%"
			this.maskTop = "100%"
		}
	},
	components: {
		//vNotice: require('../v/notice/notice.vue')
	}
}
</script>