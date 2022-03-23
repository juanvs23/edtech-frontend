export const sideBar = [
  {
    page: "Inicio",
    url: "/",
    icon: "fa fa-tachometer-alt",
    children: null,
  },
  
  {
    page: "Cursos",
    url: "/",
    icon: "fa  fa-chalkboard",
    children: [
      {
        page: "Lista de cursos",
        url: "/courses/list",
        icon: "fa fa-book-open",
        children: null,
      },
      {
        page: "crear curso",
        url: "/courses/create",
        icon: "fa fa-times",
        children: null,
      },
     
    ],
  },
  
  {
    page: "Usuarios",
    url: "/",
    icon: "fa fa-users",
    children: [
      {
        page: "Lista de instructores",
        url: "/user/create",
        icon: "fa fa-user-plus",
        children: null,
      },
      {
        page: "Crear instructores",
        url: "/user/list",
        icon: "fa fa-user-friends",
        children: null,
      },
    ],
  },
  
];
