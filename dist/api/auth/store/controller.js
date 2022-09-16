"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signout = exports.signup = exports.renderSignup = exports.signin = exports.renderSignin = void 0;
const User_1 = __importDefault(require("../..//v1/models/User"));
const BUser_1 = __importDefault(require("../../v1/models/BUser"));
const uuid_1 = require("uuid");
const md5_1 = __importDefault(require("md5"));
const renderSignin = async (req, res) => {
    res.render("signin");
};
exports.renderSignin = renderSignin;
const signin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const encrypted_password = (0, md5_1.default)(password);
    let user_email_matched = await User_1.default.findOne({ where: { email: email } });
    // user mismatched signin failed.
    if (user_email_matched == null) {
        //sign in failed message have to does not include reason 
        res.status(401).send({
            code: 401,
            message: "계정이 일치하지 않습니다."
        });
        return;
    }
    // user password mismatched
    if (encrypted_password != user_email_matched.getDataValue("encrypted_password")) {
        //sign in failed message have to does not include reason 
        res.status(401).send({
            code: 401,
            message: "계정이 일치하지 않습니다."
        });
        return;
    }
    //validation succeded
    let user = user_email_matched;
    //save session 
    req.session.user = user;
    res.redirect("/");
};
exports.signin = signin;
const renderSignup = (req, res) => {
    res.render("signup");
};
exports.renderSignup = renderSignup;
const signup = async (req, res) => {
    const { username, email, password1, password2 } = req.body;
    //check empty value
    if (!(username && email && password1 && password2)) {
        res.status(400).json({
            code: 400,
            message: "입력되지 않은 정보가 있습니다."
        });
        return;
    }
    const usernameOverlabUser = await User_1.default.findOne({ where: { username } });
    //user already exist with username
    if (usernameOverlabUser) {
        res.status(400).json({
            code: 400,
            message: "이미 등록된 사용자 이름 입니다."
        });
        return;
    }
    //check password mismatch
    if (password1 != password2) {
        res.status(400).json({
            code: 400,
            message: "비밀번호 확인이 일치하지 않습니다.",
        });
        return;
    }
    //hash password
    const encrypted_password = (0, md5_1.default)(password1);
    //generate uuid for user id
    const id = (0, uuid_1.v4)();
    User_1.default.create({
        id,
        username,
        encrypted_password,
        email,
    })
        .then(buser => {
        res.status(200).json({
            code: 200,
            bUser: BUser_1.default
        });
    })
        .catch(err => {
        console.log(err);
        res.status(400).json({
            code: 400,
            message: err.message,
        });
    });
};
exports.signup = signup;
const signout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(400).json({
                code: 400,
                message: "잘못된 요청입니다."
            });
        }
    });
    res.clearCookie("connect.sid");
    res.redirect("/auth/signin");
};
exports.signout = signout;
//# sourceMappingURL=controller.js.map