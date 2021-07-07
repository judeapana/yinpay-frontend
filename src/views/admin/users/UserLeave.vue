<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>User Documents</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text v-if="!payload">
                    <UserLeaveForm :errors="errors" @on-submit="create" button="Create"></UserLeaveForm>
                </v-card-text>
                <v-card-text v-else>
                    <UserLeaveForm :errors="errors" :leave="payload" @on-submit="update"
                                   button="Update"></UserLeaveForm>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-row>
            <v-col cols="12" md="12">
                <v-col cols="12" md="12">
                    <v-card elevation="2">
                        <v-card-title>Leaves</v-card-title>
                        <v-card-actions>
                            <v-btn @click="showDrawer">Add Leave</v-btn>
                        </v-card-actions>
                        <v-card-subtitle></v-card-subtitle>
                        <DataTable :data="getLeaves" :handler="_get_leaves" :headers="headers" :loading="getLoading"
                                   @on-edit="OnUpdate"></DataTable>
                    </v-card>
                </v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import 'ant-design-vue/dist/antd.css';
    import DataTable from "../../../components/dataTable/DataTable";
    import {mapActions, mapGetters} from "vuex";
    import UserLeaveForm from "../../../components/forms/admin/UserLeaveForm";

    export default {
        name: 'UserLeave',
        components: {
            UserLeaveForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                errors: null,
                payload: null,
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                    {text: 'Without Pay', value: 'without_pay',},
                    {text: 'Type', value: 'ltype',},
                    {text: 'From Date', value: 'from_date',},
                    {text: 'To Date', value: 'to_date',},
                    {text: 'Reason', value: 'reason',},
                    {text: 'Status', value: 'status',},
                    {text: 'Action', value: 'actions',},
                ]
            }
        },
        computed: {
            ...mapGetters('leave', ['getLoading', 'getLeaves']),
        },
        methods: {
            ...mapActions('leave', ['_get_leaves', '_post_leaves', '_put_leaves']),
            create(payload) {
                this._post_leaves(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_leaves({...payload, id: this.payload.id}).then(() => {
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
