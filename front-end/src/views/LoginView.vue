<template>
    <div class="login">
    <form>
  <div class="container">
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
     




  </div>
</form>
</div>
</template>

<script scoped>
import Button from '@/components/Button.vue';
export default {
components: {Button,
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

/* Set a style for all buttons
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 40%;
} */

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
}
</style>