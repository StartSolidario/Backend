import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  CategoriaModule } from "./categoria/categoria.module";
import { AppController } from "./app.controller";
import { ProdutoModule } from "./produto/Produto.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { ViagemModule } from "./viagem/viagem.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";

import { ProdService } from "./data/services/prod.service";
import { DevService } from "./data/services/dev.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: DevService,
        imports: [ConfigModule],
    }),
    ViagemModule,
    CategoriaModule, 
    ProdutoModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
