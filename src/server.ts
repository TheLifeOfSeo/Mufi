import { app } from "./app";
import { sequelize } from "./api/models"
const expressListRoutes = require("express-list-routes")
const port = app.get("port");

const server = app.listen(port, process.env.HOST, onListening);

server.on("error", onError);

console.log(expressListRoutes(app))

function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind =
        typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;

    //connect to database
    //yarn run init을 실행했을 경우, mufi scheme에 table만 생성하고 프로세스를 종료함
    sequelize.sync({ force: process.env.INIT ? true : false })
        .then(() => {
            //init 이면 프로세스 종료
            if (process.env.INIT) {
                server.close()
                sequelize.close()
                    .then(() => {
                        process.exit(0)
                    })
                    .catch(err => {
                        throw err
                    })

            }
        })
        .catch(err => {
            throw err
        })
}

export default server;
