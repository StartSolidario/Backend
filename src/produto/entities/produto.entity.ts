import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { ApiProperty } from "@nestjs/swagger";
import { NumericTransformer } from "../../util/numerictransformer";

@Entity({ name: "tb_produto" })
export class Produto {

    @ApiProperty()
    @PrimaryGeneratedColumn() // Chave Primaria Autoincremental
    id: number;

    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim()) //Bloquear espaços em branco
    @IsNotEmpty() // Não aceita resultado vazio 
    @Column({ length: 100, nullable: false }) // Definir o tamanho e não aceitar vlor maior que 100
    nome: string;

    @ApiProperty()
    @Column({ length: 1000, nullable: true })
    tamanho: string;

    @ApiProperty()
    @Column({ length: 1000, nullable: true })
    cor: string;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 8, scale: 2, transformer: new NumericTransformer() })
    preco: number;

    @ApiProperty()
    @Column({ nullable: true })
    quantidade: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    foto: string;

    //Muitos Produtos, possuem uma categoria (Muitos para um)
    @ApiProperty({ type: () => Produto })
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
}
