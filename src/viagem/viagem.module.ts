import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Viagem } from "./entities/viagem.entity";
import { ViagemService } from "./services/viagem.service";
import { ViagemController } from "./controllers/viagem.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Viagem])],
    providers: [ViagemService],
    controllers: [ViagemController],
    exports: [TypeOrmModule]
})

export class ViagemModule {  }
