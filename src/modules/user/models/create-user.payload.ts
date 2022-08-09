import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserPayload {
  @ApiProperty()
  @IsDefined({ message: 'O nome deve ser definido' })
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(2, { message: 'O nome deve ser maior ou igual a 2 caracteres' })
  public name: string;

  @ApiProperty()
  @IsDefined({ message: 'O email deve ser definido' })
  @IsString({ message: 'O email deve ser uma string' })
  @IsEmail({ message: 'O email não é válido' })
  public email: string;

  @ApiProperty()
  @IsDefined({ message: 'A senha deve ser definida' })
  @IsString({ message: 'A senha deve ser uma string' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  public password: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({}, { message: 'A identificação do cargo deve ser um número' })
  public roleId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({}, { message: 'A identificação do endereço deve ser um número' })
  public addresId?: number;
}
