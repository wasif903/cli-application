import express from "express";
import { HandleGetAllUsers, HandleLoginUser, HandleRegisterUser } from "../controllers/UserController.js";

const router = express.Router();


router.get("/get-users", HandleGetAllUsers);

router.post("/user-signup", HandleRegisterUser);

router.post("/login", HandleLoginUser);

export default router;