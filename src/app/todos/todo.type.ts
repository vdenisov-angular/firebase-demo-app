import * as firebase from 'firebase/app';


export interface ITodo {
  _id: string;
  uid: string;
  title: string;
  isCompleted: boolean;
  createdAt: Object;
}


export class Todo implements ITodo {
  _id;
  uid;
  title;
  isCompleted = false;
  createdAt = firebase.database.ServerValue.TIMESTAMP;

  constructor(uid: string, title: string) {
    this.uid = uid;
    this.title = title;
  }
}
