<style lang="less">
@import '../v/common';
</style>
<style lang="less" module>
@import '../v/mixin';
.head{
	height: 280px;background:url(../index/title.png) center 0 no-repeat;background-size: cover;
}
.logo{
	padding-top:30px; text-align:center;
	img{
		width:34px;
	}
}

.content{
	position: relative;height: 172px;padding-bottom: 32px;
	.available{
		position: absolute;top:-192px;background:#fff;right:30px;left:30px;height:363px; border-radius:5px;box-shadow: 0 8px 16px 0 rgba(161,165,173,0.20);
	}
	.info{
		padding-top: 32px; text-align:center;line-height: 20px;
	}
	h2{
		font-size:50px;color:@green; font-weight:500; text-align:center;padding-top: 5px;height: 90px;
		span{
			font-size:26px;display: inline-block;vertical-align: top;margin-top: 3px;margin-right: 4px;
		}
	}
	.line{
		border-bottom: 1px dashed #C5C5C5;position: relative;
		&:before,&:after{
			height: 7px;width: 3.5px;background:#0dd4b2;position: absolute;content: ' ';top:-3.5px;
		}
		&:before{
			border-top-right-radius:3.5px;
			border-bottom-right-radius:3.5px;
		}
		&:after{
			right:0;background: #22bd80;
			border-top-left-radius:3.5px;
			border-bottom-left-radius:3.5px;
		}
	}
	.list{
		padding:26px 20px 0;
		dl{
			display: flex;justify-content: space-between;color:@black1;height: 42px;
		}
		img{
			width: 13px;padding: 5px;margin-top: -5px;
		}
	}
	.total{
		height: 42px;padding-top: 20px;
		dd{
			color:@green;font-size: 16px;
		}
	}
}
.foot{
	padding:0 30px;text-align: center;color:@gray;font-size: 12px;
	.button{
		background-image: linear-gradient(-45deg, #F5A700 0%, #F5B400 100%);
		box-shadow: 0 6px 15px 0 rgba(245,171,0,0.30);
		border-radius: 22px;display: block;height: 44px;line-height: 44px;color:#fff;font-size: 17px;
		.tran();
		&:active{
			background-image: linear-gradient(-45deg, #F5B400 0%, #F5A700 100%);
		}
	}
	.agreement{
		padding-top: 16px;height: 30px;
		a{
			color:@blue;
		}
		img{
			width: 12px;padding-right: 5px;
		}
	}
	.text{
		height: 44px;
	}
}

.mask{
	background: rgba(0,0,0,0.6) url(../index/03.png) center 85% no-repeat;position: fixed;top:100%;left:0;right:0;bottom:0;z-index: 11;background-size: 29px 29px;.tran(all,.3s)
}

.popup{
	position: fixed;top:-100%;background: #fff;border-radius: 4px;overflow: hidden;width: 270px;left:50%;transform: translate(-50%, -50%);z-index: 12;.tran();
	.title{
		line-height: 70px;font-size: 17px;text-align: center;color:#fff;background: url(../index/popup.png) center 0 no-repeat;background-size:cover;
	}
	.list{
		padding:24px 20px 0;
		dl{
			display: flex;justify-content: space-between;color:@black1;height: 35px;
		}
	}
	.total{
		height: 42px;padding-top: 1px;
		dt{
			color:@black0;
		}
		dd{
			color:@green;font-size: 16px;
		}
	}
	.text{
		font-size: 16px;line-height: 50px;color:@green;text-align: center;
	}
}
</style>

<template lang="jade">
div(:class="$style.main")
	div(:class="$style.head")
		div(:class="$style.logo")
			img(src="./logo.png")
	div(:class="$style.content")
		div(:class="$style.available")
			div(:class="$style.info") 授信额度(元)
			h2 
				span ¥
				|1000.00
			div(:class="$style.line")
			div(:class="$style.list")
				dl
					dt 借款额度(元)
					dd 1,000.00
				dl
					dt 借款期限(天)
					dd 14
				dl
					dt 服务费用(元)
						img(src="./02.png" @click="showPopup")
					dd 99.00
				dl.border1top(:class="$style.total")
					dt 到账金额(元)
					dd
						strong 901.00
	div(:class="$style.foot")
		a(:class="$style.button" @click="apply") 立即申请
		div(:class="$style.agreement") 
			img(src="./01.png")
			|同意
			a(href="") 《一带宝借款协议》
		div(:class="$style.text") 暂时不对学生开放
	div(:class="$style.mask", :style="{top:maskTop}" @click="hidePopup")
	div(:class="$style.popup", :style="{top:popupTop}")
		div(:class="$style.title") 服务费
		div(:class="$style.list")
			dl
				dt 平台服务费(元)
				dd 20.00
			dl
				dt 信息认证费(元)
				dd 10.00
			dl
				dt 风控服务费(元)
				dd 20.00
			dl
				dt 风险保证金(元)
				dd 49.00
			dl(:class="$style.total")
				dt 总计(元)
				dd
					strong 99.00
			div.border1top(:class="$style.text"  @click="hidePopup") 我知道了
</template>

<script>
export default {
	data() {
		return {
			popupTop : '-100%',
			maskTop : '100%'
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
		},
		apply(){
			config.login.show =1
		}
	},
	components: {
		//vNotice: require('../v/notice/notice.vue')
	}
}
</script>