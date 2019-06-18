<template>
  <div class="recommend-play-list">
    <div class="md-content parent-content">
      <div class="md-content content"
        v-for="playlist in recommendPlayLists"
        :key="playlist.id"
        @click="goToPlaylist(playlist.id)">
        <img
          class="playlist-img"
          :src="defaultImg"
          :onload="loadImg(playlist.picUrl)"
          :onerror="defaultImg"
          :title="playlist.name">
        <span class="playlist-name">{{playlist.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
const imgPlaceholder = require('../assets/img_placeholder.png');

export default {
  name: 'recommendPlayLists',
  data() {
    return {
      recommendPlayLists: null,
      defaultImg: imgPlaceholder,
    };
  },
  created() {
    // return true;
    this.axios({
      method: 'GET',
      url: 'https://music.163.com/api/discovery/recommend/resource',
      withCredentials: true,
    }).then((res) => {
      // console.log(res);
      // this.$set(this.recommendPlayLists,...res.data.recommend);
      this.recommendPlayLists = res.data.recommend;
    });
  },
  methods: {
    loadImg(imgSrc) {
      // console.log(imgSrc);
      return `this.onload=null;this.src="${imgSrc}";`;
    },
    goToPlaylist(e) {
      this.$router.push({ name: 'playlistDetail', query: { playlistId: e } });
    },
  },
};
</script>
<style lang="scss" scoped>
.recommend-play-list {
  box-sizing: unset;
}
.parent-content {
  display: grid;
  padding-top: 2vw;
  padding-bottom: 8vw;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, 30vw);
  grid-template-rows: repeat(auto-fill, 30vw);
  grid-row-gap: 5vw;
  grid-column-gap: 2vw;
  background-color: #F2F2F2;
}
.content {
  width: 25vw;
  height: 25vw;
  min-width: 75px;
  min-height: 75px;
  max-width: 200px;
  max-height: 200px;
  padding: 8px;
  flex-wrap: wrap;
  // background-color: blue;
  justify-content: space-between;
}
.playlist-name {
  margin-top: 1vw;
  font-size: 1vw;
  letter-spacing: 1px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.playlist-img {
  border-radius: 5px;
}
// .content-playlist {
//   width: 20vw;
//   height: 20vw;
//   min-width: 75px;
//   min-height: 75px;
//   max-width: 125px;
//   max-height: 125px;
//   margin: 8px;
//   background-color: blue;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
</style>
