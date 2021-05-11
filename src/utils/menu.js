export const menus = [
    {
        title: 'Dashboard', icon: 'mdi-monitor', to: {name: 'admin_dashboard'}, subs: [
            {title: 'Human Resource', icon: 'mdi-human', to: {name: 'admin_dashboard_hrm'}},
            {title: 'Payroll', icon: 'mdi-cash', to: {name: 'admin_dashboard_payroll'}},
        ]
    },
    {title: 'Users', icon: 'mdi-account-group-outline', to: {name: 'user'}},
    {title: 'Memos', icon: 'mdi-account-group-outline', to: {name: 'memo'}},
    {title: 'Departments', icon: 'mdi-account-group-outline', to: {name: 'department'}},
    {title: 'Banks', icon: 'mdi-account-group-outline', to: {name: 'bank'}},
    {title: 'Personnel Grouping', icon: 'mdi-account-group-outline', to: {name: 'personnel-group'}},
    {title: 'Settings', icon: 'mdi-account-group-outline', to: ''},
]
