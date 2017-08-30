<style lang="less" module>
@import '../v/mixin';
.head{
	display: flex;padding:20px;align-items: center;background: #fff;
	dt{
		img{
			width: 60px;height: 60px;
		}
	}
	dd{
		padding-left: 14px;
		strong{
			font-size: 16px;
		}
		p{
			padding-top: 8px;color:@gray;
		}
	}
}

.canuse{
	margin-top: 15px;background: #fff;display: flex;align-items: center;padding:0 20px;height: 70px;justify-content: space-between;
	img{
		height: 20px;width: 20px;margin-right: 9px;vertical-align: middle;
	}
	dd{
		font-size: 20px;color:@green;
	}
}

.list{
	margin-top: 15px;background: #fff;padding:0 20px;
	a{
		display: flex;align-items: center;height: 55px;background: url(../center/06.png) right center no-repeat;
		background-size: 12px 12px;
	}
	img{
		height: 20px;width: 20px;margin-right: 9px;
	}
}
</style>

<template lang="jade">
div(:class="$style.main")
	vHeader(html="我的" logout="1" noback="1")
	dl(:class="$style.head")
		dt
			img(src="./01.png")
		dd
			strong 周生生
			p 13121786673
	dl(:class="$style.canuse")
		dt
			img(src="./05.png") 
			| 可用额度(元)
		dd ¥1,000.00
	div(:class="$style.list")
		router-link.border1(to="/bind/view")
			img(src="./04.png") 
			| 收款银行卡
		router-link.border1(to="/upload/view")
			img(src="./03.png") 
			| 运营商数据
</template>

<script>
export default {
	data() {
		return {
		}
	},
	created() {
		//document.setTitle('一带')
		config.menu.index = '3'
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