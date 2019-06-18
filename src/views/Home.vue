<template>
  <div class="home">
    <div class="md-content">
      <span>Hello Stranger ~</span>
      <span>{{rspContent}}</span>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
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
      url: '/ap1/amap',
    }).then((res) => {
      this.rspContent = res.data.province;
    });
  },
  components: {
    // HelloWorld,
  },
};
</script>
