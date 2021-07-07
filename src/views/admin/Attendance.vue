<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Attendance
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>Details</v-tab>

                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Attendances</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <AttendanceForm :errors="errors" @on-submit="create" button="Create"></AttendanceForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <AttendanceForm :attendance="payload" :errors="errors" @on-submit="update"
                                                button="Update"></AttendanceForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>

                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="1">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Attendance</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getUserAttendance" :handler="_get_attendance" :headers="headers"
                                               :loading="getLoading"
                                               @on-edit="OnUpdate"></DataTable>
                                </v-card>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>

    import DataTable from "../../components/dataTable/DataTable";
    import {mapActions, mapGetters} from "vuex";
    import AttendanceForm from "../../components/forms/admin/AttendanceForm";

    export default {
        name: 'Attendance',
        components: {
            AttendanceForm,
            DataTable
        },
        data() {
            return {
                errors: null,
                visible: false,
                headers: [
                    {text: 'Name', value: 'name'},
                    {text: 'Day', value: 'day'},
                    {text: 'Period', value: 'period.name'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Actions', value: 'actions', align: 'right'}
                ],
            }
        },
        computed: {
            ...mapGetters('attendance', ['getLoading', 'getUserAttendance']),
        },
        methods: {
            ...mapActions('attendance', ['_get_attendance', '_post_attendance', '_put_attendance']),
            create(payload) {
                this._post_attendance(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_attendance({...payload, id: this.payload.id}).then(() => {
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
