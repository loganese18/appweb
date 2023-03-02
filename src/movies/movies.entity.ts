import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], { unique: true })
@Entity('movies', { schema: 'db_appweb' })
export class MoviesEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 70 })
  title: string;

  @Column('smallint', { name: 'year', nullable: true })
  year: number | null;

  @Column('varchar', { name: 'genre', nullable: true, length: 30 })
  genre: string | null;

  @Column('smallint', { name: 'duration', nullable: true })
  duration: number | null;

  @Column('varchar', { name: 'director', nullable: true, length: 70 })
  director: string | null;
}
