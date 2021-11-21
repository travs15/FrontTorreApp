import axios from "axios";

var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

export default{
    getUserInfo(userId, API_PATH){
        return axios.get(API_PATH + userId, config);
    },
    getSkillInfo(userId, skillId ,API_PATH){
        return axios.get(API_PATH + userId + "/" + skillId, config);
    }
}
