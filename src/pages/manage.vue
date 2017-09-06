<template>
	<div class="manage_page" style="height: 100%;">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<slidebar></slidebar>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>
<script>
import slidebar from './../components/sidebar'
export default {
  components:{slidebar}
}
</script>
