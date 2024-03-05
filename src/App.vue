<template>
  <GlobalHeader></GlobalHeader>
  <router-view></router-view>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader.vue";

export default {
  components: {
    GlobalHeader,
  },
};
</script>
