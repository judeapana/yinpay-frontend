<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Your Bank Accounts Businesses
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>

                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Business Accounts</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <BusinessAccountForm :errors="errors" @on-submit="create"
                                                     button="Create"></BusinessAccountForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <BusinessAccountForm :account="payload" :errors="errors" @on-submit="update"
                                                     button="Update"></BusinessAccountForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Business Account</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getBa" :handler="_get_business_account" :headers="headers"
                                               :loading="getLoading"
                                               @on-delete="OnDelete"
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
    import BusinessAccountForm from "../../components/forms/admin/BusinessAccountForm";

    export default {
        name: 'BusinessAccount',
        components: {
            BusinessAccountForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                errors: null,
                payload: null,
                headers: [
                    {text: 'Account Type', value: 'account_type'},
                    {text: 'Account Name', value: 'account_name'},
                    {text: 'Code', value: 'code'},
                    {text: 'Currency', value: 'currency'},
                    {text: 'Primary', value: 'primary'},
                    {text: 'Actions', value: 'actions', align: 'right'}

                ]
            }
        },
        computed: {
            ...mapGetters('business_account', ['getLoading', 'getBa']),
        },
        methods: {
            ...mapActions('business_account', ['_get_business_account', '_post_business_account', '_put_business_account', '_delete_business_account']),
            create(payload) {
                this._post_business_account(payload).then(() => {
                    this.visible = false
                    this._get_business_account()
                }).catch((errors) => {
                    this.errors = errors
                })
            },
            update(payload) {
                this._put_business_account({...payload, id: this.payload.id}).then(() => {
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
                    title: 'Do you want to delete these items?',
                    content: 'When you click the OK button this item will be deleted without recovery',
                    onOk: () => {
                        return this._delete_business_account(payload).catch(() => {
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
