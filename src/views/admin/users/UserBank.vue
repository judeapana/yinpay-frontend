<template>
    <div>
        <v-row>
            <v-col cols="12" md="12">
                <v-col cols="12" md="12">
                    <!--                    <UserBankForm button="Add Account"></UserBankForm>-->
                    <!--                    <v-btn @click="showDrawer" color="primary">Create Now</v-btn>-->
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
    // import UserBankForm from "../../../components/forms/admin/UserBankForm";
    import DataTable from "../../../components/dataTable/DataTable";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'UserBank',
        components: {
            DataTable,
            // UserBankForm,
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
