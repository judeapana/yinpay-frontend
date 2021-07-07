<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>User Attendance</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text v-if="!payload">
                    <UserAttendanceForm :errors="errors" @on-submit="create" button="Create"></UserAttendanceForm>
                </v-card-text>
                <v-card-text v-else>
                    <UserAttendanceForm :attendance="payload" :errors="errors" @on-submit="update"
                                        button="Update"></UserAttendanceForm>
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
                       :loading="getLoading"
                       @on-edit="OnUpdate"></DataTable>
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
                errors: null,
                payload: null,
                headers: [
                    {text: 'Reg.Attendance', value: 'attendance.name'},
                    {text: 'Attendance Type', value: 'attype'},
                    {text: 'Time', value: 'time'},
                    {text: 'Type', value: 'type'},
                    {text: 'User', value: 'user_meta.user.username'},
                    {text: 'Created', value: 'created',},
                    {text: 'Actions', align: 'start', value: 'actions'},
                ]
            }
        },
        computed: {
            ...mapGetters('user_attendance', ['getLoading', 'getUserAttendance']),
        },
        methods: {
            ...mapActions('user_attendance', ['_get_user_attendance', '_post_user_attendance', '_put_user_attendance']),
            create(payload) {
                this._post_user_attendance(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_user_attendance({...payload, id: this.payload.id}).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            OnUpdate(payload) {
                this.payload = payload
                this.visible = true
            },
            OnDelete(pk) {
                console.log(pk)
            },
            afterVisibleChange(val) {
                console.log('visible', val);
            },
            showDrawer() {
                this.payload = null
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
