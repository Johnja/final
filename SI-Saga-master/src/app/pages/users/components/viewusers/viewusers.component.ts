import { Component } from '@angular/core';
import { ViewUsersService } from '../../../../theme/services/viewUsersService/viewusers.service';
import { RoleService } from '../../../../theme/services/roleService/role.service';
import { Role } from '../../../../theme/services/roleService/role';
import { Observable } from 'rxjs/Rx';
import { Users } from '../../../../theme/services/viewUsersService/users';

@Component({
  selector: 'viewusers',
  templateUrl: './viewusers.html',
  styleUrls: ['./viewusers.scss']
})

export class ViewUsers {

  user: Users = new Users();
  roles: Role[];
  users: Users[];
  msgError: string;

  constructor(private _viewUsersService: ViewUsersService, private _roleService: RoleService) {

    this.loadRoles();
    this.loadUsers();
  }

  loadRoles() {

    this._roleService.getRole().subscribe(roles => this.roles = roles, error => this.msgError = <any>error);
  }

  loadUsers() {

    this._viewUsersService.getUsers().subscribe(users => this.users = users, error => this.msgError = <any>error);
  }

}
