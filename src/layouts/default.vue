<template>
  <div>
    <router-view />
    <p>This is a default layout</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ComponentName extends Vue {}
</script>

<style scoped></style>
