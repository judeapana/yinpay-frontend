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
                    {icon: 'mdi-account', name: 'user-all', title: 'Users'},
                    {icon: 'mdi-account', name: 'user-bank', title: 'Bank'},
                    {icon: 'mdi-account', name: 'user-docs', title: 'Docs'},
                    {icon: 'mdi-account', name: 'next-of-kin', title: 'Next-Of-Kin'},

                    {icon: 'mdi-account', name: 'earnings', title: 'Earnings'},
                    {icon: 'mdi-account', name: 'attendance', title: 'Attendance'},
                    {icon: 'mdi-account', name: 'deductions', title: 'Deduction'},
                    {icon: 'mdi-account', name: 'leaves', title: 'Leaves'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>
