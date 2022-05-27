"ues strict"

const home=(request,response)=>{
    response.render("home/index");
};
const login=(request,response)=>{
    response.render("home/login");
};
module.exports={
    home,
    login,
};//2개의 객체를 밖으로 넘겨준다.

