import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({ example: 'Vinícius Júnior' })
  name: string;

  @ApiProperty({ example: 'Delantero' })
  position: string;

  @ApiProperty({ example: 1, description: 'ID del equipo al que pertenece' })
  teamId: number;
} 