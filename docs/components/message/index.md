<script setup lang="ts">
import Base from './base.vue'
import Different from './different.vue'
import Closeable from './closeable.vue'
import Textcenter from './textcenter.vue'
</script>

# Message 消息提示
常用于主动操作后的反馈提示。

## 基础用法
从顶部出现，3 秒后自动消失
<div class="example">
  <Base />
</div>

<details>
<summary>查看代码</summary>

```vue
<template>
  <tass-button @click="showMsg">打开消息提示</tass-button>
</template>
<script setup lang="ts">
  import { YumMessage } from 'yumyum-ui';
  function showMsg() {
    YumMessage({
      message: 'this is a message',
      type: 'info'
    });
  }
</script>
```

</details>

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。
<div class="example">
  <Different />
</div>

<details>
<summary>查看代码</summary>

```vue
<template>
  <yum-button type="success" @click="showSuccess">success</yum-button>
  <yum-button type="info" @click="showInfo">info</yum-button>
  <yum-button type="warning" @click="showWarning">warning</yum-button>
  <yum-button type="danger" @click="showError">error</yum-button>
</template>
<script setup lang="ts">
  import { YumMessage } from 'yumyum-ui';
  function showSuccess() {
    YumMessage({
      message: 'this is a success message',
      type: 'success'
    });
  }
  function showInfo() {
    YumMessage({
      message: 'this is a info message',
      type: 'info'
    });
  }
  function showWarning() {
    YumMessage({
      message: 'this is a warning message',
      type: 'warning'
    });
  }
  function showError() {
    YumMessage({
      message: 'this is a error message',
      type: 'error'
    });
  }
</script>
```

</details>

## 可关闭
可以添加关闭按钮。
<div class="example">
  <Closeable />
</div>

<details>
<summary>查看代码</summary>

```vue
<template>
  <yum-button type="success" @click="showSuccess">success</yum-button>
  <yum-button type="info" @click="showInfo">info</yum-button>
  <yum-button type="warning" @click="showWarning">warning</yum-button>
  <yum-button type="danger" @click="showError">error</yum-button>
</template>
<script setup lang="ts">
  import { YumMessage } from 'yumyum-ui';
  function showSuccess() {
    YumMessage({
      message: 'this is a success message',
      type: 'success',
      closeable: true
    });
  }
  function showInfo() {
    YumMessage({
      message: 'this is a info message',
      type: 'info',
      closeable: true
    });
  }
  function showWarning() {
    YumMessage({
      message: 'this is a warning message',
      type: 'warning',
      closeable: true
    });
  }
  function showError() {
    YumMessage({
      message: 'this is a error message',
      type: 'error',
      closeable: true
    });
  }
</script>
```

</details>

## 文字居中
文字居中显示。
<div class="example">
  <Textcenter />
</div>

<details>
<summary>查看代码</summary>

```vue
<template>
    <yum-button @click="showMsg()">文字居中</yum-button>
</template>

<script setup lang="ts">
import { YumMessage } from 'yumyum-ui';
function showMsg() {
    YumMessage({
        message: 'this is a message',
        type: 'info',
        center: true
    });
}
</script>
```

</details>