<template>
  <q-page class="row">
    <div class="flex flex-left">
      <div v-for="i in 50" :key="i">
        {{ i }}
      </div>
    </div>
    <div class="flex flex-right">
      <q-img src="../assets/bg.jpg" style="margin: 50px">
        <h1 class="text-white">Basic</h1>
      </q-img>
    </div>
  </q-page>
</template>
<script>
/* ✓ GOOD */
export default {
  name: "HomePage",
  // ...
};
</script>
