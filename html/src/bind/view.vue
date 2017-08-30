<style lang="less" module>
@import '../v/mixin';
.title{
	font-size: 12px;padding:17.5px 0 0 20px;height: 26.5px;color:@gray;
}
.list{
	background: #fff;padding:0 20px;
	dl{
		height: 56px;display: flex;align-items: center;
		dt{
			width: 87px;
		}
		dd{
			flex:1;position: relative;display: flex;
			img{
				width: 18px;height: 18px;margin-right: 5px;
			}
		}
	}
}
.button{
	padding:32px 20px;
}
</style>

<template lang="jade">
div(:class="$style.main")
	vHeader(html="收款银行卡")
	div(:class="$style.title") 请填写银行卡信息
	div(:class="$style.list")
		dl.border1
			dt 持卡人
			dd 周生生
		dl.border1
			dt 身份证号
			dd 350128198910283911
		dl.border1
			dt 选择银行
			dd
				img(src="./icbc.png")
				| 工商银行
		dl.border1
			dt 银行卡号
			dd 6222 0202 0011 9813 156
	div(:class="$style.button")
		vButton(html="修改银行卡信息" enabled="1" href="#/bind")
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