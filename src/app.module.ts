import { Module } from "@nestjs/common";
import { Categoria } from "./categoria/entities/categoria.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  CategoriaModule } from "./categoria/categoria.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Produto } from "./produto/entities/produto.entity";
import { ProdutoModule } from "./produto/Produto.module";
import { Usuario } from "./usuario/entities/usuario.entity";
import { UsuarioModule } from "./usuario/usuario.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { ProdService } from "./data/services/prod.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
        imports: [ConfigModule],
    }),
    CategoriaModule, 
    ProdutoModule,
    AuthModule,
    UsuarioModule
    
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
