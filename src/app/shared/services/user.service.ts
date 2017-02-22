import {Injectable} from '@angular/core';
import {User} from './../models/user';

//const users: User[] = [
const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg'
  }
//];
]);

@Injectable()
export class UserService {

  //get all users
  getUsers(){
    return usersPromise;
  }

  getUser(name){

    return usersPromise.then(users=>users.find(user=> user.name===name));

    // let user= usersPromise.then(users=>{
    //   return users.find(user=>{
    //     return user.name===name;
    //   });
    // });
    //
    // return user;
  }


  //find a specific user

  constructor() {
  }

}
