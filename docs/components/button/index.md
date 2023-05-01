<style>
  .example{
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding: 20px;
  }
  /* .ga-button {
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
    <ga-button>默认按钮</ga-button>
    <ga-button type="primary">主要按钮</ga-button>
    <ga-button type="success">成功按钮</ga-button>
    <ga-button type="info">信息按钮</ga-button>
    <ga-button type="warning">警告按钮</ga-button>
    <ga-button type="danger">危险按钮</ga-button>
  </div>
</div>

<details>
<summary>查看代码</summary>

```vue
<template>
  <div>
    <ga-button>默认按钮</ga-button>
    <ga-button type="primary">主要按钮</ga-button>
    <ga-button type="success">成功按钮</ga-button>
    <ga-button type="info">信息按钮</ga-button>
    <ga-button type="warning">警告按钮</ga-button>
    <ga-button type="danger">危险按钮</ga-button>
  </div>
</template>

```

</details>