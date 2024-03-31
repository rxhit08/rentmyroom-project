import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import { nanoid } from 'nanoid';

@Entity()
export class Contact {
@PrimaryColumn('text')
  id!: string;

  @Column('text')
  firstName!: string;

  @Column('text')
  lastName!: string;

  @Column('text')
  email!: string;

  @Column('text')
  phoneNumber!: string;

  @Column('text')
  subject!: string;

  @Column('text')
  issue!: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;

  @BeforeInsert()
  generateNanoId() {
    this.id = nanoid();
  }
}
