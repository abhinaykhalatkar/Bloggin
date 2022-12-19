<template>
    <div class="container">

        <div class="profile">

            <div class="profile-image">

                <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                    alt="">

            </div>

            <div class="profile-user-settings">

                <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog"
                        aria-hidden="true"></i></button>

            </div>

            <div class="profile-stats">

                <ul>
                    <li><span class="profile-stat-count">{{ this.user.writtenBlogs }}</span>
                        <h5>Written blogs</h5>
                    </li>

                    <li><span class="profile-stat-count">{{ this.user.readBlogs }}</span>
                        <h5>Read blogs</h5>
                    </li>
                    <li><span class="profile-stat-count">{{ this.user.appreciation }}</span>
                        <h5>Appreciation</h5>
                    </li>
                    <router-link :to="{ path: '/subscription' }"><Button type="First" text="Subscription" style="width: 20%;"/></router-link>
                    
                </ul>

               

            </div>

        </div>
        <div class="profile-bio">

            <p><span class="profile-real-name">{{ this.user.userName }}</span><br />
                {{ this.user.bio }}</p>

        </div>
        <!-- End of profile section -->
    </div>
    <!-- End of container -->

    <div class="graph">
        <h4>Reader's Analysis</h4>
        <BarChart />
    </div>

    <div class="quotes">
        <h4>Quotes</h4>
        <div class="card-container">
            <div class="card">
                <img class="quote-img" src="../assets/1.png" alt="Avatar">
                <div class="card-info">
                    <Button type="first" text="New" @click="openForm"/>
                    <div class="form-popup" id="myForm" v-if="isModalOpen">
                        <form @submit="preventSub" action="/action_page.php" class="form-container">
                            <h5>Write your thought here..</h5>
                            <textarea id="textbox" name="quoteAdd" placeholder="Start writing" rows="8" cols="44"
                                v-model="quoteAdd"></textarea>
                            <Button type="second" text="Publish" @click="addQuote" />
                            <Button type="first" text="Close" @click="closeForm" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="card" style="border-style:solid; border-color:white" v-for="quote in quoteList">
                <p class="newQuote" v-modal="quoteList">{{ quote }}</p>
            </div>
        </div>
    </div>
</template>
    
<script>

import BarChart from '../components/BarChart.vue'
import Button from '../components/Button.vue'

export default {
    name: 'ProfileView',

    components: {
        BarChart, Button
    },
    data() {
        return {
            user: this.$store.state.loginDetails,
            isModalOpen: false,
            quoteAdd: '',
            quoteList: []

        }
    },
    methods: {
        preventSub(e) {
            e.preventDefault()
        },
        openForm() {
            this.isModalOpen = true;

            // document.getElementById("myForm").style.display = "block";
        },
        closeForm() {

            this.isModalOpen = false;
            // document.getElementById("myForm").style.display = "none";
        },
        async addQuote() {
            const data = await fetch(`http://localhost:5001/users/${this.$store.state.loginDetails.id}`);
            const dataRes = await data.json();
            console.log(dataRes.quotes)
            dataRes.quotes = [...dataRes.quotes, this.quoteAdd]
            console.log(dataRes.quotes)
            const res = await fetch(`http://localhost:5001/users/${this.$store.state.loginDetails.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(dataRes),
            });
            console.log(res);
            alert("Quote added successfully!!");


            console.log(this.quoteList);

            // this.user.quotes = [...this.user.quotes, this.quoteAdd]
            // 

        },


    },
    async mounted() {
        const data = await fetch(`http://localhost:5001/users/${this.$store.state.loginDetails.id}`);
        const dataRes = await data.json();
        this.quoteList = dataRes.quotes;
    }

}

</script>
    
<style>
.quotes {
    margin-left: 12rem;
}

.quote-img {
    height: 10rem;
    width: 10rem;
}

.newQuote {
    width: 10rem;
    height: 8rem;
    border-color: #555;
    border: 1.5px;
    border-style: solid;
    margin-top: -2rem;
}

.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 1rem;
    margin-right: 70rem;
    margin-left: 17rem;
    column-gap: 12rem;

}

.card {
    display: flex;
    margin-bottom: 10rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    transition: 0.3s;
    border-radius: 5px;

}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}



