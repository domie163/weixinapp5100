<template>
<view class="content">
	<view class="box" :style='{"padding":"48rpx","boxShadow":"0 340rpx 0px #F3F3F3 inset","margin":"40rpx auto","backgroundColor":"rgba(191, 170, 142, 1)","borderColor":"#ccc","borderRadius":"20rpx","borderWidth":"0","width":"90%","borderStyle":"solid","height":"auto"}'>
		<view class="forget-input forget-margin-b" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(243, 243, 243, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
			<input v-model="username" :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(243, 243, 243, 1)","color":"#333","textAlign":"left","borderRadius":"0","borderWidth":"0 0 4rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' type="text" placeholder="请输入您的账号" />
		</view>
		<view class="login-input login-margin-b" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(243, 243, 243, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
			<picker style="color: #888888;padding: 0 40upx;box-sizing:border-box;margin-top: 20upx;" @change="optionsChange" :value="index"
			 :range="options">
				<view class="uni-input" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 0 30rpx","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"#333","textAlign":"left","borderRadius":"0","borderWidth":"0 0 4rpx","width":"90%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{options[index]}}</view>
			</picker>
		</view>
		<button class="landing" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"20rpx auto 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"88rpx","color":"rgba(191, 170, 142, 1)","borderWidth":"2rpx","width":"34%","fontSize":"30rpx","borderStyle":"solid","height":"88rpx"}' @tap="onResetPass" type="primary">重置密码</button>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [
                    '请选择登陆用户类型',
					                                        '用户',
                                                                                                                                                                                                                                                                                                                                                                                        ],
                optionsValues: [
					'',
					                                        'yonghu',
                                                                                                                                                                                                                                                                                                                                                                        				],
				index: 0
			}
		},
		onLoad() {
			this.styleChange()
		},
		methods: {
			async onResetPass() {
				if(this.username==undefined) {
					this.$utils.msg('请输入账号')
					return;
                                }
				if(this.optionsValues[this.index]=="") {
					this.$utils.msg('请选择角色')
                                        return;
				}
				let res = await this.$api.resetPass(`${this.optionsValues[this.index]}`, this.username)
				this.$utils.msgBack("重置密码成功,原始密码为:123456")
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.forget-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.restPwFrom.content.input.backgroundColor
					// })
				})
			},
		}
	}
</script>

<style>
	.content {
		height: calc(100vh - 44px);
		overflow: auto;
	}

	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-image: url(http://codegen.caihongy.cn/20220222/d4bcf1f490c64c3c9cbf5f27546f0040.png);
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}
	
	.verify-left {
		width: calc(100% - 260upx);
	}

	.verify-right {
		padding-left: 20upx;
	}

	.verify-btn {
		height: 80upx;
		line-height: 80upx;
		font-size: 28upx;
		width: 240upx;
		border-radius: 8upx;
		background: linear-gradient(left, #FF978D, #FFBB69);
	}

	.verify-left,
	.verify-right {
		float: left;
	}

	.landing {
		height: auto !important;
		line-height: 60rpx;
		border-radius: 44upx;
		font-size: 32upx;
	}

	.forget-btn {
		padding: 10upx 20upx;
		margin-top: 380upx;
	}

	.forget-input input {
		background: #FFFFFF;
		font-size: 28upx;
		padding: 10upx 25upx;
		height: 62upx;
		line-height: 62upx;
		border-radius: 8upx;
	}

	.forget-margin-b {
		margin-bottom: 25upx;
	}

	.forget-input {
		padding: 10upx 20upx;
		overflow: auto;
	}

	.forget-card {
		background: #fff;
		border-radius: 12upx;
		padding: 60upx 25upx;
		box-shadow: 0 6upx 18upx rgba(0, 0, 0, 0.12);
		position: relative;
		margin-top: 120upx;
	}

	.forget-bg {
		height: 260upx;
		padding: 25upx;
		// background: linear-gradient(#FF978D, #FFBB69);
	}
</style>
