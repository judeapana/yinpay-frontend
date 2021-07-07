<template>
    <div>
        <v-row>
            <v-dialog max-width="690"
                      v-if="visible"
                      v-model="visible">
                <v-card>
                    <v-card-title> Users</v-card-title>
                    <v-card-subtitle>Please provide the following information to complete the form</v-card-subtitle>
                    <v-card-text v-if="!payload">
                        <UserForm :errors="errors" @on-submit="create" button="Create"></UserForm>
                    </v-card-text>
                    <v-card-text v-else>
                        <UserForm  :errors="errors" :user="payload" @on-submit="update" button="Update"></UserForm>
                    </v-card-text>
                </v-card>
            </v-dialog>

            <v-col cols="12" md="12">
                <v-card elevation="2">
                    <v-card-title>Your Users</v-card-title>
                    <v-card-actions>
                        <v-btn @click="showDrawer">Create New User</v-btn>
                    </v-card-actions>
                    <v-card-subtitle></v-card-subtitle>
                    <DataTable :data="getUsers" :handler="_get_user" :headers="headers" :loading="getLoading"
                               @on-delete="OnDelete"
                               @on-edit="OnUpdate"></DataTable>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    import 'ant-design-vue/dist/antd.css';
    import UserForm from "../../../components/forms/admin/UserForm";
    import {mapActions, mapGetters} from "vuex";
    import DataTable from "../../../components/dataTable/DataTable";

    export default {
        name: 'AllUsers',
        components: {
            DataTable,
            UserForm,
        },
        computed: {
            ...mapGetters('user', ['getLoading', 'getUsers']),
        },
        data() {
            return {
                errors: null,
                visible: false,
                headers: [
                    {text: 'Username', align: 'start', value: 'username',},
                    {text: 'Email Address', value: 'email_address',},
                    {text: 'Phone Number', value: 'phone_number',},
                    {text: 'Role', value: 'role',},
                    {text: 'Disabled', value: 'disabled',},
                    {text: 'Created', value: 'created',},
                    {text: 'Actions', value: 'actions', sortable: false},
                ],
            }
        },
        methods: {
            ...mapActions('user', ['_get_user', '_post_user', '_put_user']),
            create(payload) {
                this._post_user(payload).then(() => {
                    this.visible = false
                    this._get_user()
                }).catch((errors) => this.errors = errors)
            },
            update(payload) {
                delete payload.password
                this._put_user({...payload, id: this.payload.id}).then(() => {
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
        }
    }
</script>

<style scoped>

</style>
