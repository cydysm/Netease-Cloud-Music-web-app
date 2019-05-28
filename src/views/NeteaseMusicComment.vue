<template>
  <div class="netease-music-comment">
    <button @click="fetchData">test</button>
  </div>
</template>
<script>
export default {
  name: 'neteaseMusicComment',
  data() {
    return {
      randomCommentUrl: 'http://meaningless.cn/ap1/netease_music/song_random_comment',
      devRandomCommentUrl: 'http://127.0.0.1:5000/netease_music/song_random_comment',
      content: {},
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
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
