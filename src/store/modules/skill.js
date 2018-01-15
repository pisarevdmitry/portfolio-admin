const skills={
    state:{
        data:[]
    },
    getters:{
        skills(state){
            return state.data
        }
    },
    mutations:{
        addNewSkill(state,skill){
            state.data.push(skill)
        },
        removeExistedskill(state,skillId){
            state.data= state.data.filter(item => item.id !== skillId)
        }
    },
    actions:{
        fetchSkills({state,dispath,commit}){
         return  fetch("./src/data.json")
                .then(responce =>{
                    return  responce.json()
                }).then(data => {
                state.data=data

            })
        }
    }
};
export default skills