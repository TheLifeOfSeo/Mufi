"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const sequelize_1 = require("sequelize");
//store는 mufi측에서 id만 채워서 등록됨.
const bUsers = index_1.sequelize.define("bUser", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    //username
    username: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    encrypted_password: {
        type: sequelize_1.DataTypes.STRING(32),
        allowNull: true,
    },
    registeredAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.NOW
    }
});
exports.default = bUsers;
//# sourceMappingURL=BUser.js.map