import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ example: 'Real Madrid', description: 'Nombre del equipo' })
  name: string;

  @ApiProperty({ example: 'España', description: 'País de origen' })
  country: string;
}