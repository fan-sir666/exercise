<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ tiHao }}</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style" v-if="wenTi.length > 0">
        <div class="item_list_container">
          <!-- 题干 -->
          <header class="item_title">{{ wenTg }}</header>
          <!-- 选项 -->
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in wenTi[tiHao - 1].topic_answer"
              :key="item.topic_answer_id"
              @click="xtGliang(index, item.topic_answer_id)"
            >
              <span
                class="option_style"
                :class="{ has_choosed: t_index == index }"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 提交按钮 -->
      <span
        class="next_item button_style"
        v-if="tiHao < wenTi.length"
        @click="nextWenti"
      ></span>
      <span class="submit_item button_style" @click="subWenti" v-else></span>
    </section>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    // vuex对象
    let store = useStore();
    // router对象
    let router = useRouter();
    // console.log(useRouter());
    //#region 渲染题号
    let tiHao = computed(() => {
      return store.state.tiHao;
    });
    //#endregion

    //#region 获取答题数据
    store.dispatch("getData");
    let wenTi = computed(() => store.state.wenTi);
    // 题干
    let wenTg = computed(() => {
      return wenTi.value[tiHao.value - 1].topic_name;
    });
    // 让选项高亮
    let t_index = ref(null);
    let t_id = ref(null);

    function xtGliang(index, id) {
      t_index.value = index;
      t_id.value = id;
    }
    //#endregion

    //#region 下一题
    function nextWenti() {
      // 判断t_index 索引是否为空
      if (t_index.value != null) {
        //清空
        t_index.value = null;
        store.dispatch("addId", t_id.value);
      } else {
        alert("该题还未作答,请答题!!!");
      }
    }
    //#endregion

    //#region 提交题
    function subWenti() {
      // 判断t_index 索引是否为空
      if (t_index.value != null) {
        //清空
        t_index.value = null;
        store.dispatch("addId", t_id.value);
        // 跳转
        // useRouter().push("/score")
        // let router = useRouter();
        // console.log(useRouter());
        router.push("/score");

      } else {
        alert("该题还未作答,请答题!!!");
      }
    }
    //#endregion

    return {
      // 题号
      tiHao,
      // 题干
      wenTg,
      // 问题
      wenTi,
      xtGliang,
      t_index,
      // 下一题
      nextWenti,
      // 提交
      subWenti
    };
  }
};
</script>

<style lang="scss">
.home_container {
  height: 100%;
  background-image: url("/images/1-1.jpg");
}
.next_item {
  background-image: url("/images/2-2.png");
}

.submit_item {
  background-image: url("/images/3-1.png");
}

.item_back {
  background-image: url("/images/2-1.png");
  background-size: 100% 100%;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list_container {
  margin: 2.5rem;
  padding: 0;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
