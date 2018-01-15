<template lang="pug">
    div.container
        .title {{skillType}}
        table.table
            skill-item( v-for="skill in skills"
                        v-bind="skill.id"
                        v-bind:skill="skill"
                        v-if=" checkSkillType( skillType) ===skill.type"
                        v-on:removeSkill="removeSkill")
        .addButton
            button(type="button"
            v-on:click="addSkill") Добавить новый
            input.addButton__input(type="text"
                    v-model="newSkill"
                    v-on:keydown.enter="addSkill"
                    v-bind:class="{error:validation.hasError('newSkill')}")


</template>
<script>
    import {mapMutations} from "vuex"
    import {Validator} from "simple-vue-validator"
    export default {
        mixins:[require("simple-vue-validator").mixin],
        validators:{
            newSkill(value){
                return Validator.value(value).required("Поле должно быть заполнено")
            }
        },
        props:{
            skillType: String,
            skills: Array
        },
        data(){
            return{
                newSkill: ""
            }
        },
        methods:{
            ...mapMutations(["addNewSkill","removeExistedskill"]),
            addSkill(){
                this.$validate().then(success =>{
                   if(!success) return;
                    this.addNewSkill({
                        id:Math.round(Math.random()*10000),
                        name:this.newSkill,
                        percents:0,
                        type:this.checkSkillType(this.skillType)
                    });
                    this.newSkill="";
                    this.validation.reset();
                });

            },
            removeSkill(skillID){
                this.removeExistedskill(skillID)
            },
            checkSkillType(skillType){
                switch (skillType){
                    case "Frontend": return 1;
                    case "Workflow": return 2;
                    case "Backend": return 3;

                }
            }
        },
        components: {
            skillItem: require("./skillItem")
        }
    }
</script>
<style src="styles/skillList.scss" lang="scss" scoped></style>