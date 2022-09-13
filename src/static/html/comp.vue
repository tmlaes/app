<template>
	<div>
		<!-- <lay-icon type="layui-icon-star" size="26px" color="red"></lay-icon> -->
		{{msg}}
		{{msg1}}
		<Button type="primary" @click="test1">百搭按钮</Button>
	</div>
</template>
<script>
	export default {
		props:{
			msg1:{
				type:String
			}
		},
		data() {
		      return {
		        msg: '333',
		      };
		    },
			methods:{
				test1() {
					this.axios.get("/api/test/test").then(res => {
						this.message = res.data;
					});
				}
			}
	};
</script>