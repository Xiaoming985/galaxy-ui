<template>
    <yum-button @click="showMsg">打开消息提示</yum-button>
</template>
<script setup lang="ts">
import { YumMessage } from '@yumyum-ui/components/message';
function showMsg() {
    YumMessage({
        message: 'this is a message',
        type: 'info'
    });
}
</script>