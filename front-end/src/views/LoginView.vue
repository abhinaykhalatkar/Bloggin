<template>
  <div class="login-container">
    <div class="form-container">
      <form >
        <div class="header">
          <h3> Welcome to Bloggen!</h3>
        </div>
        <div class="email">
          <label for="uname"><b>Email</b></label>
          <input type="text" v-model="this.email" placeholder="Enter Email" name="uname" required>
        </div>
        <div class="password">
          <label for="psw"><b>Password</b></label>
          <input type="password" v-model="this.password" placeholder="Enter Password" name="psw" required>
        </div>
        
        <Button @click="login" type="first" text="Log In"/>
        <router-link :to="{ path: '/Registration' }"><Button type="second" text="Register" /></router-link>
        <span class="psw"> <router-link :to="{ path: '/Email' }"><a href="Email" text="Forgot Password?"> </a>
          </router-link> </span>
      </form>
    </div>
    <div class="login-image">
      <img class="image" :src="require('@/assets/aboutUs/loginImage.jpg')" alt="Placeholder image">
    </div>
  </div>
</template>
<script scoped>
import Button from '@/components/Button.vue';
export default {
  name:"LoginView",
  components: {
    Button,
  },
  methods: {
      async login(e) {
      e.preventDefault()
        const res = await fetch(`http://localhost:5001/users?logInId=${this.email}&password=${this.password}`, {
              headers: {
                "Content-type": "application/json",
              }
            });
            let data=await res.json();
            console.log(data)


          if(res.status==200 && data.length>0)
          {
            
              localStorage.setItem("id",data[0].id)
              localStorage.setItem("userName",data[0].userName)
              localStorage.setItem("isLoggedIn",true)
              localStorage.setItem("logInId",data[0].logInId)
              localStorage.setItem("writtenBlogs",data[0].writtenBlogs)
              localStorage.setItem("readBlogs",data[0].readBlogs)
              localStorage.setItem("writtenQuotes",data[0].writtenQuotes)
              localStorage.setItem("appreciation",data[0].appreciation)
              localStorage.setItem("bio",data[0].bio)
              this.$store.commit('setLoginDetails',["id",data[0].id])
              this.$store.commit('setLoginDetails',["userName",data[0].userName])
              this.$store.commit('setLoginDetails',["isLoggedIn",true])
              this.$store.commit('setLoginDetails',["logInId",data[0].logInId])
              this.$store.commit('setLoginDetails',["writtenBlogs",data[0].writtenBlogs])
              this.$store.commit('setLoginDetails',["readBlogs",data[0].readBlogs])
              this.$store.commit('setLoginDetails',["writtenQuotes",data[0].writtenQuotes])
              this.$store.commit('setLoginDetails',["appreciation",data[0].appreciation])
              this.$store.commit('setLoginDetails',["bio",data[0].bio])
          
              this.$router.push('/')
           
          }
          
          
      }
      
  },
   mounted() {
      
  },
  data() {
      return {
          email:'',
          password:''
  }
  },
};
</script>

<style lang="scss" scoped>

input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 10px;
  }
  h3 {
    color: #110476;
  }
.login-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px;
  flex-wrap: nowrap;

  .form-container {
    border: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    box-shadow: 3px 5px 5px #00000021;
    border-radius: 15px;
    padding: 70px 0px 70px 0px;
  }

  // .form{
  //   display: flex;
  // align-items: center;
  // flex-direction: column;
  // width: 50%;
  // }
  .login-image {
    display: flex;
    justify-content: center;
  }

  .image {
    width: 95%;
  }
}

// form {
//   border: 3px solid #f1f1f1;
//   width: 38rem;
//   height: 28rem;
//   margin-left: 15rem;
//   margin-top: 8rem;
// }


// /* Full-width inputs */
// input[type=text],
// input[type=password] {
//   width: 100%;
//   padding: 12px 20px;
//   margin: 15px 0;
//   display: inline-block;
//   border: 1px solid #ccc;
//   box-sizing: border-box;
// }


// /* Add a hover effect for buttons */
// button:hover {
//   opacity: 0.8;
// }

// /* Extra style for the cancel button (red) */
// .cancelbtn {
//   width: auto;
//   padding: 10px 18px;
//   background-color: #f44336;
// }

// /* Center the avatar image inside this container */
// .imgcontainer {
//   text-align: center;
//   margin: 24px 0 12px 0;
// }

/* Avatar image */
// img.avatar {
//   width: 40%;
//   border-radius: 50%;
// }

// /* Add padding to containers */
// .container {
//   padding: 16px;
// }

// /* The "Forgot password" text */
// span.psw {
//   float: right;
//   padding-top: 30px;
// }

// /* Change styles for span and cancel button on extra small screens */
// @media screen and (max-width: 300px) {
//   span.psw {
//     display: block;
//     float: none;
//   }

//   .cancelbtn {
//     width: 100%;
//   }



// }
</style>