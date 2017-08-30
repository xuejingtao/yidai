<style lang="less" module>
@import '../v/mixin';
.item{
	margin-top: 15px;background: #fff;padding:0 20px;
	dl{
		display: flex;height: 45px;line-height: 45px;justify-content: space-between;
		dt{
			font-size: 12px;color:@gray;
		}
		dd{
			color:@blue; 
			img{
				width: 10px;vertical-align: middle;margin-top: -2px;margin-right: 4px;font-size: 12px;
			}
		}
	}
	ul{
		padding-top: 18px;
	}
	li{
		display: flex;justify-content: space-between;height: 34px;color:@black1;
	}
	div{
		text-align: center;color:@red;line-height: 45px;
		&.on{
			color:@green;
		}
	}
}
.text{
	text-align: center;font-size: 10px;color:@gray;padding-top: 17px;height: 50px;
}
</style>

<template lang="jade">
div(:class="$style.main")
	vHeader(html="申请历史" noback="1")
	template(v-if="1")
		div(:class="$style.item" v-for="i in 10")
			dl.border1
				dt 申请日期：2017-10-10
				dd 	
					img(src="./01.png")
					|合同
			ul
				li
					p 借款金额(元)
					span 1,000.00
				li
					p 借款期限(天)
					span 14
			div.border1top(:class="[i%3?$style.on:'']") 审核中
		div(:class="$style.text") 亲，我是有底线的哟～
	vNolog(html="您还没有申请过借款哟" v-else)
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
		config.menu.index = '1'
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