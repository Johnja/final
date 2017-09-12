import {Injectable} from '@angular/core';

@Injectable()

export class PermissionService {

permissionTablePageSize = 10;

permissionTableData = [
    {
      id: '1',
      name: 'Mark',
      description: 'permission 1',
   
    },
    
    {
      id: '2',
      name: 'Mark',
      description: 'permission 2',
    },
    {
      id: '3',
      name: 'Mark',
      description: 'permission 3',
    },
    {
      id: '4',
      
      name: 'Mark',
      description: 'permission 4',
    },
    
    {
      id: '5',
      
      name: 'Mark',
      description: 'permision 5',
    },
    {
      id: '6',
      
      name: 'Mark',
      description: 'permission 6',
    }, 
    {
      id: '7',
      
      name: 'Mark',
      description: 'permission 7',
    },
  
  ];

 

  constructor() {
    
  }

}