// phone-number.entity.ts
import { Entity, PrimaryColumn, Column, BeforeInsert, Unique } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { nanoid } from 'nanoid';

@Entity()
@Unique(['userSubmittedEmail', 'roomId']) // Ensure email is unique per room
@Unique(['userSubmittedNumber', 'roomId']) // Ensure phone number is unique per room
export class PhoneNumber {
    @PrimaryColumn('text')
    id!: string;

    @Column('text')
    userSubmittedName!: string;

    @Column('text')
    userSubmittedEmail!: string;

    @Column('text')
    userSubmittedNumber!: string;

    @Column('text')
    roomId!: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_At!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_At!: Date;

    @BeforeInsert()
    generateNanoId() {
        this.id = nanoid();
    }
}
