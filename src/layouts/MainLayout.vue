<template>
  <q-layout view="hHh Lpr lff">
    <q-header reveal>
      <q-scroll-observer @scroll="onScroll" />
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="eva-menu" />
        <img src="../assets/logo.png" alt="" srcset="" width="50" />
        <q-toolbar-title class="title"> Dev Camp </q-toolbar-title>
        <transition
          v-if="show == true"
          appear
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeInLeft"
        >
          <q-input
            v-model="text"
            type="text"
            rounded
            standout
            dense
            placeholder="Search"
            class="search_input"
          />
        </transition>

        <q-btn color="primary" icon="search" @click="show = !show" flat round />

        <div style="font-weight: bold; margin-left: 10px">Adem DR</div>
        <div>
          <q-btn round flat @click="onClick"
            ><q-avatar size="35px" color="teal" text-color="white"
              ><img
                :src="'https://api.multiavatar.com/Adem%20DARDOUR.svg'"
                alt="" /></q-avatar
          ></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="200"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="eva-home-outline" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="eva-message-square-outline" />
            </q-item-section>

            <q-item-section> Messages </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="eva-people-outline" />
            </q-item-section>

            <q-item-section> Public </q-item-section>
          </q-item>
          <q-space />
          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="eva-settings-outline" />
            </q-item-section>

            <q-item-section> Settings </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <div class="sidebar">
      <q-drawer side="right" v-model="sidebar" :width="400" :breakpoint="800">
        <h1 v-for="i in 10" :key="i">SideBar Here</h1>
      </q-drawer>
    </div>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      scrollPosition: 0,
      search: "",
      drawer: false,
      miniState: true,
      sidebar: true,
      field: "",
    };
  },
  components: {},
  methods: {
    onScroll(info) {
      this.scrollPosition = info.position.top;
    },
  },
};
</script>
