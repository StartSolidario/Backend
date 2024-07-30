import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_produto"})
export class Produto{

    @PrimaryGeneratedColumn() // Chave Primaria Autoincremental
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Bloquear espaços em branco
    @IsNotEmpty() // Não aceita resultado vazio 
    @Column({length: 100, nullable: false}) // Definir o tamanho e não aceitar vlor maior que 100
    nome: string;
    
    @Column({length: 1000, nullable: true})
    tamanho: string;

    @Column({length: 1000, nullable: true})
    cor: string;

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 8, scale: 2 })
    preco: number;

    @Column({length: 1000, nullable: true})
    quantidade: number;

    @IsNotEmpty()
    @Column ({length: 255, nullable: false})
    foto: string;

    //Muitos Produtos, possuem uma categoria (Muitos para um)
   @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

    //Muitos Produtos, possuem um usuario (Muitos para um)
    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}
