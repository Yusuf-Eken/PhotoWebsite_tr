import express from "express"
import * as pageController from "../controllers/pageController.js"
//ya da 
//import {getindexPage , getAboutPage} from "../controllers/pageController.js"
const router = express.Router()

// / a bir komut geldiğinde pageControllerdaki getindexPage e gitmem gerek
router.route("/").get(pageController.getindexPage)
router.route("/about").get(pageController.getAboutPage)

export default router