<template>
  <div class="container-fluid">
    <div class="container-fluid navigation">
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center align-items-center">
          <div class="container">
            <div class="row">
              <h2><b>Skills</b> <span class="navigation__minimalLetter">from</span> <span class="navigation__torreSpan">Torre.co</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center justify-content-evenly">
      <div class="col-10 col-sm-10 col-md-6 col-lg-6">
        <p>
          Enter in your profile, and get your id in the browser, like this:
        </p>
        <div class="infoUser">
          <p class="infoUser__infoDesc">https://torre.co/en/<b>alejandroreyespena</b></p> 
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
          <div class="searchBar__searchBox">
            <form action="" @submit.prevent="searchPublicId(userPubId)">
              <input
                v-model="userPubId"
                class="searchBar__searchInput"
                type="text"
                name=""
                placeholder="Type your id, Hint: alejandroreyespena"
                v-on:keydown="cleanUI"
              />
              <button type="submit" v-on:click="searchPublicId(userPubId)" class="searchBar__searchButton">
                <i class="material-icons">
                  search
                </i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- showing info -->
    <div class="container">
      <div class="row align-items-center justify-content-evenly">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <p>{{ chargeMsg1 }}</p>
        </div>
      </div>
    </div>
    <!-- Showing user info -->
    <div
        class="row justify-content-around"
        v-bind:style="{ display: showUserData }"
      >
      <div class="col-11 col-sm-11 col-md-5 col-lg-5">
        <ProfileData :profileData = "userData" :userPubId = "userPubId" ref="profile"></ProfileData>
      </div>
      
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 skillsDiv">
        <SkillsList :userPubId="userPubId" ref="skills"></SkillsList>
      </div>
    </div>
    <hr>
    <!-- footer -->
    <footer class="container-fluid">
        <div class="footerMain">
          <div class="row d-flex align-items-center justify-content-around">
            <div class="col-6 col-sm-6 col-md-6 col-lg-6">
              <div class="footerMain__el-contact">
                <p> Developed by A. R. P. 2021</p>
              </div>
            </div>          
          </div>
        </div>
    </footer>    
  </div>
  
</template>

<script>
import request from "@/logic/request";
import ProfileData from "./ProfileData.vue";
import SkillsList from "./SkillsList.vue";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Main',
    components:{
        ProfileData,
        SkillsList
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
            userStrengthsData: {
              expert:[],
              proficient:[],
              novice:[],
              interested:[]
            },
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
              console.log(response);
              this.setLoading(false);
              if (response.data.response == "Not found") {
                this.showUserData = "none";
                this.chargeMsg1 = "We didn't found your profile";
              } else {
                this.showUserData = "flex";
                this.userData = response.data.response;
                this.chargeMsg1 = "So here's a part of your profile in Torre";
                this.$refs.profile.prepareDataUser(this.userData);
                this.$refs.skills.filterSkills(this.userData);
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
      cleanUI: function(){
        this.showUserData = 'none';
        this.chargeMsg1 = "";
      }
    },
    mounted(){
      this.apiRootUrl = this.$config.URL_API_ROOT;
    }
}
</script>

<style src="../assets/styles/main.css" scoped></style>