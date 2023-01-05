import express from "express"
//import routers

//user router
import { authUser } from "./api/auth/user/route"

//buser router
import { menuRouter } from "./api/buser/routes/menu"
import { authBUser } from "./api/auth/buser/route"
import { bUserRouter } from "./buser/router"
import { storeRouter } from "./api/buser/routes/store"
import { kioskRouter } from "./kiosk/router"
import { kioskAuthRouter } from "./api/auth/kiosk/route"
import { orderRouter } from "./api/kiosk/routes/order"
import { sinRouter } from "./api/buser/routes/sin"
import { userHomeRouter } from "./user/router"
import { uinRouter } from "./api/user/routes/uin"
import { PaymentRouter } from "./api/user/routes/Payment"

import path from "path"
import session from "express-session"
import dbConfig from "./api/config/DBConfig"
import createSessionConfig from "./api/config/SessionConfig"
const MySQLStore = require("express-mysql-session")(session)
import { bUserAuthenticated } from "./api/auth/buser/middleware"
import { userAuthenticated } from "./api/auth/user/middleware"
import fileupload from "express-fileupload"
import { checkGotStoreAuthorization, checkGotUserAuthorization } from "./api/auth/kiosk/middleware"
import { renderIndex } from "./router"

export const app = express()

//set port number
app.set("port", process.env.PORT || 80)

//set view engine 'ejs'
app.set("view engine", "ejs");

//set views folder for view engine
app.set("views", path.join(__dirname, "../views", "templates"))

//static serving
app.use(express.static(path.join(__dirname, "../views", "statics")))
app.use(express.static(path.join(process.env.PWD, "media")))


//enable body parser
app.use(express.urlencoded({ extended: true }))

app.use(fileupload({}))
const sessionStore = new MySQLStore(dbConfig)

app.use(session(createSessionConfig(sessionStore)))




app.use(express.static(path.join(__dirname, "../public"))) // intergrate-svelte : /public 위치에 대해 static 미들웨어 설정
app.get("/", renderIndex); // intergrate-svelte : 기본 도메인에 index.html 렌더링


//--------------------------------------
//user routing
app.use("/user/", userAuthenticated)
//for api
app.use("/api/user", userAuthenticated)

app.use("/auth/user", authUser)
app.use("/user", userHomeRouter)
app.use("/api/user/uin", uinRouter)
app.use("/api/user/payment", PaymentRouter)


//--------------------------------------
//buser routing

//for home
app.use("/buser", bUserAuthenticated)
//for api
app.use("/api/buser", bUserAuthenticated)
app.use("/auth/buser", authBUser)
app.use("/buser", bUserRouter)

app.use("/api/buser/menu", menuRouter)
app.use("/api/buser/store", storeRouter)
app.use("/api/buser/sin", sinRouter)

//--------------------------------------
app.use("/api/kiosk", checkGotStoreAuthorization)
app.use("/api/kiosk", checkGotUserAuthorization)
app.use("/api/kiosk/order", orderRouter)

app.use("/kiosk", checkGotStoreAuthorization)
app.use("/kiosk", checkGotUserAuthorization)
app.use("/kiosk", kioskRouter)

app.use("/auth/kiosk", kioskAuthRouter)




