<template>
  <div class="total">
    <span>总价：{{ zjiag }}</span>
    <button>结算</button>
  </div>
</template>

<script>
export default {
  name: "cartTotal",
  props: ["list"],
  computed: {
    zjiag() {
      let sum = 0;
      this.list.forEach(ele => {
        sum += ele.num * ele.jge;
      });
      return sum;
    }
  }
};
</script>

<style>
.container .total {
  background-color: #ffce46;
  height: 50px;
  line-height: 50px;
  text-align: right;
}

.container .total button {
  margin: 0 10px;
  background-color: #dc4c40;
  height: 35px;
  width: 80px;
  border: 0;
}

.container .total span {
  color: red;
  font-weight: bold;
}
</style>
