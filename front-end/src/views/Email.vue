<template>
  <div class="container">

    <form>

      <h1> Welcome to Bloggen!</h1>

      <br />
      <br />
      <label for="exampleInputName">Email</label>
      <input type="text" class="form-control" id="Email">
      <br />
      <Button @click="EmailSent" type="first" text="Submit"></Button>
      <router-link :to="{ path: '/LoginView' }"><Button type="second" text="Back" /></router-link>


    </form>
    <img class="forgotPasswordImage1" :src="require('@/assets/aboutUs/forgot_password.jpg')" alt="Placeholder image">


  </div>


</template>


<script>
import Button from '@/components/Button.vue';

export default
  {
    components: {
      Button,

    },
    methods: {
      EmailSent() {
        alert("Reset Password Email is Sent")
      }
    }
  };

</script>


<style scoped>
form {
  border: 3px solid #f1f1f1;
  width: 40rem;
  height: 18rem;
  margin-left: 15rem;
  margin-top: 8rem;
}

.container {
  display: flex;
}

.forgotPasswordImage1{
  width: 35%;
  margin-top: 7rem;

}
</style>