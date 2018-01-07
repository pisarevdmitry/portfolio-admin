<template lang="pug">
    .about
        h2.title Страница &laquo Обо мне &raquo
        .skills
            skill-list(v-for="(skillType,index) in skillTypes"
                            v-bind:key ="index"
                            v-bind:skillType="skillType"
                            v-bind:skills="skills")
        app-button(
        title="Сохранить")
</template>
<script>
    import {mapActions,mapGetters} from "vuex"
     export default {
        data() {
            return {
                skillTypes:["Frontend","Workflow","Backend"],

            }

        },
         computed:{
             ...mapGetters(["skills"])
         },
        methods:{
           ...mapActions(['fetchSkills'])
        },
        created(){

           this.fetchSkills();
        },
        components: {
            skillList: require("./skillList"),
            AppButton: require('./button')
        }
    }
</script>
<style src="styles/about.scss" lang="scss" scoped></style>