<template>
    <div>
        <v-card>
            <v-toolbar elevation="0">
                <v-toolbar-title>Reports</v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab :key="tab.name" :to="{name:tab.name}" v-for="tab in tabs">
                    <v-icon left v-text="tab.icon"></v-icon>
                    {{tab.title}}
                </v-tab>
            </v-tabs>
            <v-card-text>
                <router-view></router-view>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Report",
        data() {
            return {
                tabs: [
                    {icon: 'mdi-package-variant', name: 'payroll-report', title: 'Payroll'},
                    {icon: 'mdi-inbox', name: 'payslip-report', title: 'PaySlips'},
                    {icon: 'mdi-inbox', name: 'earning-report', title: 'Earnings'},
                    {icon: 'mdi-inbox', name: 'attendance-report', title: 'Attendance'},
                    {icon: 'mdi-inbox', name: 'deduction-report', title: 'Deduction'},
                    {icon: 'mdi-inbox', name: 'leaves-report', title: 'Leaves'},
                    {icon: 'mdi-inbox', name: 'ssnit-report', title: 'SSNIT'},
                ]
            }
        }
    }
</script>
