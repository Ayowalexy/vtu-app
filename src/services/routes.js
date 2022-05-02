const baseUrl = `https://pvxdrugs.com/vtuportal/api/v1` //staging

export const auth = {
    username: "admin",
    password: 123
}

const urls = {
    //USER ONBOARDING ENDPOINTS
    SIGN_UP: `${baseUrl}/user/signup.php`,
    LOGIN: `${baseUrl}/user/login.php`,


    //USER PROFILE
    FETCH_USER_PROFILE: `${baseUrl}/user/getprofile.php`,
    UPDATE_PROFILE: `${baseUrl}/user/update_profile.php`,

    //PASSWORD UPDATE
    UPDATE_PASSWORD: `${baseUrl}/user/change_password.php`
}

export default urls