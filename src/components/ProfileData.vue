<template>
  <div class="userInfoCont">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 userInfoCont__profileData">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 userInfoCont__imgCol">
            <img v-bind:src="urlUserPic" alt="" class="userInfoCont__profileImg" />
          </div>
          <div class="row d-flex align-items-center justify-content-end">
            <div class="col-1 col-sm-1 col-md-1 col-lg-1">
              <a v-bind:href="urlTorreProfile" target="_blank">
                <button class="userInfoCont__linkButton">
                  <i class="material-icons">link</i>
                </button>
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-9 col-lg-9 userInfoCont__descCol">
            <div class="row">
              <div class="col-11 col-sm-11 col-md-11 col-lg-11">
                <h3>{{ userName }}</h3>
                <h6>{{ userHeadline }}</h6>
                <p class="userInfoCont__iconAndText">
                  <i class="material-icons">public</i
                  >{{ userLocation }}
                </p>
                <p class="userInfoCont__iconAndText">
                  <i class="material-icons">line_weight</i>Profile
                  weight:
                  {{ userWeight }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import utils from "@/logic/utils";
export default {
    name:'ProfileData',
    props:["profileData","userPubId"],
    data(){
        return{
            //   data for user
            // userData: null,
            userName: "",
            userLocation: "",
            userHeadline: "",
            userWeight: 0,
            urlUserPic: "",
            urlTorreProfile: "",
            // torre url
            torreUrl: ""
        }
    },
    methods: {
        prepareDataUser: function(data) {
          // reset data
          this.userWeight = 0;
          // prepare data
          this.userName = data.name;
          this.urlUserPic = data.picture;
          this.userLocation = data.locationName;
          this.userHeadline = data.professionalHeadline;
          this.userWeight = utils.formatToNumber(data.weight);
          this.urlTorreProfile = this.torreUrl + this.userPubId;
      },
    },
    mounted(){
        this.torreUrl = this.$config.URL_TORRE;
    }
}
</script>

<style src="../assets/styles/profile.css" scoped></style>