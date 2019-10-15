<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  metaInfo: {
    title: 'about meta test',
  },
})
export default class About extends Vue {}
</script>
