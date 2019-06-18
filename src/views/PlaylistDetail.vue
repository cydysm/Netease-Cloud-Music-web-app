<template>
  <div class="playlist-detail"></div>
</template>
<script>
export default {
  name: 'playlistDetail',
  data() {
    return {
      id: null,
    };
  },
  created() {
    this.id = this.$route.query.playlistId;
    this.fetchPlaylistDetail(this.id)
      .then((res) => {
        this.$store.dispatch('setPageTitle', res.data.result.name);
        // this.$set(this.$route.meta, 'title', res.data.result.name);
        // console.log(this.$route);
      });
  },
  methods: {
    fetchPlaylistDetail(id) {
      return this.axios({
        method: 'GET',
        url: 'http://music.163.com/api/playlist/detail',
        params: {
          id,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
