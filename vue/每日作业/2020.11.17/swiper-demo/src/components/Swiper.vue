<template>
  <div>
    <div class="swiper-container" v-if="studentMien.length>0">
      <swiper :options="swiperOption">
        <!-- 添加的图片 -->
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in studentMien"
          :key="index"
        >
          <img :src="item.picImg" />
          <span>{{ index }}</span>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 指示点 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      studentMien: [],
      swiperOption: {
        //指示点
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 一次显示几个
        slidesPerView: 3,
        // 几个分为一组
        slidesPerGroup: 3,
        uniqueNavElements: false,
        //循环
        loop: true,
        // 切换速度
        speed: 1000,
        //自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      },
    };
  },
  created() {
    this.student();
  },
  methods: {
    async student() {
      let res = await this.$Axios.get("/web/home/studentList");
      console.log(res);
      this.studentMien = res.data.data;
    },
  },
};
</script>

<style>
.swiper-container {
  position: relative;
  margin: 100px auto;
  width: 1200px;
}
.swiper-slide {
  margin-right: 20px;
}
.swiper-pagination-bullet {
  margin-right: 6px;
}

</style>