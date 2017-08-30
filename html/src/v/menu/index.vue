<style lang="less" module>
@import '../mixin';
.menu {
	z-index: 10;
	position: fixed !important;
	bottom: 0;
	display: flex;
	height: 49px;
	left: 0;
	right: 0;
	background: #fff
}

.nav {
	flex: 1;
	text-align: center;
	padding-top:7.5px; 
	img {
		width: 22px;
	}
	span {
		display: block;
		padding-top: 3.5px;
		color: @gray;;
		font-size: 10px;
	}
}

.on{
	span{
		color:@green
	}
}
</style>

<template lang="jade">
div(:class="$style.menu" v-if="menu.index>-1")
	template(v-for="(item,index) in list" )
		router-link(:class="[$style.nav,$style.on]", :to="item.link" replace v-show="menu.index==index")
			img(:src="item.iconOn")
			span {{item.text}}
		router-link(:class="$style.nav", :to="item.link" replace  v-show="menu.index!=index")
			img(:src="item.icon")
			span {{item.text}}
</template>

<script>
let list = [
	{
		text: '首页',
		icon: require('./1.png'),
		iconOn: require('./1.1.png'),
		link: '/'
	}, {
		text: '历史',
		icon: require('./2.png'),
		iconOn: require('./2.1.png'),
		link: '/history'
	},{
		text: '还款',
		icon: require('./3.png'),
		iconOn: require('./3.1.png'),
		link: '/repay'
	}, {
		text: '我的',
		icon: require('./4.png'),
		iconOn: require('./4.1.png'),
		link: '/center'
	}
]

export default {
	data() {
		return {
			list: list,
			menu : config.menu
		}
	}
}
</script>