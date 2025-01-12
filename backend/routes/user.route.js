import express from "express";
import {
    getUserProfileAndFollowers,
    getUserProfileAndFollowing,
    getUserProfileAndRepos
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
router.get("/profile/followers/:username", getUserProfileAndFollowers);
router.get("/profile/following/:username", getUserProfileAndFollowing);

export default router;
