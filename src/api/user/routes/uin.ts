import { Router } from "express"
import { generateUin } from "../controller/uin"
export const uinRouter = Router()
import { userAuthenticated } from "../../auth/user/middleware"

uinRouter.use(userAuthenticated)

uinRouter.get("/", generateUin)
