import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserProxy {
  @ApiProperty()
  id: number;

  @ApiProperty()
  cpf: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiPropertyOptional()
  //@ApiProperty()
  roleId?: string;

  @ApiPropertyOptional()
  //@ApiProperty()
  addresId?: string;
}
