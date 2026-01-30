import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TeamService } from 'src/team/team.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTeamDto } from './dto/create-team.dto';

@ApiTags('teams') // Agrupa los endpoints en la web
@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los equipos' })
  @ApiResponse({ status: 200, description: 'Equipos obtenidos con éxito.' })
  findAll() { return this.teamService.findAll(); }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo' })
  create(@Body() createTeamDto: CreateTeamDto) { 
    return this.teamService.create(createTeamDto); 
  }

  @Get(':id/players')
  @ApiOperation({ summary: 'Obtener jugadores de un equipo específico' })
  findPlayers(@Param('id') id: number) { 
    return this.teamService.findWithPlayers(id); 
  }
}