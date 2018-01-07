<template lang="pug">
    tr
        td.title {{skill.name}}
         td
            input(type="text"
            v-bind:value="skill.percents")
        td %
        td
            button(type="button"
                    v-on:click="removeSkill") Удалить


</template>
<script>
    export default {
        props:{
            skill: Object
        },
        methods:{
            removeSkill(){
                this.$emit("removeSkill",this.skill.id)
            }
        }
    }
</script>
<style src="styles/skillItem.scss" lang="scss" scoped></style>