export const sidebarItems = [
  {
    id: 1,
    path: "/dashboard",
    label: "Dashboard",
    requiredRoles: ["admin"],
  },
  {
    id: 2,
    path: "/pet-parents",
    label: "Pet Parents",
    requiredRoles: ["doctor", "user"],
  },
  {
    id: 3,
    path: "/doctors",
    label: "Doctors",
    requiredRoles: ["doctor", "user"],
  },
];
