import { usersDao } from "../dao/index.js";

export class ChatService {

    static createUsers(){
        return usersDao.createUsers()
    }
    static getUserByEmail(email){
        return usersDao.getUserByEmail(email)
    }
    static getUserById(id){
        return usersDao.getUserById(id)
    }
}

