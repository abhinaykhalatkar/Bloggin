<template>

<form>
     <div class="container">

        <label for="exampleInputName">Email</label>
        <input type="text" class="form-control" id="Email">
        <br />
        <Button @click="EmailSent" type="first" text="Submit"></Button>

    </div>
  </form>
   


</template>


<script scoped>
import Button from '@/components/Button.vue';

export default
{
  components: {Button,

  },
  methods: {EmailSent(){
    alert("Reset Password Email is Sent")
  }}
};

</script>


<style scoped>
form {
  border: 3px solid #f1f1f1;
  width: 25rem;
  height: 18rem;
  margin-left: 30rem;
  margin-top: 6rem;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 40%;
}



</style>