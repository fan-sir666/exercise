<template>
  <div>
    <ul>
      <li v-for="item in topics" :key="item.id">
        <NLink :to="`/detail?id=${item.id}`">{{ item.title }}</NLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    let { data: topics } = await $http.$get("/topics");
    return {
      topics
    };
  }
};
</script>
