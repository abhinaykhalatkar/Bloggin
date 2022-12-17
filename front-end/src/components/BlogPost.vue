<template>
    <div class="blog-wrapper">
        <div class="blog-content">
            <div>
                <h2>{{ post.title }}</h2>
                <p class="content-preview">{{ post.blogHTML }}</p>
                <router-link class="link link-light" to="#">View the blog
                    <!-- <Arrow class="arrow arrow-light" /> -->
                </router-link>
            </div>
        </div>
        <div class="blog-photo">
            <img class="blog-image" src="../assets/2.jpg" alt="">
        </div>
    </div>
</template>
<script>
// import Arrow from "../assets/dji_export_1654456504024.svg"
export default {
    name: "blogPost",
    props: ["post"],
    components: {
        // Arrow
    }
}
</script>

<style lang="scss" scoped>
.blog-wrapper {
    display: flex;
    //flex-direction: column;
    // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.258), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 4% 6% 4%;

    .blog-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;
        order: 2;

        div {
            max-width: 375px;
            padding: 72px 24px;

            h2 {
                font-size: 32px;
                font-weight: 300;
                text-transform: uppercase;
                margin-bottom: 24px;
            }

            p {
                font-size: 15px;
                font-weight: 300;
                line-height: 1.7;
            }

            .content-preview {
                font-size: 13px;
                max-height: 24px;
                width: 250px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .link {
                display: inline-flex;
                align-items: center;
                margin-top: 32px;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;
                transition: .5s ease-in all;

                &:hover {
                    border-bottom-color: #303030;
                }
            }

            .link-light {
                &:hover {
                    border-bottom-color: #000000;

                }
            }
        }
    }

    .blog-photo {
        order: 1;
        flex: 3;
        // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.258), 0 2px 4px -1px rgba(0, 0, 0, 0.06);x

        .blog-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
        }
    }

    &:nth-child(even) {
        .blog-content {
            order: 2;
        }

        .blog-photo {
            order: 1;
        }
    }
}
</style>