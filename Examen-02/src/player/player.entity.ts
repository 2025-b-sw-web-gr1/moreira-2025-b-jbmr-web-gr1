import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Team } from '../team/team.entity';

@Entity('player')
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @ManyToOne(() => Team, (team) => team.players, { onDelete: 'CASCADE' })
  team: Team;
}