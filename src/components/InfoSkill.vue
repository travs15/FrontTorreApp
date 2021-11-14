<template>
  <div class="containerSkillsSpec">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <p class="iconTextTitle">
          <i class="material-icons iconText">fact_check</i>Skill: {{skillInfo.skillName}}
        </p>
      </div>
    </div>
    <div class="skillData" v-bind:style="{ display: showNoDataSkill }">
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <p class="iconText">
            <i class="material-icons iconText">warning_amber</i>
            There´s no related experience to this skill, please select another one.
          </p>
        </div>
      </div>
    </div>
    <div class="skillData" v-for="item in skillData" :key="item.id">
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <p class="iconText">
            <i class="material-icons iconText">work</i>Job Profile: {{ item.name }}
          </p>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <p class="iconText">
            <i class="material-icons iconText">task_alt</i>Verifications: {{ item.verifications }}
          </p>
        </div>
      </div>
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12" v-for="subitem in item.organizations" :key="subitem.name">
            <p class="iconText">
              <i class="material-icons iconText">corporate_fare</i>{{ subitem.name }}
            </p>
        </div>
      </div>
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <p class="iconTextInfo">
              <i class="material-icons iconText">info</i>Additional Info:
              {{ item.additionalInfo == "" ? "No aditional info" : item.additionalInfo}}
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'InfoSkill',
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