// import * as firebase from 'firebase/app';


// export interface ITodo {
//   $key?: string;
//   uid: string;
//   title: string;
//   completed: boolean;
//   createdAt: Object;
// }


// export class Todo implements ITodo {
//   uid;
//   title;
//   completed = false;
//   createdAt = firebase.database.ServerValue.TIMESTAMP;

//   constructor(uid: string, title: string) {
//     this.uid = uid;
//     this.title = title;
//   }
// }

export class Todo {
  public key: string;
  constructor(
    public uid: string,
    public title: string,
    public isCompleted: boolean = false
  ) {}
}
