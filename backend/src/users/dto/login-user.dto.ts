
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class LoginUserDto {
    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(16)
    login: string;

    @ApiProperty()
    @IsString()
    password: string;
}