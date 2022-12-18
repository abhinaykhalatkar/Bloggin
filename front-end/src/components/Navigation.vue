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
                    <router-link class="link" to="/login">Login</router-link>
                    
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
// import menuIcon from '../assets/1.png';
export default {
    name: 'navigation',
    components: {
        // menuIcon
    }
};
</script>
<style lang="scss" scoped>
header {
    background-color: white;
    padding: 0 110px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.258), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;

    nav {
        display: flex;
        padding: 10px 0;

        .branding {
            display: flex;
            align-items: center;

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