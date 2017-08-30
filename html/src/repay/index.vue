<style lang="less" module>
@import '../v/mixin';
.title{
	font-size: 12px;padding:17.5px 0 0 20px;height: 26.5px;color:@gray;
}
.content{
	padding:0 20px;background: #fff;
	.list{
		padding:10px 0;
		dl{
			height: 33px;display: flex;align-items: center;justify-content: space-between;color:@black1;
			dt{
				width: 87px;
			}
			dd{
				display: flex;align-items: center;
			}
		}
	}
	.caption{
		line-height: 60px;display: flex;align-items: center;justify-content: space-between;border-bottom: 1px dashed @border;font-size: 16px;
		dd{
			color:@green;
		}
	}
	
}
.button{
	padding:32px 20px;
}
</style>

<template lang="jade">
div(:class="$style.main")
	vHeader(html="还款" noback="1")
	template(v-if="1")
		dl(:class="$style.content")
			dl(:class="$style.caption")
				dt 总计(元)
				dd ¥1,000.00
			div.border1(:class="$style.list")
				dl
					dt 本金(元)
					dd 1,000.00
				dl
					dt 利息(元)
					dd 0.00
				dl
					dt 滞纳金(元)
					dd 0.00
			div(:class="$style.list")
				dl
					dt 订单编号
					dd 253476758745632
				dl
					dt 提现日期
					dd 2017-08-12
				dl
					dt 还款日期
					dd 2017-08-18
		div(:class="$style.button")
			vButton(html="还款" enabled="1" href="")
	vNolog(html="您还没有需要还款的账单哟" v-else)
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
		vNolog: require('../v/nolog.vue')
	}
}
</script>