

<template>
    <div class="container container1">
        <br />
        <form>
            <h3> Welcome to Bloggen!</h3>
            <br />
            <br />
            <div class="row-10">

                <div class="col-md-11">

                    <div class="container">
                        <label for="exampleInputName">Name</label>
                        <input name="exampleInputName" v-model="username" type="text" class="form-control" id="Name" placeholder="Enter Name" required>
                        <br />
                        <label for="exampleInputName">Email</label>
                        <input type="text" class="form-control" v-model="email" id="Email" placeholder="Enter Email" required>
                        <br /> <br />
                        
                        <label for="exampleInputName">Password</label>
                        <input type="password" class="form-control" v-model="password" id="Name" placeholder="Enter Password" required>
                        <br />
                        <label for="exampleInputName">Confirm Password</label>
                        <input type="password" class="form-control" v-nodel="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required>
                        <br />
                        <br />
                        <router-link :to="{ path: '/login' }"><Button type="first" text="Register" @click="onRegister"></Button></router-link>
                        
                        <!-- <router-link :to="{ path: '/LoginView' }"><Button type="first" text="Register" /></router-link> -->
                        <router-link :to="{ path: '/login' }"><Button type="second" text="Back" /></router-link>





                    </div>



                </div>
                <div class="col-md-3"> </div>
            </div>
        </form>
        
            <img class="registrationImage1" :src="require('@/assets/aboutUs/registrationAsset1.jpg')" alt="Placeholder image">



        
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    name: "Login",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isRegisterActive: false,
      isRegistrationSuccessfull: false,
    };
  },
    methods: {
        async onRegister() {
            this.isRegisterActive = !this.isRegisterActive;
            const user = {
                userName: this.username,
                logInId: this.email,
                password: this.password,
                writtenBlogs: "",
                readBlogs: "",
                writtenQuotes: "",
                appreciation: "",
                bio: "",
                quotes: [],
      newSub: {
        email: "",
        cardName: "",
        cardNumber: "",
        contact: "",
        planSelected: "",
        cardSelected: ""
      }
            };
            console.log(user);
            const res = await fetch(` http://localhost:5001/users`, {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(user),
            });
            if(res.status==201)
            {
                console.log(this.$store.state.registrationDone)
                console.log(res.status)
                this.$store.commit('setIsRegister',true)
                console.log(this.$store.state.registrationDone)
            }
            
        },
        mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({name:'Registration'})
        }
    },
    },
    components: {
        Button,
    }
}

    

</script>



<style scoped>
form {

    border: 1px solid black;
    width: 40rem;
    height: 45rem;
    margin-right: 2rem;
    margin-top: 8rem;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    box-shadow: 3px 5px 5px #00000021;
    border-radius: 15px;
    padding: 70px 30px 70px 30px;
    margin-bottom: 10%;
}
h3 {
    color: #110476;
  }

.container1{
    display: flex;
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

}

.registrationImage1{
    width: 40%;
    height: 60%;
    margin-top: 8rem;
}

</style>