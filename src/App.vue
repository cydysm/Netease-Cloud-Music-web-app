<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title" style="md-title">
            Cloud Music&nbsp;
            <span class="page-title">
              {{pageTitle}}
            </span>
          </span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="showNavigation" md-swipeable>
          <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-title">My App name</span>
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"/>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      showNavigation: false,
      showSidepanel: false,
    };
  },
  created() {
    this.$store.dispatch('setPageTitle', this.$route.meta.title);
  },
  computed: {
    pageTitle() {
      return this.$store.getters.getPageTitle;
    },
  },
  watch: {
    $route: {
      handler(to) {
        this.$store.dispatch('setPageTitle', to.meta.title);
      },
      deep: true,
    },
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // height: 100%;
}
// scrollbar style
// #app /deep/ .md-scrollbar::-webkit-scrollbar {
//   width: 0px;
// }
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}
.md-app-content {
  height: fit-content;
  padding: 0 !important;
  background-color: #F2F2F2;
}
.md-toolbar.md-theme-default.md-primary {
  background-color: rgb(206, 61, 62) !important;
}
.md-toolbar {
  display: flex;
  flex-direction: row;
}
.md-title {
  flex: 1;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: start;
  font-size: calc(16px + 1vw) !important;
}
.page-title {
  font-size: calc(10px + 1vw) !important;
}
// Demo purposes only
.md-drawer {
  // width: 230px;
  // width: 10px !important;
  // max-width: calc(100vw - 200px) !important
}
</style>
