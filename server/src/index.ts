import * as express from "express"
import { Request, Response } from "express"
import * as path from 'path';
import "reflect-metadata"
import { DataSource } from "typeorm"
import {Bob} from "./Models/User";
import {item} from "./Models/item";
import * as bodyParser from "body-parser";
import {Routes} from "./routes";
import {User} from "./entity/User";
import { AppDataSource } from "./data-source"



AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method]('/api' + route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    app.get(/(.*)/, (req, res) => {
        console.log("send client")
        res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Timber",
            lastName: "Saw",
            age: 27
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Phantom",
            lastName: "Assassin",
            age: 24
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))