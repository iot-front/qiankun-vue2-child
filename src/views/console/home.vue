<template>
	<div>
		<h-module-title title="页面-待开发" ></h-module-title>
  </div>
</template>

<script>
import { apiSearchIndustryDesc } from '@/apis/console';
export default {
	data() {
		return {
			
		}
	},
	created() {
    // // 测试接口
    apiSearchIndustryDesc().then((res) => {
			console.log(res)
		})
		
	},
  mounted() {
  },
	methods: {
	}
};
</script>

<style lang="scss" scoped>

</style>
