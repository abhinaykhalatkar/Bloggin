
<template>
    <div id="content" class="site-content">
        <div id="blog-wrapper">
            <div class="blog-holder center-relative">
                <article id="post-1" class="blog-item-holder featured-post">
                    <div class="entry-content relative">
                        <div class="content-1170 center-relative">
                            <div class="cat-links">
                                <ul>
                                    <h3> {{ this.templateDetails.titleText }}</h3>

                                </ul>
                            </div>
                            <div class="entry-date published">{{ templateDetails.date }}</div>
                            <h2 class="entry-title">
                                <a href="single.html">{{ this.templateDetails.header }}</a>
                            </h2>
                            <div class="excerpt">
                                {{ this.templateDetails.header2 }}<a class="read-more" href="single.html"></a>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </article>
                <article id="post-2" class="blog-item-holder">
                    <div class="entry-content relative">
                        <div class="content-1170 center-relative">
                            <h2 class="entry-title">
                                <a href="single.html">{{ thi.templateDetails.header3 }}</a>
                            </h2>
                            <div class="cat-links">
                                <ul>
                                    <h2>{{ this.templateDetails.header4 }}</h2>
                                </ul>
                            </div>
                            <div class="entry-date published">{{ this.templateDetails.date2 }}</div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </article>
                <article id="post-3" class="blog-item-holder">
                    <div class="entry-content relative">
                        <div class="content-1170 center-relative">
                            <h2 class="entry-title">
                                <a href="single.html">{{ this.templateDetails.header5 }}</a>
                            </h2>
                            <div class="cat-links">
                                <ul>
                                    <h3>{{ this.templateDetails.header6 }}</h3>
                                </ul>
                            </div>
                            <div class="entry-date published">{{ this.templateDetails.date3 }}</div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </article>
                <article id="post-4" class="blog-item-holder">
                    <div class="entry-content relative">
                        <div class="content-1170 center-relative">
                            <h2 class="entry-title">
                                <a href="single.html"> {{ this.templateDetails.header7 }} </a>
                            </h2>
                            <div class="cat-links">
                                <ul>
                                    <h3>{{ this.templateDetails.header8 }}</h3>
                                </ul>
                            </div>
                            <div class="entry-date published">{{ this.templateDetails.date4 }}</div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </article>
                <article id="post-5" class="blog-item-holder">
                    <div class="entry-content relative">
                        <div class="content-1170 center-relative">
                            <h2 class="entry-title">
                                <a href="single.html">{{ this.templateDetails.header9 }}</a>
                            </h2>
                            <div class="cat-links">
                                <ul>
                                    <h3>{{ this.templateDetails.header10 }}</h3>
                                </ul>
                            </div>
                            <div class="entry-date published">{{ this.templateDetails.date5 }}</div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </article>
                <article id="post-6" class="blog-item-holder">
                    <div class="entry-content relative">
                        <div class="content-1170 center-relative">
                            <h2 class="entry-title">
                                <a href="single.html">{{ this.templateDetails.header11 }}</a>
                            </h2>
                            <div class="cat-links">
                                <ul>
                                    <h3>{{ this.templateDetails.header12 }}</h3>
                                </ul>
                            </div>
                            <div class="entry-date published">{{ this.templateDetails.date6 }} </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="clear"></div>
            <div class="block load-more-holder">{{ this.templateDetails.header13 }}</div>
        </div>
        <div class="featured-image-holder">
            <div class="featured-post-image"  :src="this.templateDetails.imageLink"
                alt="Placeholder iamge"></div>
        </div>
    </div>
    <div class="clear"></div>

</template>
<script>
export default {
    name: "template2",
    components: {},
    data() {
        return {
            templateDetails: {

                titleText: 'Entertainment',
                date: 'February 12, 2016',
                header: 'Whatever is begun in anger ends in shame',
                header2: '  Now when I had mastered the language of this water and had come to know every trifling feature that bordered the great river as familiarly as I knew the letters of the alphabet, I had made a valuable acquisition. I still keep in mind a certain wonderful sunset which witnessed when and steamboating',
                header3: 'I like to reinvent myself',
                header4: 'Science',
                date2: 'February 12, 2016',
                header5: 'Everything is design',
                header6: 'Art',
                date3: 'February 12, 2016',
                header7: 'It’s all about experience',
                header8: 'Life',
                date4: 'February 12, 2016',
                header9: 'This is not my code',
                header10: 'Coding',
                date5: 'February 12, 2016',
                header11: 'Support human activity',
                header12: 'Advocacy',
                date7: 'February 12, 2016',
                header13: 'LOAD MORE ENTRIES',
                imageLink: 'https://back.femininbio.com/attachments/2020/11/20/portrait/w800/23680-y2xsntf9e-a-milada-vigerova-1.jpg',
            }
        }
    },
    props: {
        getTemplateDetails: null
    },
    updated() {
        console.log(this.templateDetails)
        this.$store.commit('changeDraftDetails', ["templateDetails", this.templateDetails])
    }
}

</script>

<style scoped>
.site-content {
    width: calc(100% - 100px);
    margin-left: 100px;
    padding-bottom: 100px;
    position: relative;
    -webkit-transition: margin 0.3s ease;
    -moz-transition: margin 0.3s ease;
    -ms-transition: margin 0.3s ease;
    -o-transition: margin 0.3s ease;
    transition: margin 0.3s ease;
}

.nicescroll-rails {
    z-index: 2
}

#blog-wrapper {
    width: 50%;
    margin-left: 0;
    float: left;
}

@media screen and (max-width: 1650px) {}

.blog-holder {
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 10%;
    padding-right: 10%;
}

.blog-holder {
    padding-top: 100px;
    max-width: 470px;
    padding-bottom: 85px;
}

.center-relative {
    margin-left: auto;
    margin-right: auto;
}

.blog-item-holder {
    transition: .2s filter ease-in-out;
    -webkit-transition: .2s -webkit-filter ease-in-out;
}

.featured-post {
    padding-bottom: 105px;
}

.featured-image-holder {
    width: 50%;
    float: right;
}

.featured-post-image {
    position: fixed;
    height: 100%;
    width: 50%;
    width: calc(50% - 50px);
    background-size: cover;
    background-position: center center;
}

.clear {
    clear: both;
}
</style>





