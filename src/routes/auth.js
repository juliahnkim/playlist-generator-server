import express from "express";
import { login, callback, refreshToken } from "../controllers/spotify-auth.controller.ts"

const router = express.Router();

router.get("/login", login);
router.get("/callback", callback);
router.post("/refresh", refreshToken);

export default router;