import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ProdutoService } from "../services/produto.service";
import { Produto } from "../entities/produto.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@Controller("/produtos")
export class ProdutoController{

    constructor(private readonly produtoService: ProdutoService){}

    @Get()
    @HttpCode(HttpStatus.OK) //Http Status 200
    findALL(): Promise<Produto[]>{
        return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK) //Http Status 200
    findById(@Param('id', ParseIntPipe)id:number): Promise<Produto>{
        return this.produtoService.findById(id);
    } 

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK) //Http Status 200
    findByName(@Param('nome', )nome:string): Promise<Produto[]>{
        return this.produtoService.findByName(nome);
    } 

    @UseGuards(JwtAuthGuard)
    @Post()
    @HttpCode(HttpStatus.CREATED) // Http Status 201
    create(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.create(produto);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    @HttpCode(HttpStatus.OK) // Http Status 200
    update(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.update(produto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) //Http Status 204
    delete(@Param('id', ParseIntPipe)id:number){
        return this.produtoService.delete(id);
    } 
}
