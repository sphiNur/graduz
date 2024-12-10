<script setup>
import {NLayout} from "naive-ui"
import { NMessageProvider } from 'naive-ui'
</script>

<template>
  <n-message-provider>
    <n-layout position="absolute" style="height: 100%; width: 100%; margin: 0; padding: 0;" :native-scrollbar="false">
    

    <router-view></router-view>
  </n-layout>
  </n-message-provider>
  
</template>

<style scoped>

</style>