*,
*::before,
*::after {
    box-sizing: border-box;
}

.graph {
    margin-left: 12.5rem;
    margin-top: 2rem;
    height: 20rem;
    width: 35rem;
}

body {
    font-family: "Open Sans", Arial, sans-serif;
    min-height: 100vh;
    background-color: #fafafa;
    color: #262626;
    padding-bottom: 3rem;
}


img {
    display: block;
}

.container {
    max-width: 500rem;
    margin: 0 auto;
    padding-right: 35rem;
    font-size: 10px;
}

.btn {
    display: inline-block;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
}

.btn:focus {
    outline: 0.5rem auto #4d90fe;
}

.visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
}

/* Profile Section */

.profile {
    margin-left: 11rem;
    margin-top: 3rem;
    font-size: 10px;
}

.profile::after {
    content: "";
    display: block;
    clear: both;
}

.profile-image {
    float: left;
    width: calc(33.333% - 1rem);
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-image img {
    border-radius: 30%;
}

.profile-user-settings,
.profile-stats {
    float: left;
}

.profile-user-settings {
    margin-top: 1.1rem;
}

.profile-user-name {
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 300;
}

.profile-edit-btn {
    font-size: 1.4rem;
    line-height: 1.8;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.3rem;
    padding: 0 2.4rem;
    margin-left: 2rem;
}

.profile-settings-btn {
    font-size: 1.5rem;
    margin-left: 55rem;
}

.profile-stats {
    margin-top: 2.3rem;
    font-size: 10px;
    width: 55rem;

}

.profile-stats li {
    display: inline-block;
    font-size: 25px;
    line-height: 1.5;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
    padding: inherit;
}

.profile-stats li:last-of-type {
    margin-right: 0;
}

.profile-bio {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 5px;
    margin-left: 12rem;
}

.profile-stat-count {
    margin-left: 2.3rem;
}

.profile-real-name,
.profile-stat-count,
.profile-edit-btn {
    font-weight: 700;
}


* {
    box-sizing: border-box;
}

/* Button used to open the contact form - fixed at the bottom of the page */
.open-button {
    background-color: #555;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    position: fixed;
    bottom: 23px;
    right: 28px;
    width: 280px;
}

/* The popup form - hidden by default */
.form-popup {
    z-index: 2;
    position: absolute;
    right: 15px;
    border: 3px solid #f1f1f1;
    width: 400px;
    height: 400px;
    top: -15rem;
    left: 25rem;
    background: #FFFFFF;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
}

/* Add styles to the form container */
.form-container {
    background-color: white;
    position: absolute;
    width: 380px;
    height: 380px;
    left: 0.5rem;
    top: 1rem;
    right: 15px;
    background: #FFFFFF;
}

/* Full-width input fields */
.form-container input[type=text],
.form-container input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container input[type=text] {
    background-color: #ddd;
    outline: none;
    width: 100%;
    height: 250px;
}

/* Set a style for the submit/login button */
.form-container .btn {
    background-color: #110476;

    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
    background-color: #D24F4F;
}

/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
    opacity: 1;
}


/* Spinner Animation */

@keyframes loader {
    to {
        transform: rotate(360deg);
    }
}

/*
    
    The following code will only run if your browser supports CSS grid.
    
    Remove or comment-out the code block below to see how the browser will fall-back to flexbox & floated styling. 
    
    */

@supports (display: grid) {
    .profile {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: repeat(3, auto);
        grid-column-gap: 3rem;
        align-items: center;
    }

    .profile-image {
        grid-row: 1 / -1;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 2rem;
    }

    .profile-image,
    .profile-user-settings,
    .gallery-item,
    .gallery {
        width: auto;
        margin: 0;
    }

    @media (max-width: 40rem) {
        .profile {
            grid-template-columns: auto 1fr;
            grid-row-gap: 1.5rem;
        }

        .profile-image {
            grid-row: 1 / 2;
        }

        .profile-user-settings {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
        }

        .profile-edit-btn,
        .profile-stats,
        .profile-bio {
            grid-column: 1 / -1;
        }

        .profile-user-settings,
        .profile-edit-btn,
        .profile-settings-btn,
        .profile-bio,
        .profile-stats {
            margin: 0;
        }
    }
}
</style>