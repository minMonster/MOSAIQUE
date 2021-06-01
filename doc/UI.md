# KSherMall UI 规范
## 列表筛选表单
* 表单内元素使用 size="small" 控制元素大小
* label 不加 ： 号
* 表单内输入元素 宽度使用通用 245px 宽度
* label-width 使用 140px
```vue
<el-form ref="searchform" :rules="searchRules" size="small" :model="searchForm" label-width="140px" :inline="true">
<el-form-item label="活动状态" prop="status">
    <el-select v-model="searchForm.status" style="width: 245px;" clearable placeholder="请选择">
        <el-option
            v-for="(option, i) in statusOption"
            :key="i"
            :label="option.label"
            :value="option.value"
        />
    </el-select>
</el-form-item>
</el-form>
```
## 列表分页参照拼团活动列表
```vue
<el-card class="flex flex-x-end m-t-base">
      <el-pagination
        layout="total,sizes,prev, pager, next,jumper"
        :total="pagination.total"
        :page-size="pagination.size"
        :current-page.sync="pagination.page"
        @size-change="pagination.size=$event"
        @current-change="pagination.page=$event"
      />
</el-card>
```

## 列表操作统一使用 button[type=text]
```vue
<el-button type="text">文字按钮</el-button>
```
颜色控制配合字体颜色使用
```vue
<el-button class="text-success" type="text">文字按钮</el-button>
```
## 内边距、外边距
规范使用 15px 的 class 类
* .m-t-base margin-top: 15px;
* .m-b-base margin-bottom: 15px;
* .m-l-base margin-left: 15px;
* .m-r-base margin-right: 15px;
* .m-base margin: 15px;
* .m-0-base margin: 0 15px;
* .m-base-0 margin: 15px 0;
* .p-t-base padding-top: 15px;
* .p-b-base padding-bottom: 15px;
* .p-l-base padding-left: 15px;
* .p-r-base padding-right: 15px;
* .p-base padding: 15px;
* .p-0-base padding: 0 15px;

## 字体颜色
* .text-primary
* .text-warning
* .text-success
* .text-danger
* .text-info
```scss
// 主题颜色类
$colors: (
  primary: $color-primary,
  warning: $color-warning,
  success: $color-success,
  danger: $color-danger,
  info: $color-info,
);

@each $key, $value in $colors {
  //  颜色类 text-primary
  .text-#{$key} {
    color: $value;
  }
}
```

## 表单内输入元素 添加 clearable 属性快捷删除属性
```vue
<el-input clearable></el-input>
<el-select v-model="value" clearable placeholder="请选择"></el-select>
```

## 表格表头居中方式

居中

## 表格都加上 border 属性

## 字体大小
```scss
f-extra-small，f-small，f-base，f-medium，f-large，f-extra-large
```
