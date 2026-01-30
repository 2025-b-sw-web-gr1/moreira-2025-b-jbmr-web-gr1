import { TeamService } from './team.service';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    findAll(): Promise<import("./team.entity").Team[]>;
    findOne(id: number): Promise<import("./team.entity").Team>;
    findPlayers(id: number): Promise<import("./team.entity").Team>;
    create(body: any): Promise<Partial<import("./team.entity").Team> & import("./team.entity").Team>;
    update(id: number, body: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
