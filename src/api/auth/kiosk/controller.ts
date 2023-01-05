import { Router, Request, Response } from "express"
import Sin from "../../models/Sin"
import Uin from "../../models/Uin"
import QRCode from "qrcode"
import Agent from "../../models/Agent"

import md5 from "md5"

export const storeAuthorization = async (req: Request, res: Response) => {
    const inputedSin = req.body.sin

    //sin value is empty
    if (inputedSin == undefined) {
        res.status(400).json({
            code: 400,
            message: "sin이 입력되지 않았습니다."
        })

        return
    }

    const encrypted_sin = md5(inputedSin)

    Sin.findOne({
        where: {
            encrypted_sin,
        }
    })
        .then((matched_sin) => {
            if (matched_sin == null) {
                res.status(400).json({
                    code: 400,
                    message: "유효하지 않은 sin입니다."
                })

                return
            }
            if (req.session.kiosk == undefined) {
                req.session.kiosk = {
                    store_id: undefined,
                    user_id: undefined
                }
            }

            req.session.kiosk.store_id = matched_sin.getDataValue("store_id")

            res.redirect("/auth/kiosk/user")
        })
        .catch((err) => {
            if (err) {
                res.status(500).json({
                    code: 500,
                    message: "sin을 확인하는 도중에 알 수 없는 문제가 발생했습니다."
                })
            }
        })
}

export const renderStoreAuthorization = async (req: Request, res: Response) => {
    res.render("kiosk/wait-store")
}

export const renderUserAuthorization = async (req: Request, res: Response) => {
    if (req.session && req.session.kiosk && req.session.kiosk.store_id) {
        QRCode.toDataURL(`${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/auth/kiosk/user/qr`)
            .then((qrDataURL) => {
                res.render("kiosk/wait-user", { qrDataURL })
            })
            .catch(err => {
                res.status(500).json({
                    code: 500,
                    message: "qrcode를 생성하는 도중 문제가 발생했습니다."
                })
            })
    } else {
        res.redirect("/auth/kiosk/store")
    }
}

export const userAuthorization = async (req: Request, res: Response) => {
    const agent = await Agent.findOne({
        where: {
            store_id: req.session.kiosk.store_id,
        }
    })

    const user_id = agent.getDataValue("user_id")

    if (user_id) {
        req.session.kiosk.user_id = user_id

        res.status(200).json({
            code: 200,
            message: "user의 권한 승인"
        })
    } else {
        res.status(404).json({
            code: 404,
            message: "권한을 부여한 사용자가 없습니다."
        })
    }
}

export const userUnAuthorize = async (req: Request, res: Response) => {
    req.session.kiosk.user_id = null

    res.redirect("/auth/kiosk/user")
}

export const storeUnAuthorize = async (req: Request, res: Response) => {
    req.session.kiosk.user_id = null
    req.session.kiosk.store_id = null

    res.redirect("/auth/kiosk/store")
}