<template>
  <div class="playlist-detail">
    <div class="md-content">
      <div class="md-content playlist-info">
        <img
          class="playlist-cover-img"
          :src="picPath">
        <div class="md-content playlist-info-text">
          <span class="playlist-name">{{playlistName}}</span>
          <span class="playlist-creator">{{playlistCreator}}</span>
          <div class="md-content sub-comment-share">
            <div class="md-content sub-comment-share-item">
              <md-icon>mode_comment</md-icon>
              <span>{{commentCount}}</span>
            </div>
            <div class="md-content sub-comment-share-item">
              <md-icon>share</md-icon>
              <span>{{shareCount}}</span>
            </div>
            <div class="md-content sub-comment-share-item">
              <md-icon>favorite</md-icon>
              <span>{{subscribedCount}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="md-content playlist-content">
        <div v-for="song in songs" :key="song.id">
          <div>{{song.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const imgPlaceholder = require('../assets/img_placeholder.png');

const CheckCount = (count) => {
  console.log(count);
  let rtn;
  if (count <= 1e5 - 1) {
    rtn = count;
  } else if (count > 1e5 - 1 && count <= 1e9 - 1) {
    rtn = `${parseInt(count / 1e4, 10)}万`;
  } else rtn = `${parseInt(count / 1e8, 10)}亿`;
  console.log(rtn);
  return rtn;
};

export default {
  name: 'playlistDetail',
  data() {
    return {
      id: null,
      picPath: imgPlaceholder,
      playlistName: null,
      playlistCreator: null,
      shareCount: null,
      songs: null,
      commentCount: null,
      subscribedCount: null,
    };
  },
  created() {
    this.id = this.$route.query.playlistId;
    this.fetchPlaylistDetail(this.id)
      .then((res) => {
        this.songs = res.data.result.tracks;
        console.log(this.songs);
        this.playlistName = res.data.result.name;
        this.playlistCreator = res.data.result.creator.nickname;
        this.commentCount = CheckCount(res.data.result.commentCount);
        this.shareCount = CheckCount(res.data.result.shareCount);
        this.subscribedCount = CheckCount(res.data.result.subscribedCount);
        this.$store.dispatch('setPageTitle', this.playlistName);
        this.picPath = res.data.result.coverImgUrl;
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
.playlist-detail {
  background-color: #F2F2F2;
}
.playlist-info {
  height: 60vw;
  min-height: 240px;
  max-height: 300px;
  display: flex;
  flex-direction: row;
  // align-content: space-around;
}
.playlist-cover-img {
  width: 45vw;
  height: 45vw;
  min-width: 75px;
  min-height: 75px;
  max-width: 200px;
  max-height: 200px;
  margin: 5vw;
  border-radius: 2vw;
}
.playlist-info-text {
  display: flex;
  flex-direction: column;
  margin-top: 5vw;
  height: 45vw;
  min-height: 75px;
  max-height: 200px;
  flex: 1;
  padding-right: 5vw;
  justify-content: space-between;
  .md-icon {
    height: calc(20px + 1vw);
    width: calc(20px + 1vw);
  }
  span {
    display: block;
  }
  .playlist-name {
    font-size: calc(16px + 1vw);
    text-align: start;
  }
  .playlist-creator {
    font-size: calc(10px + 1vw);
    margin-top: calc(10px + 1vw);
    text-align: start;
  }
}
.sub-comment-share {
  display: flex;
  flex-direction: row;
  margin-top: calc(10px + 1vw);
  min-width: 75px;
  max-width: 200px;
  justify-content: space-between;
  span {
    font-size: calc(10px + 1vw);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
