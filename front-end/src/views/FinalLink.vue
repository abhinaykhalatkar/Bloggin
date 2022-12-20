<template>
 <div class="container">
	<div class="container__item">
		<form class="form">
			<input type="text" v-model="this.$store.state.currentPublishedLink"  class="form__field" />
			<button type="button" class="btn btn--primary btn--inside uppercase">Copy</button>
		</form>
	</div>
	
	<div class="container__item container__item--bottom">

	</div>
</div>
  </template>
  <script>
  export default {

  };
  </script>
  <style lang="scss" scoped>


.container {
    background: #f5f6fa;
  color: #9c9c9c;
  font: 1rem "PT Sans", sans-serif;
  height: 100vh;
  width: 100vw;

}



.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.uppercase {
  text-transform: uppercase;
}

.btn {
  display: inline-block;
  background: transparent;
  color: inherit;
  font: inherit;
  border: 0;
  outline: 0;
  padding: 0;
  transition: all 200ms ease-in;
  cursor: pointer;
}
.btn--primary {
  background: #7f8ff4;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;
}
.btn--primary:hover {
  background: #6c7ff2;
}
.btn--primary:active {
  background: #7f8ff4;
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
.btn--inside {
  margin-left: -96px;
}

.form__field {
  width: 50vw;
  background: #fff;
  color: #666666;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
  font-size: large;
  font-weight: bold;
}
  </style>