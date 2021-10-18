<template>
  <div>
    <h1>首页</h1>
  </div>
</template>

<script>
export default {
  // 页面中配置TDK
  //  hid 的作用:为 meta 标签配一个唯一的标识编号,页面head有他会覆盖nuxt.config中的页面描述信息,反之追加一个
  head() {
    return {
      title: "首页标题",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "来了老弟,好嗨呦!"
        }
      ]
    };
  }
};
</script>
