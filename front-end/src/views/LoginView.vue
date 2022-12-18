<template>
    <div class="login">
    
  <div class="container">
    <form>
    <h1> Welcome to Bloggen!</h1>
    <br/>
    <br/>
    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    
    <Button type="first" text="Login"></Button>
    <router-link :to="{ path: '/Registration' }"><Button type="second" text="Register" /></router-link>
                        
     <span class="psw"> <router-link :to="{ path: '/Email' }"><a href="Email" text="Forgot Password?"> </a> </router-link> </span>
     


    </form>
    <img class="loginImage" :src="require('@/assets/aboutUs/loginImage.jpg')" alt="Placeholder image">

  </div>



</div>
</template>

<script scoped>
import Button from '@/components/Button.vue';
export default {
components: {Button,
 },mounted(){
  // console.log(this.$route.fullPath)
 }

};
</script>

<style scoped>
form {

  border: 3px solid #f1f1f1;
  width: 38rem;
    height: 28rem;
  margin-left: 15rem;
  margin-top: 8rem;
}


/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 15px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 30px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }

  .loginImage{
    width: 10%;
    height: 40%;
    margin-top: 8rem;
}

  }

</style>