

<template>
    <div class="container container1">
        <br />
        <form>
            <h1> Welcome to Bloggen!</h1>
            <br />
            <br />
            <div class="row-10">

                <div class="col-md-11">

                    <div class="container">
                        <label for="exampleInputName">Name</label>
                        <input type="text" class="form-control" id="Name" placeholder="Enter Name">
                        <br />
                        <label for="exampleInputName">Email</label>
                        <input type="text" class="form-control" id="Email" placeholder="Enter Email">
                        <br /> <br />
                        
                        <label for="exampleInputName">Password</label>
                        <input type="password" class="form-control" id="Name" placeholder="Enter Password">
                        <br />
                        <label for="exampleInputName">Confirm Password</label>
                        <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password">
                        <br />
                        <br />
                        <router-link :to="{ path: '/LoginView' }"><Button type="first" text="Register"></Button></router-link>
                        
                        <!-- <router-link :to="{ path: '/LoginView' }"><Button type="first" text="Register" /></router-link> -->
                        <router-link :to="{ path: '/LoginView' }"><Button type="second" text="Back" /></router-link>





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
    components: {
        Button,
    }

}
</script>



<style scoped>
form {

    border: 3px solid #f1f1f1;
    width: 40rem;
    height: 45rem;
    margin-left: 15rem;
    margin-top: 8rem;
}
.container1{
    display: flex;
}

.registrationImage1{
    width: 40%;
    height: 60%;
    margin-top: 8rem;
}

</style>