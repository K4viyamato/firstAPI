import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('students_post')
export class StudentsPostEntity{

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({default:''})
    firstName:string;

    @Column({default:''})
    lastName:string;

    @Column({default:''})
    city:string;

    @Column({type: 'timestamp' , default: ()=>'CURRENT_TIMESTAMP'})
    enrolledIn:Date;

}