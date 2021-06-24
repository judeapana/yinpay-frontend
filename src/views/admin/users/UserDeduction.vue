<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>User Attendance</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text>
                    <UserDeductionForm @on-submit="create" button="Create"></UserDeductionForm>
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
                                   :loading="getLoading"></DataTable>
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
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                ]
            }
        },
        computed: {
            ...mapGetters('user_deduction', ['getLoading', 'getUserDeduction']),
        },
        methods: {
            ...mapActions('user_deduction', ['_get_user_deduction']),
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
