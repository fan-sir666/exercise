<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <NLink :to="`/detail?id=${item.id}`">{{ item.title }}</NLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style></style>
