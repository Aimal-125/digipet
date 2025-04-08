import DashboardIcon from "/images/sidebar-icons/dashboard-icon.svg";

import PetParentsIcon from "/images/sidebar-icons/pet-parents-icon.svg";

import DoctorsIcon from "/images/sidebar-icons/doctors-icon.svg";

const sidebarItems = [
  {
    id: 1,
    path: "/dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 2,
    path: "/pet-parents",
    label: "Pet Parents",
    icon: PetParentsIcon,
    requiredRoles: ["doctor", "user"],
  },
  {
    id: 3,
    path: "/doctors",
    label: "Doctors",
    icon: DoctorsIcon,
    requiredRoles: ["doctor", "user"],
  },
];

export default sidebarItems;
