import { sequelize } from "./index"
import { DataTypes } from "sequelize";

const Agent = sequelize.define("agent", {
    store_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: true
    }
}, {
    updatedAt: true,
    createdAt: false,
})

export default Agent