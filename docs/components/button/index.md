<style>
  .example{
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding: 20px;
  }
  /* .yum-button {
    margin:10px 5px;
  } */
  details > summary:first-of-type {
    font-size: 10px;
    padding: 8px 0;
    cursor: pointer;
    color: #1989fa;
  }
</style>
# Button 按钮
常用的操作按钮。
## 基础用法
<div class="example">
  <div>
    <yum-button>默认按钮</yum-button>
    <yum-button type="primary">主要按钮</yum-button>
    <yum-button type="success">成功按钮</yum-button>
    <yum-button type="info">信息按钮</yum-button>
    <yum-button type="warning">警告按钮</yum-button>
    <yum-button type="danger">危险按钮</yum-button>
  </div>
</div>

<details>
<summary>查看代码</summary>

```vue
<template>
  <div>
    <yum-button>默认按钮</yum-button>
    <yum-button type="primary">主要按钮</yum-button>
    <yum-button type="success">成功按钮</yum-button>
    <yum-button type="info">信息按钮</yum-button>
    <yum-button type="warning">警告按钮</yum-button>
    <yum-button type="danger">危险按钮</yum-button>
  </div>
</template>

```

</details>