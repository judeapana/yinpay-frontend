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
                            <v-card-text>
                                <BusinessAccountForm :errors="errors" @on-submit="create"
                                                     button="Create"></BusinessAccountForm>
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
                                               :loading="getLoading"></DataTable>
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
            // BusinessAccountForm,
            // Empty
            DataTable
        },
        data() {
            return {
                visible: false,
                errors: null,
                headers: [
                    {text: 'Account Type', value: 'account_type'},
                    {text: 'Account Name', value: 'account_name'},
                    {text: 'Code', value: 'code'},
                    {text: 'Currency', value: 'currency'},
                    {text: 'Primary', value: 'primary'},
                ]
            }
        },
        computed: {
            ...mapGetters('business_account', ['getLoading', 'getBa']),
        },
        methods: {
            ...mapActions('business_account', ['_get_business_account', '_post_business_account']),
            create(payload) {
                this._post_business_account(payload).then(() => {
                    this.visible = false
                    this._get_business_account()
                }).catch((errors) => {
                    this.errors = errors
                })
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
