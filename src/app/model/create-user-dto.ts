export class CreateUserDto {
    username: string;
    email: string;
    passwd: string;

    constructor(username:string,email:string,passwd:string){
        this.username=username;
        this.email=email;
        this.passwd=passwd;
    }
}
