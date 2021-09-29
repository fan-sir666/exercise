<template>
  <div>
      <h3>{{toName}}</h3>
  </div>
</template>

<script>
export default {
    props:["toName"],
    created(){
        console.log(this.toName);
    }
}
</script>

<style>

</style>