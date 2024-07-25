import { Module } from "@nestjs/common";
import { Categoria } from "./categoria/entities/categoria.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  CategoriaModule } from "./categoria/categoria.module";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_start_solidario',
      entities: [Categoria],
      synchronize: true,
      logging: true,
    }),
    CategoriaModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}