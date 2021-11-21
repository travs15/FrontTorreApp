<template>
  <div class="contSkills">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <p class="contSkills__iconTextTitle">
          <i class="material-icons contSkills__iconText">fact_check</i>Skill: {{skillInfo.skillName}}
        </p>
      </div>
    </div>
    <div class="contSkills__skillData" v-bind:style="{ display: showNoDataSkill }">
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <p class="contSkills__iconText">
            <i class="material-icons contSkills__iconText">warning_amber</i>
            There is no related experience to this skill, please select another one.
          </p>
        </div>
      </div>
    </div>
    <SkillCard :skillData="skillData"></SkillCard>
  </div>
</template>

<script>
import SkillCard from "./SkillCard.vue";
export default {
    name:'InfoSkill',
    components:{
    SkillCard
},
    props:["skillInfo"],
    data(){
      return{
          skillData:[],
          showNoDataSkill:'flex'
      }
    },
    methods:{
      prepareData: function(){
        this.skillData = JSON.parse(this.skillInfo.relatedExperience);
        if(this.skillData.length == 0){
          this.showNoDataSkill = 'flex';
        }else{
          this.showNoDataSkill = 'none';
        }
      }
    },
    mounted(){
      this.prepareData();
    }
}
</script>

<style src="../assets/styles/infoskill.css" scoped></style>