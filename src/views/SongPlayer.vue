<template>
  <div class="song-player">
    <div class="md-content">
      <div class="md-content">
        <div></div>
      </div>
      <div class="md-content"></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "songPlayer",
  data() {
    return {
      songId: null,
      songName: null,
    };
  },
  created() {
    this.songId = this.$route.query.id;
    this.fetchSongDetail(this.songId).then((res) => {
      const result = res.data.songs[0];
      this.songName = result.name;
      this.$store.dispatch("setPageTitle", this.songName);
    });
  },
  methods: {
    fetchSongDetail(id) {
      return this.axios({
        method: "GET",
        url: "http://music.163.com/api/song/detail",
        params: {
          ids: `[${id}]`,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
