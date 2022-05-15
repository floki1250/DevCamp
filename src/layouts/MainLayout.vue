<template>
  <q-layout view="hHh Lpr lff">
    <q-header
      reveal
      :class="scrollPosition > 0 ? 'headerShadowOn' : 'headerShadowOff'"
    >
      <q-scroll-observer @scroll="onScroll" />
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="eva-menu" />
        <img src="../assets/logo.png" alt="" srcset="" width="50" />
        <q-toolbar-title class="title"> Dev Camp </q-toolbar-title>
        <transition
          name="custom-classes"
          enter-active-class="animate__animated animate__fadeInRight"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <q-input
            v-show="show == true"
            v-model="text"
            type="text"
            rounded
            standout="bg-teal-5 text-white"
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
          <q-item clickable v-ripple:green to="/Home">
            <q-item-section avatar>
              <q-icon name="eva-home-outline" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item active clickable v-ripple:blue to="/Questions">
            <q-item-section avatar>
              <q-icon name="eva-message-square-outline" />
            </q-item-section>

            <q-item-section> Messages </q-item-section>
          </q-item>

          <q-item clickable v-ripple:blue to="/Questions">
            <q-item-section avatar>
              <q-icon name="eva-people-outline" />
            </q-item-section>

            <q-item-section> Public </q-item-section>
          </q-item>
          <q-space />
          <q-separator />

          <q-item clickable v-ripple:blue to="/Questions">
            <q-item-section avatar>
              <q-icon name="eva-settings-outline" />
            </q-item-section>

            <q-item-section> Settings </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
import "animate.css";
export default {
  data() {
    return {
      show: false,
      scrollPosition: 0,
      search: "",
      drawer: false,
      miniState: true,

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
