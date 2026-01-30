import { TeamService } from 'src/team/team.service';
import { CreateTeamDto } from './dto/create-team.dto';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    findAll(): Promise<import("../../../src/team/team.entity").Team[]>;
    create(createTeamDto: CreateTeamDto): Promise<Partial<import("../../../src/team/team.entity").Team> & import("../../../src/team/team.entity").Team>;
    findPlayers(id: number): Promise<import("../../../src/team/team.entity").Team>;
}
