<template>
    <div>
        <v-card>
            <v-toolbar elevation="0">
                <v-toolbar-title>Users Repository</v-toolbar-title>
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
        name: 'User',
        data() {
            return {
                tabs: [
                    {icon: 'mdi-account-plus', name: 'user-all', title: 'Users'},
                    {icon: 'mdi-bank', name: 'user-bank', title: 'Bank'},
                    {icon: 'mdi-file', name: 'user-docs', title: 'Docs'},
                    {icon: 'mdi-account-multiple-outline', name: 'next-of-kin', title: 'Next-Of-Kin'},
                    {icon: 'mdi-cash-multiple', name: 'daily_rate', title: 'Daily Rate'},
                    {icon: 'mdi-cash', name: 'earnings', title: 'Earnings'},
                    {icon: 'mdi-apps', name: 'user_attendance', title: 'Attendance'},
                    {icon: 'mdi-trending-down', name: 'deductions', title: 'Deduction'},
                    {icon: 'mdi-walk', name: 'leaves', title: 'Leaves'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>
