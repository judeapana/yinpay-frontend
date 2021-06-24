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
                            <v-card-text>
                                <UserBankForm @on-submit="create" button="Create"></UserBankForm>
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
                                   :loading="getLoading"></DataTable>
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
                visible: false,
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                    {text: 'Bank', align: 'start', value: 'bank.name',},
                    {text: 'Account Number', value: 'no'},
                    {text: 'Code', value: 'code'},
                    {text: 'Branch', value: 'branch'},
                    {text: 'Currency', value: 'currency'},
                ]
            }
        },
        methods: {
            ...mapActions('bank_detail', ['_get_bank_details']),
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
