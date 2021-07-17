<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>Daily Rates</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text v-if="!payload">
                    <DailyRateForm :errors="errors" @on-submit="create" button="Create"></DailyRateForm>
                </v-card-text>
                <v-card-text v-else>
                    <DailyRateForm :daily_rate="payload" :errors="errors" @on-submit="update"
                                   button="Update"></DailyRateForm>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-row>
            <v-col cols="12" md="12">
                <v-col cols="12" md="12">
                    <v-card elevation="2">
                        <v-card-title>Daily Rate</v-card-title>
                        <v-card-actions>
                            <v-btn @click="showDrawer">Add Daily Rate</v-btn>
                        </v-card-actions>
                        <v-card-subtitle></v-card-subtitle>
                        <DataTable @on-delete="OnDelete" :data="getDailyRate" :handler="_get_daily_rate" :headers="headers"
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
    import DailyRateForm from "../../../components/forms/admin/DailyRateForm";

    export default {
        name: 'UserDailyRate',
        components: {
            DailyRateForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                payload: null,
                errors: null,
                headers: [
                    {text: 'User', value: 'user_meta.user.username',},
                    {text: 'Period', value: 'period.name',},
                    {text: 'Main Amount', value: 'main_amount',},
                    {text: 'Emergency Amount', value: 'emergency_amount',},
                    {text: 'Disabled', value: 'disabled',},
                    {text: 'Notes', value: 'notes',},
                    {text: 'Actions', value: 'actions',},
                ]
            }
        },
        computed: {
            ...mapGetters('daily_rate', ['getLoading', 'getDailyRate']),
        },
        methods: {
            ...mapActions('daily_rate', ['_get_daily_rate', '_post_daily_rate', '_put_daily_rate','_delete_daily_rate']),
            create(payload) {
                this._post_daily_rate(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_daily_rate({...payload, id: this.payload.id}).then(() => {
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
                        return this._delete_daily_rate(payload).catch(() => {
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
