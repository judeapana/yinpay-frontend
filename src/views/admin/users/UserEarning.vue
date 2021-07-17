<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>User Earnings</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text v-if="!payload">
                    <UserEarningForm :errors="errors" @on-submit="create" button="Create"></UserEarningForm>
                </v-card-text>
                <v-card-text v-else>
                    <UserEarningForm :earning="payload" :errors="errors" @on-submit="update"
                                     button="Update"></UserEarningForm>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-row>
            <v-col cols="12" md="12">
                <v-col cols="12" md="12">
                    <v-card elevation="2">
                        <v-card-title>Earning</v-card-title>
                        <v-card-actions>
                            <v-btn @click="showDrawer">Add Earning</v-btn>
                        </v-card-actions>
                        <v-card-subtitle></v-card-subtitle>
                        <DataTable :data="getUserEarning" :handler="_get_user_earning" :headers="headers"
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
    import 'ant-design-vue/dist/antd.css';
    import {mapActions, mapGetters} from "vuex";
    import DataTable from "../../../components/dataTable/DataTable";
    import UserEarningForm from "../../../components/forms/admin/UserEarningForm";

    export default {
        name: 'UserEarning',
        components: {
            UserEarningForm,
            DataTable
        },
        data() {
            return {
                payload: true,
                visible: false,
                errors: null,
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                    {text: 'Earning Group', value: 'earning_group.name',},
                    {text: 'Period', value: 'period.name',},
                    {text: 'Rate(%)', value: 'rate',},
                    {text: 'Disabled', value: 'disabled',},
                    {text: 'Action', value: 'actions',},
                ]
            }
        },
        computed: {
            ...mapGetters('user_earning', ['getLoading', 'getUserEarning']),
        },
        methods: {
            ...mapActions('user_earning', ['_get_user_earning', '_post_user_earning', '_put_user_earning', '_delete_user_earning']),
            create(payload) {
                this._post_user_earning(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_user_earning({...payload, id: this.payload.id}).then(() => {
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
                        return this._delete_user_earning(payload).catch(() => {
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
