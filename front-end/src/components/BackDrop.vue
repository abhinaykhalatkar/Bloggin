<template>
    <div class="transbox">
  </div>
</template>
<script>
export default {
  name: "BackDrop"
}
</script>
<style>
div.transbox {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.242);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  font-weight: bold;
  height:100%;
  width:100%;
  z-index: 1;
}
</style>