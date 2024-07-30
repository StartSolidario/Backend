
import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name: "tb_usuario"})
export class Usuario{

    @PrimaryGeneratedColumn() // Chave Primaria Autoincremental
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Bloquear espaços em branco
    @IsNotEmpty() // Não aceita resultado vazio 
    @Column({length: 100, nullable: false}) // Definir o tamanho e não aceitar vlor maior que 100
    nome: string;
    
    @IsNotEmpty()
    @Column({nullable: false})
    idade: Date;

    @IsNotEmpty()
    @Column({nullable: false})
    cpf: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false})
    usuario: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    senha: string;

    @IsNotEmpty()
    @Column ({length: 255, nullable: false})
    foto: string;

    @IsNotEmpty()
    @Column ({length: 255, nullable: false})
    tipo: string;

   @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto
}
