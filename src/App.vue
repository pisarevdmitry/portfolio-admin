<template lang="pug">
    #app
        .header
            app-header
        .tabs
            tabs
        .content
            router-view
            pop-up

</template>

<script>
    export default {
        components:{
            appHeader: require("./components/header"),
            tabs: require("./components/tabs"),
            about: require("./components/about"),
            popUp: require("./components/popUP")
        }
    }
</script>

<style lang="scss"></style>