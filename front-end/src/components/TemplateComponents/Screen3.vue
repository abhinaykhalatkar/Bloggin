<template>
    <div class="slider-ctr">
        <div class="redioBtnDiv">
            <RedioButton class="redioBtn" leftText="free" rightText="paid" @redio-switched="emitFreePaid" />
            <RedioButton class="redioBtn" leftText="For All" rightText="Selected User"
                @redio-switched="toggleAddUser" />
        </div>
        <DropDownSelector/>
        <WhiteListBlock v-if="this.whiteListOn" @update-white-list="updateWhiteList" />

        <div class="buttonDiv">

            <Button @click="back" type='second' text="Back" />
            <router-link class="link" to="/templateEditor">
                <Button @click="createProject" style="margin-left: 410px" type='first' text="Done" />
            </router-link>
        </div>
    </div>
</template>
<script>
import RedioButton from '../RedioButton.vue';
import Button from '../Button.vue';
import WhiteListBlock from './WhiteListBlock.vue';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import DropDownSelector from './DropDownSelector.vue';
gsap.registerPlugin(CSSPlugin);
export default {
    name: 'screen3',
    data() {
        return {
            isPaid: false,
            whiteListOn: false,
            privacy: false,
        }
    },
    components: {
        RedioButton,
        Button,
        WhiteListBlock,
        DropDownSelector
    },
    emits:['closeTemplateSelector'],
    methods: {
        updateWhiteList(list) {
            list.length > 0 ? this.privacy = true : this.privacy = false;
            this.$store.commit('changeDraftDetails',["isWhiteListed",this.privacy])
            this.privacy?this.$store.commit('changeDraftDetails',["whiteList",list]):null;
        },
        async createProject() {
            // this.$store.commit('changeDraftDetails',["published",false]);
            this.$emit('closeTemplateSelector')
            console.log(this.$store.state.currentDraftDetails)
        },
        emitFreePaid(val) {
            this.isPaid = !this.isPaid;
            this.$store.commit('changeDraftDetails',["isPaid",val])
        },
        toggleAddUser(val) {
            this.whiteListOn = !this.whiteListOn;
        },
        back() {
            const done = () => { this.slide('.screen2', true); }
            this.slide('.screen3', false, done);
            gsap.fromTo(
                '.screenTitle',
                { css: { display: 'none' } },
                { css: { display: 'block' }, duration: 0.2 }
            );
        },
        slide(el, val, start = null) {
            gsap.fromTo(
                el,
                { css: { width: `${val ? 0 : '676px'}` } },
                { css: { width: `${val ? '676px' : 0}`, display: `${val ? 'block' : 'none'}` }, onComplete: start, duration: 0.2 }
            );
        },
    }

}
</script>
<style scoped>
.redioBtnDiv {
    display: flex;
}

.buttonDiv {
    position: inherit;
    
}

.slider-ctr {
    margin: auto;
    margin-top: 3%;
    width: 0;
    /* width: 676px; */
    height: 90%;
    

    box-sizing: border-box;
    overflow: hidden;
}
</style>