import {Component} from '@angular/core';
import {RoleService} from '../../../../theme/services/roleService/role.service';
import {Role} from '../../../../theme/services/roleService/role';
import { Observable } from 'rxjs/Rx';

import {Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ViewUsersService} from '../../../../theme/services/viewUsersService/viewusers.service';
import {Users} from '../../../../theme/services/viewUsersService/users';
@Component({
  selector: 'newuser',
  styleUrls: ['./newuser.scss'],
  templateUrl: './newuser.html',
})
export class Newuser {
//isEdit = false;
 
user: Users = new Users();
submitted = false;
  roles: Role[];
  msgError: string;
  constructor(
    private _roleService: RoleService, 
    private _viewUsersService: ViewUsersService,
    private route: ActivatedRoute, 
    private router: Router ) {

    
    this.loadRoles();
 
}
ngOnitInit(){
  let id = this.route.snapshot.params['id'];
  if (!id) return;
  
  console.log(id);
  
  }



goLista(){

let link = [];
this.router.navigate(link);

}

  saveUser(){
    
    this._viewUsersService.addUser(this.user)
    .subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => console.log('Terminado') 
     

    );
    
    
    }




loadRoles(){
  
  
  this._roleService.getRole().subscribe(roles =>this.roles = roles, error => this.msgError = <any>error);
      }

}
