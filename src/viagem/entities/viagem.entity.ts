import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_viagens"})
export class Viagem{

    @PrimaryGeneratedColumn() // Chave Primaria Autoincremental
    @ApiProperty()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    destino: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    data_partida: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    data_retorno: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    detalhes: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    imagem: string;
}
