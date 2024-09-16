import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Viagem } from "../entities/viagem.entity";

@Injectable()
export class ViagemService {
    constructor(
        @InjectRepository(Viagem)
        private viagemRepository: Repository<Viagem>
    ) { }

    async findAll(): Promise<Viagem[]> {
        return await this.viagemRepository.find();
    }

    async findById(id: number): Promise<Viagem> {

        let viagem = await this.viagemRepository.findOne({
            where: {
                id
            }
        });

        if (!viagem)
            throw new HttpException('Viagem não encontrada!', HttpStatus.NOT_FOUND);

        return viagem;
    }

    async create(Viagem: Viagem): Promise<Viagem> {
        return await this.viagemRepository.save(Viagem);
    }

    async update(viagem: Viagem): Promise<Viagem> {

        let buscaViagem = await this.findById(viagem.id);

        if (!buscaViagem || !viagem.id)
            throw new HttpException('Viagem não encontrada!', HttpStatus.NOT_FOUND);

        return await this.viagemRepository.save(viagem);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaViagem = await this.findById(id);

        if (!buscaViagem)
            throw new HttpException('Viagem não encontrada!', HttpStatus.NOT_FOUND);

        return await this.viagemRepository.delete(id);

    }

}