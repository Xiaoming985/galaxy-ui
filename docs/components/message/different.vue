<template>
    <yum-button type="success" @click="showMsg('success')">success</yum-button>
    <yum-button type="info" @click="showMsg('info')">info</yum-button>
    <yum-button type="warning" @click="showMsg('warning')">warning</yum-button>
    <yum-button type="danger" @click="showMsg('error')">error</yum-button>
</template>

<script setup lang="ts">
import { YumMessage } from '@yumyum-ui/components/message';
function showMsg(type: string) {
    YumMessage({
        message: `this is a ${type} message`,
        type
    });
}
</script>