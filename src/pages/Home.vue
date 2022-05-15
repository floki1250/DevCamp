<template>
  <q-page class="flex flex-center">
    <q-img src="../assets/bg.jpg" style="margin: 50px">
      <h1 class="text-white">Basic</h1>
    </q-img>
    <div v-for="i in 50" :key="i">
      {{ i }}
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
