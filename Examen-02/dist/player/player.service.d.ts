import { Repository } from 'typeorm';
import { Player } from './player.entity';
export declare class PlayerService {
    private playerRepository;
    constructor(playerRepository: Repository<Player>);
    findAll(): Promise<Player[]>;
    findOne(id: number): Promise<Player>;
    create(data: Partial<Player>): Promise<Partial<Player> & Player>;
    update(id: number, data: Partial<Player>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
