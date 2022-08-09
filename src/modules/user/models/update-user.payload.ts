import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserPayload {
  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(2, { message: 'O nome deve ser maior ou igual a 2 caracteres' })
  public name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({}, { message: 'A identificação do cargo deve ser um número' })
  public roleId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({}, { message: 'A identificação do endereço deve ser um número' })
  public addresId?: number;
}
