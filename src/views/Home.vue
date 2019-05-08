<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <span>Hello Stranger ~</span>
    <span>{{rspContent}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      rspContent: null,
    };
  },
  mounted() {
    this.axios({
      method: 'get',
      url: '/amap',
    }).then((res) => {
      this.rspContent = res;
    });
  },
  components: {
    // HelloWorld,
  },
};
</script>
