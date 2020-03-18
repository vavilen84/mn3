import { Request, Response, NextFunction } from 'express'
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'

@Controller('images')
export class ImagesController {
    @Post()
    private add(req: Request, res: Response): void {
        res.status(200).json({msg: 'add_called'});
    }
}
