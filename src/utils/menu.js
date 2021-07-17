export const menus = [
    {
        title: 'Dashboard', breadcrumbName: 'Dashboard', icon: 'mdi-monitor', to: {name: 'admin_dashboard'}, subs: [
            {title: 'Human Resource', breadcrumbName: 'Hrm', icon: 'mdi-human', to: {name: 'admin_dashboard_hrm'}},
            {title: 'Payroll', breadcrumbName: 'Payroll', icon: 'mdi-cash', to: {name: 'admin_dashboard_payroll'}},
        ]
    },
    {title: 'Users', breadcrumbName: 'User', icon: 'mdi-account-multiple-plus', to: {name: 'user'}},
    {title: 'Memos', breadcrumbName: 'Memo', icon: 'mdi-book', to: {name: 'memo'}},
    {title: 'Departments', breadcrumbName: 'Department', icon: 'mdi-school', to: {name: 'department'}},
    {title: 'Banks', breadcrumbName: 'Banks', icon: 'mdi-bank', to: {name: 'bank'}},

    {title: 'Reg.Attendance', breadcrumbName: 'Banks', icon: 'mdi-apps', to: {name: 'attendance'}},
    {title: 'Your Business', breadcrumbName: 'Banks', icon: 'mdi-server-plus', to: {name: 'business'}},
    {
        title: 'Business Bank Acc',
        breadcrumbName: 'Banks',
        icon: 'mdi-ticket-account',
        to: {name: 'business-accounts'}
    },
    {
        title: 'Deduction Groups',
        breadcrumbName: 'Banks',
        icon: 'mdi-trending-down',
        to: {name: 'deduction-group'}
    },
    {title: 'Earning Groups', breadcrumbName: 'Banks', icon: 'mdi-cash', to: {name: 'earning-group'}},
    {title: 'Period', breadcrumbName: 'Banks', icon: 'mdi-shape-plus', to: {name: 'period'}},
    {title: 'Social Security Rates', breadcrumbName: 'Banks', icon: 'mdi-security', to: {name: 'ssr'}},
    {title: 'Taxes', breadcrumbName: 'Banks', icon: 'mdi-credit-card', to: {name: 'tax'}},
    {title: 'Working Days', breadcrumbName: 'Banks', icon: 'mdi-account-switch', to: {name: 'working-days'}},

    {
        title: 'Personnel Grouping',
        breadcrumbName: 'Person',
        icon: 'mdi-account-circle',
        to: {name: 'personnel-group'}
    },
    {title: 'Settings', breadcrumbName: 'Settings', icon: 'mdi-flash', to: {name: 'settings'}},
    {title: 'Profile', breadcrumbName: 'Profile', icon: 'mdi-account', to: {name: 'profile'}},
]
