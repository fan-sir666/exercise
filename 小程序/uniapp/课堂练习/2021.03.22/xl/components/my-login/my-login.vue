<template>
	<view class="login-container">
		<!-- 提示登录的图标 -->
		<uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
		<!-- 登录按钮 -->
		<button type="primary" class="btn-login" @tap="getUserInfo">一键登录</button>
		<!-- 登录提示 -->
		<view class="tips-text">登录后尽享更多权益</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from "vuex";
	export default {
		name: "my-login",
		data() {
			return {

			};
		},
		methods: {
			...mapMutations("m_user", ['updateUserInfo', 'updateToken']),
			// 获取微信用户的基本信息
			getUserInfo(e) {
				const _this = this;
				wx.getUserProfile({
					desc: '用于完善会员资料',
					success: (res) => {
						// console.log(res);
						// 将用户基本信息存到vuex
						_this.updateUserInfo(res)

						// 获取token
						_this.getToken(res);
					},
					fail: (err) => {
						if (err.errMsg == 'getUserProfile:fail auth deny') return uni.$toast("您取消了用户登录");
					}
				})
			},
			async getToken(info) {
				// 获取code
				const [err, succ] = await uni.login().catch(err => err);
				if (err !== null && succ.errMsg !== 'login:ok') return uni.$toast("登录失败");
				// 处理数据
				const query = {
					code: succ.code,
					encryptedData: info.encryptedData,
					iv: info.iv,
					rawData: info.rawData,
					signature: info.signature
				}
				// 发请求换token
				const {
					data: res
				} = await uni.$http.post("users/wxlogin", query);
				// console.log(res);
				/* 
				 由于开发 后台问题 无法正常获取token 和 appid开发这权限有关 只能判断400 模拟流程
				 */
				if (res.meta.status !== 400) return uni.$toast('登录失败！')
				uni.$toast('登录成功')

				this.updateToken(
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUzLCJpYXQiOjE2MTc5NTQyMTYsImV4cCI6MTAwMTYxNzk1NDIxNX0.wpJqjziOCXcPMBX-RNC-uobzTQjif7dU0mwvtNi-sYU'
					)
			}
		}
	}
</script>

<style lang="scss">
	.login-container {
		// 登录盒子的样式
		height: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f8f8f8;
		position: relative;
		overflow: hidden;

		// 绘制登录盒子底部的半椭圆造型
		&::after {
			content: ' ';
			display: block;
			position: absolute;
			width: 100%;
			height: 40px;
			left: 0;
			bottom: 0;
			background-color: white;
			border-radius: 100%;
			transform: translateY(50%);
		}

		// 登录按钮的样式
		.btn-login {
			width: 90%;
			border-radius: 100px;
			margin: 15px 0;
			background-color: #c00000;
		}

		// 按钮下方提示消息的样式
		.tips-text {
			font-size: 12px;
			color: gray;
		}
	}
</style>
