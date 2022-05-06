<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="eva-menu" />
        <img src="../assets/logo.png" alt="" srcset="" width="50" />
        <q-toolbar-title class="title"> Dev Camp </q-toolbar-title>

        <q-input
          dense
          rounded
          outlined
          v-model="search"
          class="q-ml-md"
          placeholder="Search ..."
          style="width: 50%"
        >
          <template v-slot:append>
            <q-icon v-if="search === ''" name="search" color="teal" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="search = ''"
              color="teal"
            />
          </template>
        </q-input>

        <q-space />
        <div style="font-weight: bold; margin-left: 10px">Adem DR</div>
        <div>
          <q-btn round flat @click="onClick"
            ><q-avatar
              size="35px"
              font-size="30px"
              color="teal"
              text-color="white"
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
      </q-drawer>
    </div>

    <q-page-container>
      <q-page>
        <div class="quest_box">hell</div>
        <div v-for="n in 15" :key="n">
          <div class="ans_box">
            <q-card-section>
              <q-avatar
                size="50px"
                font-size="30px"
                color="teal"
                text-color="white"
                >A</q-avatar
              >
            </q-card-section>
            <q-card-section>
              <div class="row">
                Lorem ipsum dolor sit amet, consectetur adipisicing
              </div>
            </q-card-section>
          </div>
        </div>
        <div class="editor">
          <QuillEditor theme="snow" toolbar="full" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  data() {
    return {
      search: "",
      drawer: false,
      miniState: true,
      sidebar: true,
    };
  },
  components: {
    QuillEditor,
  },
};
</script>
