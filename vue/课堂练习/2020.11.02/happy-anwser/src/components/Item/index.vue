<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ itemNum }}</span>
      </header>
      <!-- 答题内容 -->
      <div
        class="item_back item_container_style"
        v-if="this.questions.length > 0"
      >
        <div class="item_list_container">
          <!-- 题干 -->
          <header class="item_title">{{ itemTigan }}</header>
          <!-- 选项 -->
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in questions[itemNum - 1].topic_answer"
              :key="item.topic_answer_id"
              @click="choosed(index, item.topic_answer_id)"
            >
              <span
                class="option_style"
                :class="{ has_choosed: chooseNum == index }"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
          <!-- 下一题按钮 -->
          <span
            class="next_item button_style"
            v-if="itemNum < questions.length"
            @click="nextItem"
          ></span>
          <!-- 提交按钮 -->
          <span
            class="submit_item button_style"
            @click="submitAnswer"
            v-else
          ></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      chooseNum: null, //  选中答案索引
      chooseId: null // 选中答案id
    };
  },
  created() {
    this.$store.dispatch("getData");
  },
  methods: {
    // 选择的答案
    choosed(i, id) {
      this.chooseNum = i;
      this.chooseId = id;
    },
    //下一题
    nextItem() {
      // 判断是否作答
      if (this.chooseNum != null) {
        // 作答 清空chooseNum
        this.chooseNum = null;
        // 传参 作答的哪个题的id
        this.$store.dispatch("addNum", this.chooseId);
      } else {
        // 未作答
        alert("你还没有选择答案");
      }
    },
    // 提交按钮
    submitAnswer() {
      // 判断是否作答
      if (this.chooseNum != null) {
        // 传参 作答的哪个题的id
        this.$store.dispatch("addNum", this.chooseId);
        // 跳转到打分页面
        this.$router.push("/score");
      } else {
        // 未作答
        alert("你还没有选择答案");
      }
    }
  },
  computed: {
    ...mapState(["itemNum", "questions"]),
    // 获取题干
    itemTigan() {
      return this.questions[this.itemNum - 1].topic_name;
    }
  }
};
</script>

<style lang="scss">
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
  // 正确答案的样式
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
