import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsCPF } from "class-validator-cpf";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_usuario"})
export class Usuario{

    @PrimaryGeneratedColumn() // Chave Primaria Autoincremental
    @ApiProperty()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Bloquear espaços em branco
    @IsNotEmpty() // Não aceita resultado vazio 
    @Column({length: 100, nullable: false}) // Definir o tamanho e não aceitar vlor maior que 100
    @ApiProperty()
    nome: string;
    
    @IsNotEmpty()
    @Column({nullable: false})
    @ApiProperty()
    idade: Date;

    @IsCPF({ message: "Por favor digite um CPF válido (xxx.xxx.xxx-xx)" })
    @IsNotEmpty()
    @Column({nullable: false})
    @ApiProperty()
    cpf: string;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false})
    @ApiProperty()
    usuario: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    senha: string;

    @IsNotEmpty()
    @Column ({length: 255, nullable: false})
    @ApiProperty()
    foto: string;

    @ApiProperty()
    @Column ({length: 255, nullable: true})
    tipo: string;

}
