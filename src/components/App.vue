<template>
    <div id="app">
        <nav-bar></nav-bar>
        <switcher></switcher>
        <explore></explore>
        <content-wrapper></content-wrapper>
    </div>
</template>

<script>
import store from '../vuex/store'
import NavBar from './navbar/NavBar.vue'
import Explore from './navbar/Explore.vue'
import Switcher from './navbar/Switcher.vue'
import ContentWrapper from './content/ContentWrapper.vue'

export default {
    store, //将store注入所有组件作用域
    components: {
        NavBar,
        Explore,
        Switcher,
        ContentWrapper
    },
    vuex: {
        getters: {

        },
        actions: {

        }
    },
}

//
function iniApp() {
    removeLoadingAnimator()

    function removeLoadingAnimator() {
        let loadingText = document.getElementById('loading')
        let animator = document.getElementById('circles')

        animator.parentNode.removeChild(loadingText)
        animator.parentNode.removeChild(animator)
    }
}
</script>

<!-- hrml容器高度为100%，便于测边栏高度100% -->
<style lang="stylus">
#app
    width 100%
    height 100%
    /*background #2A313B*/
    /*这个是确保子div 100%的时候，保留左边菜单栏空白部分的关键，即子内容右移*/
    /*margin-left 100px
    margin-top 50px*/
</style>
