<template>
  <div>
    <div>Hello, PNPM + Monorepo + Vite + Vue + TS + Sass</div>
    <yum-button>默认按钮</yum-button>
    <yum-button type="primary">主要按钮</yum-button>
    <yum-button type="success">成功按钮</yum-button>
    <yum-button type="info">信息按钮</yum-button>
    <yum-button type="warning">警告按钮</yum-button>
    <yum-button type="danger">危险按钮</yum-button>
    <yum-button type="primary" loading>loading...</yum-button>
    <yum-button type="success" icon="yum-icon-check_circle">
      带图标按钮
    </yum-button>
    <div>
      <yum-icon name="loading" />
      <i class="yum-icon-loading"></i>
    </div>
    <div>
      <yum-button type="success" @click="showMessage('success')">sucess message</yum-button>
      <yum-button type="info" @click="showMessage('info')">info message</yum-button>
      <yum-button type="warning" @click="showMessage('warning')">warning message</yum-button>
      <yum-button type="danger" @click="showMessage('error')">error message</yum-button>
      <yum-button type="info" @click="showMessage('closeable', true)">closeable message</yum-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { YumMessage } from '@yumyum-ui/components';

function showMessage (type: String, closeable: Boolean = false) {
  YumMessage({
    message: `${type} message`,
    type: type,
    center: false,
    showIcon: true,
    duration: closeable ? 0 : 3000,
    closeable: closeable
  });
};
</script>

<style lang="scss" scoped></style>
