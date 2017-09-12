import {Component} from '@angular/core';
import {RoleService} from '../../../../theme/services/roleService/role.service';
import {Role} from '../../../../theme/services/roleService/role';
import { Observable } from 'rxjs/Rx';

import {Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ViewUsersService} from '../../../../theme/services/viewUsersService/viewusers.service';
import {Users} from '../../../../theme/services/viewUsersService/users';

@Component({
  selector: 'edituser',
  templateUrl: './edituser.html',
  styleUrls: ['./edituser.scss']
})
export class Edituser {
  roles: Role[];
  userEdit: Users = new Users();
  msgError: string;
  users: Users[];
  
  constructor( 
    private _roleService: RoleService, 
    private _viewUsersService: ViewUsersService,
    private route: ActivatedRoute, 
    private router: Router ) {
  
    this.loadRoles();
    this.loadUsers();
   
  }

  ngOnitInit(){
    let id = this.route.snapshot.params['id'];
    if (!id) return;
    
    console.log(id);
    
    }

 

      updateUser(userEdit: Users){
        if(!userEdit) return;
        this._viewUsersService.putUser(userEdit)
        .subscribe(
          rt => console.log(rt),
          er => console.log(er),
          () => this.goLista()
        );
          }
        
     
        
        goLista(){
        
        let link = [];
        this.router.navigate(link);
        
        }
        
  loadRoles(){  
    
    
    this._roleService.getRole().subscribe(roles =>this.roles = roles, error => this.msgError = <any>error);
        }
        loadUsers(){
          
          
          this._viewUsersService.getUsers().subscribe(users => this.users = users, error => this.msgError = <any>error);
              }


}
