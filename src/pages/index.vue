<template>
  <div class="home">
    <img src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  metaInfo: {
    title: 'index meta test',
  },
  components: {
    HelloWorld,
  },
})
export default class About extends Vue {}
</script>
