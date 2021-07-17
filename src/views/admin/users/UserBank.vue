<template>
    <div>
        <v-row>
            <v-col cols="12" md="12">
                <v-col cols="12" md="12">
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>User Attendance</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <UserBankForm @on-submit="create" button="Create"></UserBankForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <UserBankForm :bank="payload" @on-submit="update" button="Update"></UserBankForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>

                    <v-card elevation="2">
                        <v-card-title>User Bank Accounts</v-card-title>
                        <v-card-actions>
                            <v-btn @click="showDrawer">Add Account</v-btn>
                        </v-card-actions>
                        <v-card-subtitle></v-card-subtitle>
                        <DataTable :data="getBankDetails" :handler="_get_bank_details" :headers="headers"
                                   :loading="getLoading"
                                   @on-delete="OnDelete"
                                   @on-edit="OnUpdate"></DataTable>
                    </v-card>
                </v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import DataTable from "../../../components/dataTable/DataTable";
    import {mapActions, mapGetters} from "vuex";
    import UserBankForm from "../../../components/forms/admin/UserBankForm";

    export default {
        name: 'UserBank',
        components: {
            UserBankForm,
            DataTable,
        },
        computed: {
            ...mapGetters('bank_detail', ['getLoading', 'getBankDetails']),
        },
        data() {
            return {
                errors: null,
                visible: false,
                payload: null,
                headers: [
                    {text: 'User', value: 'user_meta.user.username',},
                    {text: 'Bank', value: 'bank.name',},
                    {text: 'Branch', value: 'branch'},
                    {text: 'Currency', value: 'currency'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Actions', value: 'actions'},
                ]
            }
        },
        methods: {
            ...mapActions('bank_detail', ['_get_bank_details', '_post_bank_details', '_put_bank_details', '_delete_bank_details']),
            create(payload) {
                this._post_bank_details(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_bank_details({...payload, id: this.payload.id}).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            OnUpdate(payload) {
                this.payload = payload
                this.visible = true
            },
            OnDelete(payload) {
                this.$confirm({
                    title: 'Do you want to delete these items? ',
                    content: 'When you click the OK button this item will be deleted without recovery',
                    onOk: () => {
                        return this._delete_bank_details(payload).catch(() => {
                            this.$error({ title:"Error Occurred", content:"Sorry but an error occurred, we are working to fix this issue.Thank You" })
                        })
                    },
                    onCancel: () => {
                    },
                });
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
