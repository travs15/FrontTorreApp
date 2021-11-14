<template>
  <div class="container-fluid">
    <div class="container-fluid navigation">
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center align-items-center">
          <div class="container">
            <div class="row">
              <h2><b>Skills</b> <span class="minimalLetter">from</span> <span class="torre">Torre.co</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center justify-content-evenly indications">
      <div class="col-10 col-sm-10 col-md-6 col-lg-6">
        <p>
          Enter for your profile, and get your id in the browser, like this:
        </p>
        <div class="infoUser">
          <p class="infoDesc">https://torre.co/en/<b>alejandroreyespena</b></p> 
        </div>
        <p>
          Let's see your profile skills at Torre.co
        </p>
      </div>
    </div>
    <!-- search section -->
    <div class="container searchBar">
      <div class="row align-items-center justify-content-evenly ">
        <div class="col-10 col-sm-10 col-md-4 col-lg-4">
          <div class="searchBox">
            <input
              v-model="userPubId"
              class="searchInput"
              type="text"
              name=""
              placeholder="Type your id, Hint: alejandroreyespena"
            />
            <button v-on:click="searchPublicId(userPubId)" class="searchButton">
              <i class="material-icons">
                search
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- showing info -->
    <div class="container">
      <div class="row align-items-center justify-content-evenly">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 profile">
          <p>{{ chargeMsg1 }}</p>
        </div>
      </div>
    </div>
    <!-- Showing user info -->
    <div
        class="row justify-content-around userInfoContent"
        v-bind:style="{ display: showUserData }"
      >
      <div class="profileData col-11 col-sm-11 col-md-5 col-lg-5">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 imgCol">
            <img v-bind:src="urlUserPic" alt="" class="profileImg" />
          </div>
          <div class="row d-flex align-items-center justify-content-end">
            <div class="col-1 col-sm-1 col-md-1 col-lg-1">
              <a v-bind:href="urlTorreProfile" target="_blank">
                <button class="linkButton">
                  <i class="material-icons">link</i>
                </button>
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-9 col-lg-9 descCol">
            <div class="row">
              <div class="col-11 col-sm-11 col-md-11 col-lg-11">
                <h3>{{ userName }}</h3>
                <h6>{{ userHeadline }}</h6>
                <p class="iconAndText">
                  <i class="material-icons iconText">public</i
                  >{{ userLocation }}
                </p>
                <p class="iconAndText">
                  <i class="material-icons iconText">line_weight</i>Profile
                  weight:
                  {{ userWeight }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 interests profileRowInter2">
        <h4>Your profile <b>Skills</b></h4>
        <span class="">These are your proficient skills, click on any skill</span>
        <hr>
        <div class="container">
          <!-- <div class="row align-items-center justify-content-evenly"> -->
          <div class="d-flex flex-wrap align-items-center justify-content-between">
            <div
              class=""
              v-for="item in userStrengthsData"
              :key="item.name"
            >
              <button @click="getSkillInfo(item.id)" type="button" class="btn btn-secondary buttonSkill">
                {{item.name}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <b-modal ref="my-modal" size="xl" hide-footer title=""
      :header-bg-variant="headerBgVariant"
      :body-bg-variant="bodyBgVariant">
      <InfoSkill 
        :skillInfo = "skillInfo">
      </InfoSkill>
    </b-modal>
    <!-- footer -->
    <footer class="container-fluid">
        <div class="footerMain">
          <div class="row d-flex align-items-center justify-content-around">
            <div class="col-6 col-sm-6 col-md-6 col-lg-6">
              <div class="el-contact">
                <p>Alejandro Reyes P.</p>
              </div>
            </div>            
            <div class="col-6 col-sm-6 col-md-6 col-lg-6">
              <div class="el-contact">
                <p>Github</p>
              </div>
            </div>            
          </div>
        </div>
    </footer>
  </div>
</template>

<script>
import request from "@/logic/request";
import InfoSkill from "./InfoSkill.vue";
export default {
    name:'Main',
    components:{
      InfoSkill
    },
    data(){
        return{
            // data for axios request
            apiRootUrl: "",
            refCount: 0,
            isLoading: false,
            userPubId: "",
            errors: [],
            //   manage visualization
            showUserData: "none",
            chargeMsg1: "",
            //   data for user
            userData: null,
            userName: "",
            userLocation: "",
            userHeadline: "",
            userWeight: "",
            urlUserPic: "",
            urlTorreProfile: "",
            userStrengthsData: [],
            // torre url
            torreUrl: "",
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
      //   controlling loading state for axios request
      setLoading: function(isLoading) {
        if (isLoading) {
          this.chargeMsg1 = "Wait a few seconds ...";
          this.refCount++;
          this.isLoading = true;
        } else if (this.refCount > 0) {
          this.refCount--;
          this.isLoading = this.refCount > 0;
        }
      },
      //   make get request to get the user data with the user's public id
      searchPublicId: function(pubName) {
        if (this.userPubId != "") {
          this.setLoading(true);
          request.getUserInfo(pubName, this.apiRootUrl)
            .then(response => {
              this.setLoading(false);
              if (response.data.response == "Not found") {
                this.showUserData = "none";
                this.chargeMsg1 = "We didn't found your profile";
              } else {
                this.showUserData = "flex";
                this.userData = response.data.response;
                this.chargeMsg1 = "So here's part of your profile in Torre";
                this.prepareDataUser(this.userData);
              }
            })
            .catch(e => {
              this.setLoading(false);
              this.errors.push(e);
            });
        } else {
          this.chargeMsg1 = "You haven't enter your profile name";
        }
      },
      // prepare data user profile
      prepareDataUser: function(data) {
        // reset data
        this.userWeight = 0;
        // prepare data
        this.userName = data.name;
        this.urlUserPic = data.picture;
        this.userLocation = data.locationName;
        this.userHeadline = data.professionalHeadline;
        this.userWeight = this.formatToNumber(data.weight);
        this.urlTorreProfile = this.torreUrl + this.userPubId;
        this.userStrengthsData = this.filterSkills(JSON.parse(data.strengths));
      },
      // Format Number
      formatToNumber: function(value) {
        return Number(value).toFixed(0);
      },
      // filter skills
      filterSkills: function(data){
        var arraySkills = [];
        data.forEach(element => {
          if(element.proficiency == "proficient"){
            arraySkills.push(element);
          }
        });
        return arraySkills;
      },
      // show and hide modal
      showModal: function() {
        this.$refs['my-modal'].show();
      },
      hideModal: function() {
        this.$refs['my-modal'].hide();
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
      }
    },
    mounted(){
      this.apiRootUrl = this.$config.URL_API_ROOT;
      this.torreUrl = this.$config.URL_TORRE;
    }
}
</script>

<style src="../assets/styles/main.css" scoped></style>