import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  findAll() { return this.playerRepository.find({ relations: ['team'] }); }
  findOne(id: number) { return this.playerRepository.findOneBy({ id }); }
  create(data: Partial<Player>) { return this.playerRepository.save(data); }
  update(id: number, data: Partial<Player>) { return this.playerRepository.update(id, data); }
  remove(id: number) { return this.playerRepository.delete(id); }
}