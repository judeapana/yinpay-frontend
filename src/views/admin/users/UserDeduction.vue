<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>User Deduction</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text v-if="!payload">
                    <UserDeductionForm :errors="errors" @on-submit="create" button="Create"></UserDeductionForm>
                </v-card-text>
                <v-card-text v-else>
                    <UserDeductionForm :deduction="payload" :errors="errors" @on-submit="update"
                                       button="Update"></UserDeductionForm>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-row>
            <v-col cols="12" md="12">
                <v-col cols="12" md="12">
                    <v-card elevation="2">
                        <v-card-title>Deductions</v-card-title>
                        <v-card-actions>
                            <v-btn @click="showDrawer">Add Deductions</v-btn>
                        </v-card-actions>
                        <v-card-subtitle></v-card-subtitle>
                        <DataTable :data="getUserDeduction" :handler="_get_user_deduction" :headers="headers"
                                   :loading="getLoading"
                                   @on-edit="OnUpdate"></DataTable>
                    </v-card>
                </v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import 'ant-design-vue/dist/antd.css';
    import {mapActions, mapGetters} from "vuex";
    import DataTable from "../../../components/dataTable/DataTable";
    import UserDeductionForm from "../../../components/forms/admin/UserDeductionForm";

    export default {
        name: 'UserDeduction',
        components: {
            UserDeductionForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                payload: null,
                errors: null,
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                    {text: 'Deduction Group', value: 'deduction_group.name'},
                    {text: 'Period', value: 'period.name'},
                    {text: 'Rate (%)', value: 'rate'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Actions', value: 'actions'},
                ]
            }
        },
        computed: {
            ...mapGetters('user_deduction', ['getLoading', 'getUserDeduction']),
        },
        methods: {
            ...mapActions('user_deduction', ['_get_user_deduction', '_post_user_deduction', '_put_user_deduction']),
            create(payload) {
                this._post_user_deduction(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_user_deduction({...payload, id: this.payload.id}).then(() => {
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
