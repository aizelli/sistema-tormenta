import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "../entities/user.entity";

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Fulano Beltrano',
    })
    name: string;

    @ApiProperty({
        description: 'Nome de usuário',
        example: 'Gandalf',
    })
    userName: string;

    @ApiProperty({
        description: 'E-mail do usuário',
        example: 'email@email.com',
    })
    email: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: '1234',
    })
    password: string;

    @ApiProperty({
        description: 'Tipo de usuário',
        enum: UserRole,
        example: UserRole.PLAYER,
    })
    type: UserRole;
}
