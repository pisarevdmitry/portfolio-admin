<template lang="pug">
   .tabs
        ul.lists
            li.item(v-for="tab in tabs")
                router-link(
                v-bind:to="tab.href"
                exact-active-class="active-tab"
                ).link {{tab.name}}


</template>
<script>
    export default {
        data(){
            return {
                tabs :[
                    {name:"Таб 1",href:"/"},
                    {name:"Таб 2",href:"/blog"},
                    {name:"Таб 3",href:"/works"}
                ]
            }
        }
    }
</script>
<style src="styles/tabs.scss" lang="scss" scoped></style>