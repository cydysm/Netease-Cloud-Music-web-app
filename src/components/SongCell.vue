<template>
  <div class="song-cell">
    <div class="md-content song-content">
      <!-- <div class="div-song-cover">
        <img :src="imgPlaceholder">
      </div> -->
      <div class="div-song-index">
        <span class="span-song-index">{{index}}</span>
      </div>
      <div class="div-song-text">
        <div class="song-name">
          <span class="span-song-name">{{name}}</span>
        </div>
        <div class="song-artist-albumn">
          <span class="span-artist">{{artist}}</span>
          <span>&nbsp;-&nbsp;</span>
          <span class="span-albumn">{{album}}</span>
        </div>
      </div>
      <div class="div-song-time">
        <span class="span-song-time" style="display:block">{{parseDuration}}</span>
      </div>
    </div>
  </div>
</template>
<script>
// const imgPlaceholder = require('../assets/img_placeholder.png');

export default {
  name: 'songCell',
  props: {
    index: Number,
    name: String,
    artist: String,
    album: String,
    duration: Number,
  },
  computed: {
    // covert millisecond to 'hh:mm:ss'
    parseDuration() {
      const hours = parseInt(this.duration / 3600000, 10);
      const minutes = parseInt(parseInt(this.duration / 60000, 10) % 60, 10);
      const seconds = parseInt(parseInt(this.duration / 1000, 10) % 60, 10);
      return `${hours > 0 ? `${hours > 9 ? `${hours}:` : `0${hours}:`}` : ''}${
        minutes > 0 ? `${minutes > 9 ? `${minutes}` : `0${minutes}`}` : '00'
      }:${seconds > 0 ? `${seconds > 9 ? `${seconds}` : `0${seconds}`}` : '00'}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.song-content {
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  margin:2vw 5vw 2vw 5vw;
}
.div-song-text {
  flex: 1;
  // max-width: 90%;
  span {
    // max-width: 20vw;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.div-song-time {
  span {
    max-width: 30vw;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.div-song-index, .div-song-time{
  display: flex;
  align-items: center;
}
.song-name, .song-artist-albumn {
  display: flex;
  flex-direction: row;
  padding: 0 5vw 0 5vw;
  max-width: 65vw;
}
.song-artist-albumn {
  margin-top: 2vw;
}
.span-song-name {
  max-width: 45vw;
}
.span-artist, .span-albumn {
  max-width: 20vw;
  font-size: calc(6px + 1vw);
  color: rgba(0, 0, 0, 0.5);
}
</style>
