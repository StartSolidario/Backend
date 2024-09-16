import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Produto } from "../../produto/entities/produto.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Viagem } from "../../viagem/entities/viagem.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_start_solidario',
            entities: [Viagem, Produto, Categoria, Usuario],
            synchronize: true,
    };
  }
}
