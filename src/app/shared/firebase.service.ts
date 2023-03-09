import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private fireService: AngularFireDatabase, private fireAuth: AngularFireAuth, private router: Router) {
  }
  //////donors/////
  sendMessage(data: any) {
    return this.fireService.list('messages').push(data);
  }

  getusers() {
    return this.fireService.list('users');
  }

  addUser(data: any) {
    return this.fireService.list('users').push(data);
  }

  signInWIthGoogle() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res) => {

      let users: any = [];
      this.getusers().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, value: c.payload.val() })
          )
        )
      ).subscribe(data => {
        users = data
        let user = users.filter((u: {
          value: any; uid: string | undefined;
        }) => u.value.uid == res.user?.uid)
        console.log(user)
        if (user.length == 0) {
          let data = {
            name: res.user?.displayName,
            email: res.user?.email,
            uid: res.user?.uid,
            photoUrl: res.user?.photoURL,
            phoneNumber: res.user?.phoneNumber
          }
          this.addUser(data);
        }
      });

      this.router.navigate([''])
      localStorage.setItem('token', JSON.stringify(res.user?.uid))
      localStorage.setItem('user', JSON.stringify(res.user))
    }, err => {
      console.log(err.message)
    })
  }

}
