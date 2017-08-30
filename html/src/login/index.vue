<style lang="less" module>
@import '../v/mixin';
.main{
	background: #fff;position: fixed;top:0;left:0;right:0;z-index: 100;height: 100%;.tran(all,.3s);transform: translateX(100%);
}
.show{
	transform: translateX(0%);
}
.title{
	width: 100%;
	h2{
		font-size: 17px;line-height: 44px;text-align: center;
	}
	span{
		position: absolute;left:0;top: 0;height: 44px;padding:0 16px;width: 16px;background:url(../login/02.png) center no-repeat;background-size: 16px;
	}
}
.logo{
	padding-top: 100px;text-align: center;
	img{
		width: 80px;
	}
}
.list{
	padding:0 20px;
	div{
		height: 40px;position: relative;padding-top: 25px;
	}
	input{
		width: 100%;height: 20px;padding: 10px 0;line-height: 20px;background: none;border:none;font-size: 16px;position: relative;z-index: 2;
	}
	label{
		color:@gray;position: absolute;top:38px;width: 100%;left:0;.tran();
		&.on{
			font-size: 12px;top:7.5px;
		}
	}
	span{
		color:@red;position: absolute;right:0;top:25px;background: #fff;padding-left: 10px;line-height:40px;
	}
}
.foot{
	padding:36px 20px;
	.agreement{
		padding-top: 26px;height: 30px;text-align: center;
		a{
			color:@blue;
		}
		img{
			width: 12px;padding-right: 5px;
		}
	}
}
</style>

<template lang="jade">
div(:class="[$style.main,status.show ? $style.show : '']")
	div(:class="$style.title")
		h2 登录/注册
		span(@click="close")
	div(:class="$style.logo")
		img(src="./logo.png")
	div(:class="$style.list")
		div.border1
			input(type="tel" v-model="username" @focus="focus('u')"  @blur="blur('u')")
			label(:class="[u||username ? $style.on :'']") 请输入手机号码
		div.border1
			input(type="tel" v-model="code" @focus="focus('c')"  @blur="blur('c')")
			label(:class="[c || code? $style.on :'']") 请输入验证码
			span 点击获取
	div(:class="$style.foot" @click="login")
		vButton
		div(:class="$style.agreement") 
			img(src="./01.png")
			|同意
			a(href="") 《一带宝借款协议》
</template>

<script>
	export default {
		data() {
			return {
				u : 0,
				c : 0,
				username: '',
				code: '',
				status : config.login
			}
		},
		beforeCreate() {
			// config.load.status = 0
			// cookie("token", null)
		},
		methods: {
			focus(type){
				this[type] = 1
			},
			blur(type){
				this[type] = 0
			},
			close(){
				config.login.show =0
			},
			login() {
				// axios.post("/v1/api0/security/login", {
				// 	username: this.username,
				// 	password: this.password
				// }).then(result => {
				// 	if(result.code==200){
				// 		cookie("token", result.body)
				// 		location.href = "./"
				// 	}else{
				// 		config.toast.msg = result.msg
				// 	}
				// })
			}
		}
	}
</script>