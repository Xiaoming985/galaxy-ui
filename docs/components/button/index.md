<style>
  .example{
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding: 20px;
  }
  /* .yam-button {
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
    <yam-button>默认按钮</yam-button>
    <yam-button type="primary">主要按钮</yam-button>
    <yam-button type="success">成功按钮</yam-button>
    <yam-button type="info">信息按钮</yam-button>
    <yam-button type="warning">警告按钮</yam-button>
    <yam-button type="danger">危险按钮</yam-button>
  </div>
</div>

<details>
<summary>查看代码</summary>

```vue
<template>
  <div>
    <yam-button>默认按钮</yam-button>
    <yam-button type="primary">主要按钮</yam-button>
    <yam-button type="success">成功按钮</yam-button>
    <yam-button type="info">信息按钮</yam-button>
    <yam-button type="warning">警告按钮</yam-button>
    <yam-button type="danger">危险按钮</yam-button>
  </div>
</template>

```

</details>