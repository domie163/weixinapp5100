<template>
	<view class="content">
		<form class="app-update-pv">
			 
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"2rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0 0 0 10rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0 10rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">药品名称</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 -18rpx ","borderColor":"rgba(191, 170, 142, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","fontSize":"28rpx","borderStyle":"solid","height":"70rpx"}' :disabled="ro.yaopinmingcheng" v-model="ruleForm.yaopinmingcheng" placeholder="药品名称"></input>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"2rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0 0 0 10rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0 10rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">药品编号</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 -18rpx ","borderColor":"rgba(191, 170, 142, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","fontSize":"28rpx","borderStyle":"solid","height":"70rpx"}' :disabled="ro.yaopinbianhao" v-model="ruleForm.yaopinbianhao" placeholder="药品编号"></input>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">药品分类</view>
				<picker @change="yaopinfenleiChange" :value="yaopinfenleiIndex"  :range="yaopinfenleiOptions">
					<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 ","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(191, 170, 142, 1)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","lineHeight":"70rpx","fontSize":"28rpx","borderStyle":"solid"}' class="uni-input">{{ruleForm.yaopinfenlei?ruleForm.yaopinfenlei:"请选择药品分类"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"30rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group" @tap="yaopintupianTap">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">药品图片</view>
				<view class="right-input" style="padding:0">
					<image :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","margin":"0 30rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","borderRadius":"100%","borderWidth":"0","width":"70rpx","borderStyle":"solid","height":"70rpx"}' class="avator" v-if="ruleForm.yaopintupian" :src="baseUrl+ruleForm.yaopintupian" mode="aspectFill"></image>
					<image :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","margin":"0 30rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","borderRadius":"100%","borderWidth":"0","width":"70rpx","borderStyle":"solid","height":"70rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">剂型</view>
				<picker @change="jixingChange" :value="jixingIndex"  :range="jixingOptions">
					<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 ","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(191, 170, 142, 1)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","lineHeight":"70rpx","fontSize":"28rpx","borderStyle":"solid"}' class="uni-input">{{ruleForm.jixing?ruleForm.jixing:"请选择剂型"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"2rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0 0 0 10rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0 10rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">功效</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 -18rpx ","borderColor":"rgba(191, 170, 142, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","fontSize":"28rpx","borderStyle":"solid","height":"70rpx"}' :disabled="ro.gongxiao" v-model="ruleForm.gongxiao" placeholder="功效"></input>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"2rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0 0 0 10rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0 10rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">保质期</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 -18rpx ","borderColor":"rgba(191, 170, 142, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","fontSize":"28rpx","borderStyle":"solid","height":"70rpx"}' :disabled="ro.baozhiqi" v-model="ruleForm.baozhiqi" placeholder="保质期"></input>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"2rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0 0 0 10rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0 10rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">生产厂家</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 -18rpx ","borderColor":"rgba(191, 170, 142, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","fontSize":"28rpx","borderStyle":"solid","height":"70rpx"}' :disabled="ro.shengchanchangjia" v-model="ruleForm.shengchanchangjia" placeholder="生产厂家"></input>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"2rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0 0 0 10rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0 10rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">价格</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 -18rpx ","borderColor":"rgba(191, 170, 142, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","fontSize":"28rpx","borderStyle":"solid","height":"70rpx"}' :disabled="ro.price" v-model="ruleForm.price" placeholder="价格"></input>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"2rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0 0 0 10rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0 10rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">单限</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 -18rpx ","borderColor":"rgba(191, 170, 142, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","fontSize":"28rpx","borderStyle":"solid","height":"70rpx"}' :disabled="ro.onelimittimes" v-model="ruleForm.onelimittimes" placeholder="单限"></input>
			</view>
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"2rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0 0 0 10rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0 10rpx 0 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">库存</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0 -18rpx ","borderColor":"rgba(191, 170, 142, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 0 20rpx 0","borderWidth":"2rpx","width":"72%","fontSize":"28rpx","borderStyle":"solid","height":"70rpx"}' :disabled="ro.alllimittimes" v-model="ruleForm.alllimittimes" placeholder="库存"></input>
			</view>
			
			<!-- 否 -->
 

			
			<view :style='{"padding":"0 24rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"26rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"308rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">药品说明</view>
				<textarea :style='{"padding":"20rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(191, 170, 142, 1)","borderRadius":"20rpx 0 20rpx 0","color":"rgba(0, 0, 0, 1)","borderWidth":"2rpx","width":"72%","fontSize":"28rpx","borderStyle":"solid","height":"270rpx"}' v-model="ruleForm.yaopinshuoming" placeholder="药品说明"></textarea>
			</view>
			
			<view class="btn" >
				<button :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"30rpx 0 0 0","backgroundColor":"rgba(191, 170, 142, 1)","borderColor":"rgba(161, 161, 161, 0.01)","borderRadius":"20rpx 0 20rpx 0","color":"#fff","borderWidth":"1","width":"50%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

			
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				yaopinmingcheng: '',
				yaopinbianhao: '',
				yaopinfenlei: '',
				yaopintupian: '',
				jixing: '',
				gongxiao: '',
				baozhiqi: '',
				shengchanchangjia: '',
				yaopinshuoming: '',
				price: '',
				onelimittimes: '',
				alllimittimes: '',
				},
				yaopinfenleiOptions: [],
				yaopinfenleiIndex: 0,
				jixingOptions: [],
				jixingIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   yaopinmingcheng : false,
                                   yaopinbianhao : false,
                                   yaopinfenlei : false,
                                   yaopintupian : false,
                                   jixing : false,
                                   gongxiao : false,
                                   baozhiqi : false,
                                   shengchanchangjia : false,
                                   yaopinshuoming : false,
                                   price : false,
                                   onelimittimes : false,
                                   alllimittimes : false,
                                },
			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下拉框
			res = await this.$api.option(`yaopinfenlei`,`yaopinfenlei`,{});
			this.yaopinfenleiOptions = res.data;
			// 自定义下拉框值
			this.jixingOptions = "颗粒,胶囊,注射剂,丸剂,口服液体剂,贴剂,喷剂".split(',')

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`yaopinxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='yaopinmingcheng'){
					this.ruleForm.yaopinmingcheng = obj[o];
					this.ro.yaopinmingcheng = true;
					continue;
					}
					if(o=='yaopinbianhao'){
					this.ruleForm.yaopinbianhao = obj[o];
					this.ro.yaopinbianhao = true;
					continue;
					}
					if(o=='yaopinfenlei'){
					this.ruleForm.yaopinfenlei = obj[o];
					this.ro.yaopinfenlei = true;
					continue;
					}
					if(o=='yaopintupian'){
					this.ruleForm.yaopintupian = obj[o];
					this.ro.yaopintupian = true;
					continue;
					}
					if(o=='jixing'){
					this.ruleForm.jixing = obj[o];
					this.ro.jixing = true;
					continue;
					}
					if(o=='gongxiao'){
					this.ruleForm.gongxiao = obj[o];
					this.ro.gongxiao = true;
					continue;
					}
					if(o=='baozhiqi'){
					this.ruleForm.baozhiqi = obj[o];
					this.ro.baozhiqi = true;
					continue;
					}
					if(o=='shengchanchangjia'){
					this.ruleForm.shengchanchangjia = obj[o];
					this.ro.shengchanchangjia = true;
					continue;
					}
					if(o=='yaopinshuoming'){
					this.ruleForm.yaopinshuoming = obj[o];
					this.ro.yaopinshuoming = true;
					continue;
					}
					if(o=='price'){
					this.ruleForm.price = obj[o];
					this.ro.price = true;
					continue;
					}
					if(o=='onelimittimes'){
					this.ruleForm.onelimittimes = obj[o];
					this.ro.onelimittimes = true;
					continue;
					}
					if(o=='alllimittimes'){
					this.ruleForm.alllimittimes = obj[o];
					this.ro.alllimittimes = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数



			// 下拉变化
			yaopinfenleiChange(e) {
				this.yaopinfenleiIndex = e.target.value
				this.ruleForm.yaopinfenlei = this.yaopinfenleiOptions[this.yaopinfenleiIndex]
			},
			// 下拉变化
			jixingChange(e) {
				this.jixingIndex = e.target.value
				this.ruleForm.jixing = this.jixingOptions[this.jixingIndex]
			},

			yaopintupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.yaopintupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

























//跨表计算判断
				if((!this.ruleForm.yaopinmingcheng)){
					this.$utils.msg(`药品名称不能为空`);
					return
				}
				if((!this.ruleForm.yaopinbianhao)){
					this.$utils.msg(`药品编号不能为空`);
					return
				}
				if(this.ruleForm.price&&(!this.$validate.isNumber(this.ruleForm.price))){
					this.$utils.msg(`价格应输入数字`);
					return
				}
				if(this.ruleForm.onelimittimes&&(!this.$validate.isIntNumer(this.ruleForm.onelimittimes))){
					this.$utils.msg(`单限应输入整数`);
					return
				}
				if(this.ruleForm.alllimittimes&&(!this.$validate.isIntNumer(this.ruleForm.alllimittimes))){
					this.$utils.msg(`库存应输入整数`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
						var obj = uni.getStorageSync('crossObj');
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`yaopinxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`yaopinxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`yaopinxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`yaopinxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`yaopinxinxi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}
	
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.cu-form-group uni-picker::after {
		line-height: 70rpx;
	}
	
	.select .uni-input {
		line-height: 70rpx;
	}
	
	.input .right-input {
		line-height: 70rpx;
	}
</style>
