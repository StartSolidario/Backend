import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_categorias"})
export class Categoria{

    @PrimaryGeneratedColumn() // Chave Primaria Autoincremental
    @ApiProperty() 
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Bloquear espaços em branco
    @ApiProperty() 
    @IsNotEmpty() // Não aceita resultado vazio 
    @Column({length: 100, nullable: false}) // Definir o tamanho e não aceitar valor maior que 100
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @ApiProperty() 
    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    imagem: string;

    @ApiProperty() 
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[]
}
