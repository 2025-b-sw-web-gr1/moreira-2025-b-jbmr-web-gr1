import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  findAll() { return this.teamRepository.find(); }
  findOne(id: number) { return this.teamRepository.findOneBy({ id }); }
  
  // Método especial para obtener equipo con sus jugadores
  findWithPlayers(id: number) {
    return this.teamRepository.findOne({
      where: { id },
      relations: ['players'],
    });
  }

  create(data: Partial<Team>) { return this.teamRepository.save(data); }
  update(id: number, data: Partial<Team>) { return this.teamRepository.update(id, data); }
  remove(id: number) { return this.teamRepository.delete(id); }
}