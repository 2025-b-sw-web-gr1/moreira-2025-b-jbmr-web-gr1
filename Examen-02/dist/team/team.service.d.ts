import { Repository } from 'typeorm';
import { Team } from './team.entity';
export declare class TeamService {
    private teamRepository;
    constructor(teamRepository: Repository<Team>);
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team>;
    findWithPlayers(id: number): Promise<Team>;
    create(data: Partial<Team>): Promise<Partial<Team> & Team>;
    update(id: number, data: Partial<Team>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
