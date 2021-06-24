<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>User Attendance</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text>
                    <UserAttendanceForm @on-submit="create" button="Create"></UserAttendanceForm>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-card elevation="2">
            <v-card-title>Attendance</v-card-title>
            <v-card-actions>
                <v-btn @click="showDrawer">Add Attendance</v-btn>
            </v-card-actions>
            <v-card-subtitle></v-card-subtitle>
            <DataTable :data="getUserAttendance" :handler="_get_user_attendance" :headers="headers"
                       :loading="getLoading"></DataTable>
        </v-card>

    </div>
</template>

<script>
    import 'ant-design-vue/dist/antd.css';
    import UserAttendanceForm from "../../../components/forms/admin/UserAttendanceForm";
    import {mapActions, mapGetters} from "vuex";
    import DataTable from "../../../components/dataTable/DataTable";

    export default {
        name: 'UserAttendance',
        components: {
            UserAttendanceForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                ]
            }
        },
        computed: {
            ...mapGetters('attendance', ['getLoading', 'getUserAttendance']),
        },
        methods: {
            ...mapActions('attendance', ['_get_user_attendance']),
            create(payload) {
                console.log(payload)
            },

            OnUpdate(pk) {
                console.log(pk)
            },
            OnDelete(pk) {
                console.log(pk)
            },
            afterVisibleChange(val) {
                console.log('visible', val);
            },
            showDrawer() {
                this.visible = true;
            },
            onClose() {
                this.visible = false;
            },
        }
    }
</script>

<style scoped>

</style>
