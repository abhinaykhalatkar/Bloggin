<template>
    <header>
        <nav class="container">
            <div class="branding">

                <router-link class="header" :to="{ name: 'Home' }"><img src="../assets/Logo/Logo.svg"
                        alt=""></router-link>
            </div>
            <div class="nav-links">
                <ul>
                    <router-link class="link" to="/">Home</router-link>
                    <router-link class="link" to="/blogWriting">Write</router-link>
                    <router-link class="link" to="aboutUs">About Us</router-link>
                    <router-link  v-if="!this.$store.state.loginDetails.isLoggedIn" to="/login"><Button  type="first" text="Login"/></router-link>
                    <router-link  v-if="this.$store.state.loginDetails.isLoggedIn" to="/"><Button type="second" @click="logOut" text="LogOut"/></router-link>
                    <router-link  v-if="this.$store.state.loginDetails.isLoggedIn" to="/profile"><img class="imgProfile" src="@/assets/Logo/profilePic.svg" alt=""></router-link>
                </ul>
            </div>
        </nav>
        <!-- <menuIcon /> -->
        <!-- <transition name="mobile-nav">
            <ul>
                <router-link class="link" to="#">Home</router-link>
                <router-link class="link" to="#">Write</router-link>
                <router-link class="link" to="#">About</router-link>
                <router-link class="link" to="#">Login</router-link>
            </ul>
        </transition> -->
    </header>
</template>

<script>
import Button from './Button.vue';
// import menuIcon from '../assets/1.png';
export default {
    name: 'navigation',
    components: {
        Button
    },
    methods:{
        logOut(){
            this.$store.commit('clearLoginDetails')
            localStorage.clear();
        }
    }
};
</script>
<style lang="scss" scoped>
.imgProfile{
    height: 50px;
    width: 50px;
}
header {
    background-color: white;
    padding: 0 110px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.258), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    

    nav {
        display: flex;
        padding: 10px 0;

        .branding {
            display: flex;
            align-items: center;
img{
    width: 150px;
}
            // .header {
            //     font-weight: 600;
            //     font-size: 24px;
            //     color: black;
            //     text-decoration: none;
            // }
        }

        .nav-links {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-end;

            ul {
                margin-right: 32px;
                margin-bottom: 0;

                .link {
                    margin-right: 32px;
                    font-size: medium;
                    font-weight: bold;
                    color: black;
                    text-decoration: none;

                    &:hover {
                        color: #28048d;
                    }
                }

                .link:last-child {
                    margin-right: 0;
                }
            }
        }
    }

}
</style>