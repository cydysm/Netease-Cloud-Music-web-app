<template>
  <div class="song-player"></div>
</template>
<script>
export default {
  name: 'songPlayer',
  data() {
    return {
      songId: null,
      songName: null,
    };
  },
  created() {
    this.songId = this.$route.query.id;
    const feeType = this.$route.query.fee_type;
    this.fetchSongDetail(this.songId)
      .then((res) => {
        const result = res.data.songs[0];
        this.songName = result.name;
        console.log(result);
        this.$store.dispatch('setPageTitle', this.songName);
      });
  },
  methods: {
    fetchSongDetail(id) {
      return this.axios({
        method: 'GET',
        url: 'http://music.163.com/api/song/detail',
        params: {
          ids: `[${id}]`,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
