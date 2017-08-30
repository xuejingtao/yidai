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
			flex:1;position: relative;display: flex;align-items: center;
			input{
				width: 100%;height: 50px;font-size: 16px;border:none;background: none;padding: 0;
				&::placeholder{
					color:@gray;font-size: 14px;
				}
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
	vHeader(html="上传运营商数据")
	div(:class="$style.title") 请填写运营商信息
	div(:class="$style.list")
		dl.border1
			dt 手机号码
			dd
				input(type="tel" placeholder="请输入手机号码" maxLength="11")
		dl
			dt 服务密码
			dd
				input(type="tel" placeholder="请输入服务密码" maxLength="6")
	div(:class="$style.button")
		vButton
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