<template>
  <div class="tableContainer">
    <el-table :data="tableData5" style="width: 100%">
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id">
      </el-table-column>
      <el-table-column label="商品名称" prop="name">
      </el-table-column>
      <el-table-column label="描述" prop="desc">
      </el-table-column>
      <el-table-column label="评分" prop="score">
      </el-table-column>
      <el-table-column label="操作" prop="operate">
        <template>
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-dialog title="修改食品信息" v-model="dialogFormVisible">
      <el-form :model="selectTable">
        <el-form-item label="食品名称" label-width="100px">
          <el-input v-model="selectTable.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="食品介绍" label-width="100px">
          <el-input v-model="selectTable.description"></el-input>
        </el-form-item>
        <el-form-item label="食品分类" label-width="100px">
          <el-select v-model="selectIndex" :placeholder="selectMenu.label" @change="handleSelect">
            <el-option v-for="item in menuOptions" :key="item.value" :label="item.label" :value="item.index">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="食品图片" label-width="100px">
          <el-upload class="avatar-uploader" :action="baseUrl + '/v1/addimg/food'" :show-file-list="false" :on-success="handleServiceAvatarScucess" :before-upload="beforeAvatarUpload">
            <img v-if="selectTable.image_path" :src="baseImgPath + selectTable.image_path" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <el-row style="overflow: auto; text-align: center;">
        <el-table :data="specs" style="margin-bottom: 20px;" :row-class-name="tableRowClassName">
          <el-table-column prop="specs" label="规格">
          </el-table-column>
          <el-table-column prop="packing_fee" label="包装费">
          </el-table-column>
          <el-table-column prop="price" label="价格">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button size="small" type="danger" @click="deleteSpecs(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="specsFormVisible = true" style="margin-bottom: 10px;">添加规格</el-button>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateFood">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加规格" v-model="specsFormVisible">
      <el-form :rules="specsFormrules" :model="specsForm">
        <el-form-item label="规格" label-width="100px" prop="specs">
          <el-input v-model="specsForm.specs" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="包装费" label-width="100px">
          <el-input-number v-model="specsForm.packing_fee" :min="0" :max="100"></el-input-number>
        </el-form-item>
        <el-form-item label="价格" label-width="100px">
          <el-input-number v-model="specsForm.price" :min="0" :max="10000"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="specsFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addspecs">确 定</el-button>
      </div>
    </el-dialog> -->
  </div>
</template>
<style>
.el-table .cell {
  text-align: center;
}

.demo-table-expand {
  text-align: left;
  font-size: 0;
}

.demo-table-expand label {
  text-align: left;
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  text-align: left;
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
export default {
  data() {
    return {
      tableData5: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        score: 4.5,
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        score: 4.5,
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        score: 4.5,
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        score: 4.5,
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }]
    }
  }
}
</script>