<template>
<div class="contSkillsCard">
    <div class="contSkillsCard__skillData" v-for="item in skillData" :key="item.id">
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <p class="contSkillsCard__iconText">
            <i class="material-icons contSkillsCard__iconText">work</i>Job Profile: {{ item.name }}
          </p>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <p class="contSkillsCard__iconText">
            <i class="material-icons contSkillsCard__iconText">task_alt</i>Verifications: {{ item.verifications }}
          </p>
        </div>
      </div>
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12" v-for="subitem in item.organizations" :key="subitem.name">
            <p class="contSkillsCard__iconText">
              <i class="material-icons contSkillsCard__iconText">corporate_fare</i>{{ subitem.name }}
            </p>
        </div>
      </div>
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <p class="contSkillsCard__iconTextInfo">
              <i class="material-icons contSkillsCard__iconText">info</i>Additional Info:
              {{ item.additionalInfo == "" ? "No aditional info" : item.additionalInfo}}
            </p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name:'SkillCard',
    props:["skillData"]
}
</script>

<style src="../assets/styles/skillcard.css" scoped></style>