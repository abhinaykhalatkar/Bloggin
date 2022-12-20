<template>
    <footer>
        <div class="container">
            <div class="left">
                <!-- <div class="col-1">
                    <router-link class="header" :to="{ name: 'Home' }">Blogs</router-link>
                    <ul>
                        <li>
                            <a href="#">
                                <youTube class="svg-icon"></youTube>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <twitter class="svg-icon"></twitter>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <instagram class="svg-icon"></instagram>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <facebook class="svg-icon"></facebook>
                            </a>
                        </li>
                    </ul>
                </div> -->
                <!-- <div class="col-2">
                    <ul>
                        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                        <router-link class="link">Blogs</router-link>
                    </ul>
                </div> -->
            </div>
            <div class="right">
                <p>Copyrights 2022 All rights reserved</p>
            </div>
        </div>
    </footer>
</template>
<script>

</script>
<style lang="scss" scoped>
footer {
    margin-top: auto;
    padding: 100px 25px;
    background-color: #110476;

    .container {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    >div {
        display: flex;
        flex: 1;
    }

    .left {
        gap: 32px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header {
        font-size: 24px;
        color: rgb(255, 255, 255);
        text-decoration: none;
        font-weight: 600;
    }

    ul {
        gap: 16px;
        list-style: none;
        display: flex;
    }

    .col-1,
    .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
    }

    .col-1 {
        flex-direction: column;

        h2 {
            text-align: center;
        }

        ul {
            margin-top: auto;

            li {
                display: flex;
                align-items: center;

                .svg-icon {
                    width: 24px;
                    height: auto;
                    color: red;
                    border: 2px solid black;
                }
            }
        }
    }

    .col-2 {
        ul {
            height: 100%;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;

            .link {
                font-size: 16px;
                font-weight: 500;
                color: black;
                text-decoration: none;
            }
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        color: rgb(255, 255, 255);
        font-weight: 500;
        text-decoration: none;
    }

    p {
        margin-top: auto;
    }
}
</style>