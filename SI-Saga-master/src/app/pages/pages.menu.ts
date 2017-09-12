export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Tablero',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
   
      {
        path: 'projects',
        data: {
          menu: {
            title: 'Proyectos',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'generalproject',
            data: {
              menu: {
                title: 'Proyecto Raíz',
              }
            }
          },
          {
            path: 'subproject',
            data: {
              menu: {
                title: 'Subproyecto',
              }
            }
          },
          {
            path: 'viewprojects',
            data: {
              menu: {
                title: 'Listar Proyectos',
              }
            }
          },
          {
            path: 'editproject',
            data: {
              menu: {
                title: 'Editar Proyecto',
              }
            }
          },
    
         
        ]
      },

      {
        path: 'documents',
        data: {
          menu: {
            title: 'Documentos',
            icon: 'ion-ios-paper-outline',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'newdocument',
            data: {
              menu: {
                title: 'Crear Documento',
              }
            }
          },
          {
            path: 'viewdocuments',
            data: {
              menu: {
                title: 'Listar Documentos',
              }
            }
          },
          {
            path: 'editdocument',
            data: {
              menu: {
                title: 'Editar Documento',
              }
            }
          },
   
        ]
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'Usuarios',
            icon: 'ion-ios-person-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'newuser',
            data: {
              menu: {
                title: 'Crear usuario',
              }
            }
          },
          {
            path: 'viewusers',
            data: {
              menu: {
                title: 'Listar Usuarios',
              }
            }
          },
          {
            path: 'edituser',
            data: {
              menu: {
                title: 'Editar usuario',
              }
            }
          },
 
        ]
      },
      {
        path: 'configurationsaga',
        data: {
          menu: {
            title: 'Configuración',
            icon: 'ion-ios-gear-outline',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: 'configurationsisaga',
            data: {
              menu: {
                title: 'Configurar SAGA',
              }
            }
          },
        
        ]
      },
     
  
    ]
  }
];
