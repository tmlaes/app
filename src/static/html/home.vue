<template>
	<div>
		home
	</div>
</template>
<script>
	export default {
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