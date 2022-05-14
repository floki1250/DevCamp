<template>
  <q-page>
    <div class="quest_box">
      <div class="user row q-col-gutter-x-md">
        <div class=".col">
          <q-avatar
            size="50px"
            font-size="20px"
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
          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
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
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      question: ref(
        "<pre><b><font size='7'>This is a Question Box !</font></b></pre>"
      ),

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
  },
};
</script>
