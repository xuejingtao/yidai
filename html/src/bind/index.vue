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
			input,select{
				width: 100%;height: 50px;font-size: 16px;border:none;background: none;padding: 0;
				&::placeholder{
					color:@gray;font-size: 14px;
				}
			}
			span{
				color:@red;position: absolute;right:0;top:0;background: #fff;padding-left: 10px;line-height: 50px;
			}
			img{
				width: 18px;height: 18px;margin-right: 5px;
			}
			// i{
			// 	position: absolute;right:0;background: url(../bind/
			// }
		}
	}
}
.button{
	padding:32px 20px;
}
</style>

<template lang="jade">
div(:class="$style.main")
	vHeader(html="绑定银行卡")
	div(:class="$style.title") 请填写银行卡信息
	div(:class="$style.list")
		dl.border1
			dt 持卡人
			dd
				input(type="text" placeholder="请填写持卡人真实姓名")
		dl.border1
			dt 身份证号
			dd
				input(type="text" placeholder="请填写持卡人身份证号")
		dl.border1
			dt 选择银行
			dd
				img(src="./icbc.png")
				select
					option(value="1") 请选择银行
					option(value="1") 工商银行
					option(value="1") 中国银行
					option(value="1") 农业银行
				i
		dl.border1
			dt 银行卡号
			dd
				input(type="tel" placeholder="请输入银行卡号")
		dl.border1
			dt 手机号码
			dd
				input(type="tel" placeholder="请输入银行预留手机号码" maxLength="11")
		dl
			dt 验证码
			dd
				input(type="tel" placeholder="请输入验证码" maxLength="6")
				span 点击获取
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