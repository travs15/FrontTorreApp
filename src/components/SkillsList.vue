<template>
  <div class="skillsDiv">
      <h4>Your profile <b>Skills</b></h4>
        <hr>
        <div class="container">
          <div v-bind:style="{ display: displayExpert }">
            <div class="row d-flex align-items-center justify-content-start">
              Expert:
            </div>
            <div class="d-flex flex-wrap align-items-center">
              <div
                class=""
                v-for="item in userStrengthsData.expert"
                :key="item.name"
              >
                <button @click="getSkillInfo(item.id)" type="button" class="btn btn-secondary skillsDiv__buttonSkill">
                  {{item.name}}</button>
              </div>
            </div>
          </div>
          <div v-bind:style="{ display: displayProficient }">
            <div class="row d-flex align-items-center justify-content-start">
              Proficient:
            </div>
            <div class="d-flex flex-wrap align-items-center">
              <div
                class=""
                v-for="item in userStrengthsData.proficient"
                :key="item.name"
              >
                <button @click="getSkillInfo(item.id)" type="button" class="btn btn-secondary skillsDiv__buttonSkill">
                  {{item.name}}</button>
              </div>
            </div>
          </div>
          <div v-bind:style="{ display: displayNovice }">
            <div class="row d-flex align-items-center justify-content-start">
              Novice:
            </div>
            <div class="d-flex flex-wrap align-items-center">
              <div
                class=""
                v-for="item in userStrengthsData.novice"
                :key="item.name"
              >
                <button @click="getSkillInfo(item.id)" type="button" class="btn btn-secondary skillsDiv__buttonSkill">
                  {{item.name}}</button>
              </div>
            </div>
          </div>
          <div v-bind:style="{ display: displayInterest }">
            <div class="row d-flex align-items-center justify-content-start">
              Interested in:
            </div>
            <div class="d-flex flex-wrap align-items-center">
              <div
                class=""
                v-for="item in userStrengthsData.interested"
                :key="item.name"
              >
                <button @click="getSkillInfo(item.id)" type="button" class="btn btn-secondary skillsDiv__buttonSkill">
                  {{item.name}}</button>
              </div>
            </div>
          </div>
        </div>
        <b-modal ref="my-modal" size="xl" hide-footer title=""
        :header-bg-variant="headerBgVariant"
        :body-bg-variant="bodyBgVariant"
        :scrollable="false"
        @hidden="closedModal">
        <InfoSkill
            :skillInfo = "skillInfo">
        </InfoSkill>
        </b-modal>
  </div>
</template>

<script>
import utils from "@/logic/utils";
import InfoSkill from "./InfoSkill.vue";
import request from "@/logic/request";
export default {
    name:'SkillsList',
    props:["userPubId"],
    components:{
        InfoSkill
    },
    data(){
        return{
            userStrengthsData: {
              expert:[],
              proficient:[],
              novice:[],
              interested:[]
            },
            // display for skills sections
            displayExpert:"",
            displayProficient:"",
            displayNovice:"",
            displayInterest:"",
            skillInfo:{
              skillName:"",
              relatedExperience:""
            },
            // styling modal
            headerBgVariant: 'dark',
            bodyBgVariant: 'dark'
        }
    },
    methods:{
        // filter skills
      filterSkills: function(userData){
        var data = JSON.parse(userData.strengths);
        this.displayExpert = "inline";
        this.displayProficient = "inline";
        this.displayNovice = "inline";
        this.displayInterest = "inline";
        var objStrengths = {
          expert:[],
          proficient:[],
          novice:[],
          interested:[]
        }
        this.userStrengthsData = objStrengths;
        data.forEach(element => {
          if(element.proficiency == "expert"){
            this.userStrengthsData.expert.push(element);
          }
          else if(element.proficiency == "proficient"){
            this.userStrengthsData.proficient.push(element);
          }
          else if(element.proficiency == "novice"){
            this.userStrengthsData.novice.push(element);
          }
          else if(element.proficiency == "no-experience-interested"){
            this.userStrengthsData.interested.push(element);
          }
        });
        
        var keys = Object.keys(this.userStrengthsData);
        keys.forEach((key) => {
          // sort the array in alphabetical order
          var sortedArray = this.userStrengthsData[key].sort((a,b) => utils.sortAlphabetical(a,b));
          this.userStrengthsData[key] = sortedArray;
          if(this.userStrengthsData[key].length == 0){
            switch(key){
              case "expert":
                this.displayExpert = "none";
                break;
              case "proficient":
                this.displayProficient = "none";
                break;
              case "novice":
                this.displayNovice = "none";
                break;
              case "interested":
                this.displayInterest = "none";
                break;
            }
          }
        });
      },
      // get info for one particular skill
      getSkillInfo: function(skillID){
        request.getSkillInfo(this.userPubId,skillID, this.$config.URL_API_ROOT)
          .then(response => {
            var data = response.data.response;
              if (response.data.status == "OK") {
                this.skillInfo.skillName = data.skillName;
                this.skillInfo.relatedExperience = data.relatedExperience;
                this.showModal();
              }
            })
            .catch(e => {
              this.errors.push(e);
            });
      },
      // show and hide modal
      showModal: function() {
        document.getElementsByTagName("body")[0].style.overflow="hidden";
        this.$refs['my-modal'].show();
      },
      closedModal: function(){
        document.getElementsByTagName("body")[0].style.overflowY="scroll";
        document.getElementsByTagName("body")[0].style.overflowX="hidden";
      },
    },
    mounted(){
      this.apiRootUrl = this.$config.URL_API_ROOT;
    }
}
</script>

<style src="../assets/styles/skillslist.css" scoped></style>