// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'doctor dashboard',
    path: '/admin/dashboard/doctor',
    icon: getIcon('healthicons:doctor'),
  },
  {
    title: 'patient dashboard',
    path: '/admin/dashboard/patient',
    icon: getIcon('healthicons:virus-patient'),
  },
  {
    title: 'appointments',
    path: '/admin/dashboard/appointments',
    icon: getIcon('icon-park-outline:appointment'),
  },
  {
    title: 'instant consultation',
    path: '/admin/dashboard/blog',
    icon: getIcon('ic:outline-quickreply'),
  },
  {
    title: 'specialities & symptoms',
    path: '/admin/dashboard/specialities',
    icon: getIcon('maki:doctor'),
  },
  {
    title: 'doctor schedule',
    path: '/admin/dashboard/specialities',
    icon: getIcon('akar-icons:schedule'),
  },
  {
    title: 'doctor fees',
    path: '/admin/dashboard/specialities',
    icon: getIcon('cil:money'),
  },
  {
    title: 'services & procedures',
    path: '/admin/dashboard/specialities',
    icon: getIcon('material-symbols:medical-services-outline-rounded'),
  },
  {
    title: 'manage medicines',
    path: '/admin/dashboard/specialities',
    icon: getIcon('healthicons:medicines'),
  },
  {
    title: 'all transactions',
    path: '/admin/dashboard/specialities',
    icon: getIcon('uil:transaction'),
  },
  {
    title: 'patient offers',
    path: '/admin/dashboard/specialities',
    icon: getIcon('tabler:discount-2'),
  },
  {
    title: 'advertisements and banners',
    path: '/admin/dashboard/specialities',
    icon: getIcon('icons8:advertising'),
  },
  // {
  //   title: 'pro members/corporate',
  //   path: '/admin/dashboard/specialities',
  //   icon: getIcon('icons8:advertising'),
  // },
  // {
  //   title: 'referal system',
  //   path: '/admin/dashboard/specialities',
  //   icon: getIcon('icons8:advertising'),
  // },
  // {
  //   title: 'chat',
  //   path: '/admin/dashboard/specialities',
  //   icon: getIcon('icons8:advertising'),
  // },
  // {
  //   title: 'call',
  //   path: '/admin/dashboard/specialities',
  //   icon: getIcon('icons8:advertising'),
  // },
  // {
  //   title: 'member subscription',
  //   path: '/admin/dashboard/specialities',
  //   icon: getIcon('icons8:advertising'),
  // }
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
