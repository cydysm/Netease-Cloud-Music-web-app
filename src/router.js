import Vue from 'vue';
import Router from 'vue-router';
// import NeteaseMusicComment from './views/NeteaseMusicComment.vue';
// import Home from './views/Home.vue';
import RecommandPlaylist from './views/RecommendPlaylist.vue';
import PlaylistDetail from './views/PlaylistDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommandPlaylist',
      component: RecommandPlaylist,
      meta: {
        title: '热门&私人推荐歌单',
        keepAlive: true,
      },
      // component: NeteaseMusicComment,
    },
    {
      path: '/playlist_detail',
      name: 'playlistDetail',
      component: PlaylistDetail,
      meta: {
        title: '歌单详情',
      },
    },
    // {
    //   path: '/',
    //   name: 'neteaseMusicComment',
    //   component: NeteaseMusicComment,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: 'about' */ './views/About.vue'),
    // },
  ],
});
