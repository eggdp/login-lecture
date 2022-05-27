
"ues strict"
const express=require("express");
const app=express();

//앱 세팅
app.set("views","./views"); //뷰를 관리해줄 파일이 저장될 폴더
app.set("view engine","ejs");

//라우팅
const home=require("./routes/home");//index.js를 읽게된다.
app.use("/",home);//use > 미들웨어를 등록해주는 메서드

module.exports=app;//외부로의 app 요청을 받아준다.

package.json