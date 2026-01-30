import { PlayerService } from './player.service';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    findAll(): Promise<import("./player.entity").Player[]>;
    findOne(id: number): Promise<import("./player.entity").Player>;
    create(body: any): Promise<Partial<import("./player.entity").Player> & import("./player.entity").Player>;
    update(id: number, body: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
