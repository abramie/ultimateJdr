import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import * as  path from "path";

export class BaseController {


    async hello_world(request: Request, response: Response, next: NextFunction) {
        return { message: "Hello from server!" };
    }



}