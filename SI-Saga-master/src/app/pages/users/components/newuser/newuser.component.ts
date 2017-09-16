import { Component } from '@angular/core';
import { RoleService } from '../../../../theme/services/roleService/role.service';
import { Role } from '../../../../theme/services/roleService/role';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViewUsersService } from '../../../../theme/services/viewUsersService/viewusers.service';
import { Users } from '../../../../theme/services/viewUsersService/users';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'newuser',
  styleUrls: ['./newuser.scss'],
  templateUrl: './newuser.html',
})

export class Newuser {

  user: Users = new Users();
  submitted = false;
  roles: Role[];
  msgError: string;
  role: Role = new Role();

  constructor(
    private _roleService: RoleService,
    private _viewUsersService: ViewUsersService,
    private route: ActivatedRoute,
    private router: Router) {

    this.loadRoles();
  }

  ngOnitInit() {
    let id = this.route.snapshot.params['id'];
    if (!id) return;
    console.log(id);
  }


  resetForm() {
    this.user.idnuser = null;
    this.user.name = '';
    this.user.lastname = '';
    this.user.nameuser = '';
    this.user.email = '';
  }

  saveUser() {

    this._viewUsersService.addUser(this.user)
      .subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => console.log('Terminado')

      );
  }


  loadRoles() {

    this._roleService.getRole().subscribe(roles => this.roles = roles, error => this.msgError = <any>error);
  }

}
