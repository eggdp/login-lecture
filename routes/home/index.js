"ues strict"

const { Router } = require("express");
const express=require("express");
const router=express.Router();

const ctrl=require("./home.ctrl");

router.get("/",ctrl.home);// 루트로 가면 home로 이동
router.get("/login",ctrl.login);// router는 요청을 연결해주는 역할 기능은 render이 수행합니다. /login 파일로가면 login화면으로 이동합니다.


module.exports=router; //외부에서 사용가능하게 함