<template>
  <div class="recommend-play-list">
    <div class="md-content parent-content">
      <div class="md-content grid-tag" v-if="hotRecommendPlayLists">
        <div>
          <span>热门推荐</span>
        </div>
      </div>
      <div class="md-content content-hot-recommend"
        v-for="playlist in hotRecommendPlayLists"
        :key="playlist.id"
        @click="goToPlaylist(playlist.id)">
        <img
          class="playlist-img"
          :src="defaultImg"
          :onload="loadImg(playlist.coverImgUrl)"
          :onerror="defaultImg"
          :title="playlist.name">
        <span class="playlist-name">{{playlist.name}}</span>
      </div>
      <div class="md-content grid-tag" v-if="recommendPlayLists">
        <div>
          <span>私人推荐</span>
        </div>
      </div>
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
      hotRecommendPlayLists: null,
      defaultImg: imgPlaceholder,
    };
  },
  created() {
    this.getHotRecommend()
      .then((res) => {
        this.hotRecommendPlayLists = res.data.playlists;
      });
    this.getPersonalRecommend()
      .then((res) => {
        this.recommendPlayLists = res.data.recommend;
      })
      .catch(err => console.log(err));
  },
  methods: {
    loadImg(imgSrc) {
      return `this.onload=null;this.src="${imgSrc}";`;
    },
    getPersonalRecommend() {
      return this.axios({
        method: 'GET',
        url: 'https://music.163.com/api/discovery/recommend/resource',
        withCredentials: true,
      });
    },
    getHotRecommend() {
      return this.axios({
        method: 'GET',
        url: 'https://music.163.com/api/playlist/category/list',
        params: {
          cat: '全部',
          limit: 8,
          offset: 0,
        },
      });
    },
    goToPlaylist(e) {
      this.$router.push({ name: 'playlistDetail', query: { playlistId: e } });
    },
  },
};
</script>
<style lang="scss" scoped>
.recommend-play-list{
  box-sizing: unset;
  height: 100%;
  background-color: #F2F2F2;
}
.parent-content {
  // height: 100%;
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
.content, .content-hot-recommend, .grid-tag{
  width: 25vw;
  height: 25vw;
  min-width: 75px;
  min-height: 75px;
  max-width: 200px;
  max-height: 200px;
  padding: 8px;
  flex-wrap: wrap;
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
  width: 25vw;
  height: 25vw;
  min-width: 75px;
  min-height: 75px;
  max-width: 200px;
  max-height: 200px;
}
.grid-tag {
  div {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: rgb(206, 61, 62);
    border-radius: 5px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #FFF;
  }
}
</style>
