<template>
  <q-layout view="hHh Lpr lff">
    <q-header reveal>
      <q-scroll-observer @scroll="onScroll" />
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="eva-menu" />
        <img src="../assets/logo.png" alt="" srcset="" width="50" />
        <q-toolbar-title class="title"> Dev Camp </q-toolbar-title>
        <q-btn color="primary" icon="search" @click="onClick" flat round />

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
        <h1 v-for="i in 10" :key="i">SideBar Here</h1>
      </q-drawer>
    </div>

    <q-page-container>
      <q-page>
        <div class="quest_box">
          <div class="user row q-col-gutter-x-md">
            <div class=".col">
              <q-avatar
                size="50px"
                font-size="30px"
                color="orange"
                text-color="white"
                >A</q-avatar
              >
            </div>

            <div class=".col">
              <p class="questionUser">User Asked Here</p>
              <p class="timec_checke wrap">Question Date 18/12/2015</p>
            </div>
          </div>

          <q-editor
            :dark="false"
            v-model="question"
            min-height="5rem"
            max-height=""
            flat
            :toolbar="null"
            readonly="true"
            content-style="word-wrap: break-word;width:100%;height:fit-content"
          />
        </div>
        <q-separator spaced inset />
        <div v-for="n in 15" :key="n">
          <div class="ans_box">
            <q-card-section>
              <div class="user row q-col-gutter-x-md">
                <div class=".col">
                  <q-avatar
                    size="50px"
                    font-size="30px"
                    color="teal-4"
                    text-color="white"
                    >A</q-avatar
                  >
                </div>

                <div class=".col">
                  <p class="questionUser">User answer Here</p>
                  <p class="timec_checke wrap">Question Date 18/12/2015</p>
                </div>
              </div>
            </q-card-section>
            <div>
              <q-editor
                :dark="false"
                v-model="qeditor"
                min-height="5rem"
                max-height=""
                flat
                :toolbar="null"
                readonly="true"
                content-style="word-wrap: break-word;width:100%;height:fit-content"
              />
            </div>
          </div>
        </div>
        <div class="editor_box">
          <q-editor
            v-model="qeditor"
            :dense="$q.screen.lt.md"
            :toolbar="[
              [
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify'],
                },
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify'],
                },
              ],
              [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript',
              ],
              ['token', 'hr', 'link', 'custom_btn'],
              ['print', 'fullscreen'],
              [
                {
                  label: $q.lang.editor.formatting,
                  icon: $q.iconSet.editor.formatting,
                  list: 'no-icons',
                  options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                },
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7',
                  ],
                },
                {
                  label: $q.lang.editor.defaultFont,
                  icon: $q.iconSet.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'default_font',
                    'arial',
                    'arial_black',
                    'comic_sans',
                    'courier_new',
                    'impact',
                    'lucida_grande',
                    'times_new_roman',
                    'verdana',
                  ],
                },
                'removeFormat',
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

              ['undo', 'redo'],
              ['viewsource'],
            ]"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana',
            }"
          />
          <q-space />
          <q-btn color="primary" icon="check" label="OK" @click="test" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import { h } from "vue";

import { ref } from "vue";
export default {
  data() {
    return {
      question: ref(
        "<pre><b><font size='7'>This is a Question Box !</font></b></pre>"
      ),
      scrollPosition: 0,
      search: "",
      drawer: false,
      miniState: true,
      sidebar: true,
      field: "",
      qeditor: ref(
        "<pre>Check out the two different types of dropdowns" +
          ' in each of the "Align" buttons.</pre> '
      ),
    };
  },
  components: {},
  methods: {
    onScroll(info) {
      this.scrollPosition = info.position.top;
    },
    test() {
      this.field = h(this.qeditor);
      console.log(this.qeditor);
      console.log(this.$refs.header);
    },
  },
};
</script>
