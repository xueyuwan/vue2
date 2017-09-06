<template>
  <div class="el-col el-col-12 el-col-offset-4">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.telephone"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input v-model="form.info"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语">
        <el-input v-model="form.slogan"></el-input>
      </el-form-item>

      <el-form-item label="店铺特点" style="white-space: nowrap;">
        <span>品牌保证</span>
        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        <span>蜂鸟专送</span>
        <el-switch on-text="" off-text="" v-model="form.delivery1"></el-switch>
        <span>新开店铺</span>
        <el-switch on-text="" off-text="" v-model="form.delivery2"></el-switch>
      </el-form-item>
      <el-form-item label="店铺特点" style="white-space: nowrap;">
        <span>品牌保证</span>
        <el-switch on-text="" off-text="" v-model="form.delivery3"></el-switch>
        <span>蜂鸟专送</span>
        <el-switch on-text="" off-text="" v-model="form.delivery4"></el-switch>
        <span>新开店铺</span>
        <el-switch on-text="" off-text="" v-model="form.delivery5"></el-switch>
      </el-form-item>
      <el-form-item label="配送费" prop="float_delivery_fee">
        <el-input-number v-model="form.float_delivery_fee" :min="0" :max="20"></el-input-number>
      </el-form-item>
      <el-form-item label="起送价" prop="float_minimum_order_amount">
        <el-input-number v-model="form.float_minimum_order_amount" :min="0" :max="100"></el-input-number>
      </el-form-item>

      <el-form-item label="营业时间">
        <el-time-select placeholder="起始时间" v-model="form.startTime" :picker-options="{
  							start: '05:30',
  							step: '00:15',
  							end: '23:30'
  							}">
        </el-time-select>
        <el-time-select placeholder="结束时间" v-model="form.endTime" :picker-options="{
  							start: '05:30',
  							step: '00:15',
  							end: '23:30',
  							minTime: form.startTime
  							}">
        </el-time-select>
      </el-form-item>

      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        float_delivery_fee: 5, //运费
        float_minimum_order_amount: 20, //起价
        delivery: true,
        delivery1: true,
        delivery2: true,
        delivery3: true,
        delivery4: true,
        delivery5: true,
        startTime: '',
        endTime: '',
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
 