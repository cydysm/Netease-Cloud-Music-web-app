<template>
  <div class="netease-music-comment">
    <button @click="getRandomID">test</button>
  </div>
</template>
<script>
export default {
  name: 'neteaseMusicComment',
  data() {
    return {
      apiRandomID: '/api/album/18905',
      sunnyDayID: '',
      content: {},
    };
  },
  created() {
    // this.fetchData();
    this.getRandomID().then((resp) => {
      console.log(resp);
    });
  },
  methods: {
    getRandomID() {
      return this.axios({
        method: 'GET',
        url: this.apiRandomID,
        withCredentials: true,
      });
    },
    getDailyComment() {
      return this.axios({
        method: '',
      });
    },
    fetchData() {
      this.axios({
        method: 'GET',
        url: this.devRandomCommentUrl,
        // url: this.randomCommentUrl,
      }).then((resp) => {
        // console.log(resp.data);
        Object.assign(this.content, resp.data.data);
        console.log(this.content);
      });
    },
  },
};
</script>
<style scoped>
</style>
