import { Module } from "@nestjs/common";
import { Categoria } from "./categoria/entities/categoria.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  CategoriaModule } from "./categoria/categoria.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Produto } from "./produto/entities/produto.entity";
import { ProdutoModule } from "./produto/Produto.module";
import { Usuario } from "./usuario/entities/usuario.entity";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_start_solidario',
      entities: [Categoria,Produto, Usuario],
      synchronize: true,
      logging: true,
    }),
    CategoriaModule, 
    ProdutoModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}