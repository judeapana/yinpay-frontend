export const menus = [
    {
        title: 'Dashboard', breadcrumbName: 'Dashboard', icon: 'mdi-monitor', to: {name: 'admin_dashboard'}, subs: [
            {title: 'Human Resource', breadcrumbName: 'Hrm', icon: 'mdi-human', to: {name: 'admin_dashboard_hrm'}},
            {title: 'Payroll', breadcrumbName: 'Payroll', icon: 'mdi-cash', to: {name: 'admin_dashboard_payroll'}},
        ]
    },
    {title: 'Users', breadcrumbName: 'User', icon: 'mdi-account-group-outline', to: {name: 'user'}},
    {title: 'Memos', breadcrumbName: 'Memo', icon: 'mdi-account-group-outline', to: {name: 'memo'}},
    {title: 'Departments', breadcrumbName: 'Department', icon: 'mdi-account-group-outline', to: {name: 'department'}},
    {title: 'Banks', breadcrumbName: 'Banks', icon: 'mdi-account-group-outline', to: {name: 'bank'}},

    {title: 'Reg.Attendance', breadcrumbName: 'Banks', icon: 'mdi-account-group-outline', to: {name: 'attendance'}},
    {title: 'Your Business', breadcrumbName: 'Banks', icon: 'mdi-account-group-outline', to: {name: 'business'}},
    {
        title: 'Business Bank Acc',
        breadcrumbName: 'Banks',
        icon: 'mdi-account-group-outline',
        to: {name: 'business-accounts'}
    },
    {
        title: 'Deduction Groups',
        breadcrumbName: 'Banks',
        icon: 'mdi-account-group-outline',
        to: {name: 'deduction-group'}
    },
    {title: 'Earning Groups', breadcrumbName: 'Banks', icon: 'mdi-account-group-outline', to: {name: 'earning-group'}},
    {title: 'Period', breadcrumbName: 'Banks', icon: 'mdi-account-group-outline', to: {name: 'period'}},
    {title: 'Social Security Rates', breadcrumbName: 'Banks', icon: 'mdi-account-group-outline', to: {name: 'ssr'}},
    {title: 'Taxes', breadcrumbName: 'Banks', icon: 'mdi-account-group-outline', to: {name: 'tax'}},
    {title: 'Working Days', breadcrumbName: 'Banks', icon: 'mdi-account-group-outline', to: {name: 'working-days'}},

    {
        title: 'Personnel Grouping',
        breadcrumbName: 'Person',
        icon: 'mdi-account-group-outline',
        to: {name: 'personnel-group'}
    },
    {title: 'Settings', breadcrumbName: 'Settings', icon: 'mdi-account-group-outline', to: {name: 'settings'}},
]
