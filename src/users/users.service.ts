import { Injectable } from '@nestjs/common';




export type User = {
    userId: number;
    username: string;
    password: string;
} 

@Injectable()
export class UsersService {

    //Créer un user trouver si il existe
    


    private readonly users: User[] = [
        {
            userId: 1,
            username:"ami",
            password: 'passer',
        },
        {
            userId: 2,
            username:"ali",
            password: 'passer',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username===username);
    }
}
