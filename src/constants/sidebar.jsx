import DashboardIcon from "/images/sidebar-icons/dashboard-icon.svg";

import PetParentsIcon from "/images/sidebar-icons/pet-parents-icon.svg";

import DoctorsIcon from "/images/sidebar-icons/doctors-icon.svg";

import LabsIcon from "/images/labs/labs-icon.svg";

import AppointmentsIcon from "/images/appointments/appointments-icon.svg";

import BookedLabTestsIcon from "/images/booked-lab-tests/booked-lab-tests-icon.svg";

import DoctorsCategoriesIcon from "/images/doctors-categories/categories-icon.svg";

import LabTestsCategoriesIcon from "/images/lab-tests-categories/categories-icon.svg";

import AllServicesIcon from "/images/all-services/all-services-icon.svg";

import AllSpecialitiesIcon from "/images/all-specialities/all-specialities-icon.svg";

import AllHospitalsIcon from "/images/all-hospitals/all-hospitals-icon.svg";

import AdminIcon from "/images/admin/admin-icon.svg";

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
  {
    id: 4,
    path: "/labs",
    label: "Labs",
    icon: LabsIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 5,
    path: "/appointments",
    label: "Appointments",
    icon: AppointmentsIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 6,
    path: "/booked-lab-tests",
    label: "Booked Lab Tests",
    icon: BookedLabTestsIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 7,
    path: "/doctors-categories",
    label: "Doctors Categories",
    icon: DoctorsCategoriesIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 8,
    path: "/lab-tests-categories",
    label: "Lab Tests Categories",
    icon: LabTestsCategoriesIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 9,
    path: "/all-services",
    label: "All Services",
    icon: AllServicesIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 10,
    path: "/all-specialities",
    label: "All Specialities",
    icon: AllSpecialitiesIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 11,
    path: "/all-hospitals",
    label: "All Hospitals",
    icon: AllHospitalsIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 12,
    path: "/notifications",
    label: "Notifications",
    icon: "./images/notifications/notifications-icon.svg",
    requiredRoles: ["admin"],
  },
  {
    id: 13,
    path: "/informations",
    label: "Informations",
    icon: "./images/informations/informations-icon.svg",
    requiredRoles: ["admin"],
  },
  {
    id: 14,
    path: "/support",
    label: "Support",
    icon: "./images/support/support-icon.svg",
    requiredRoles: ["admin"],
  },
  {
    id: 15,
    path: "/admin-users",
    label: "Admin Users",
    icon: AdminIcon,
    requiredRoles: ["admin"],
  },
  {
    id: 16,
    path: "/settings",
    label: "Settings",
    icon: "./images/settings/settings-icon.svg",
    requiredRoles: ["admin"],
  },
];

export default sidebarItems;
