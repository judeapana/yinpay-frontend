<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Your Period
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>Details</v-tab>
                <v-tab>Payroll</v-tab>

                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Period</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <PeriodForm :errors="errors" @on-submit="create" button="Create"></PeriodForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <PeriodForm :errors="errors" :period="payload" @on-submit="update"
                                            button="Update"></PeriodForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Period</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getPeriod" :handler="_get_period" :headers="headers"
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
    import PeriodForm from "../../components/forms/admin/PeriodForm";

    export default {
        name: 'Business',
        components: {
            PeriodForm,

            DataTable
        },
        data() {
            return {
                visible: false,
                payload: null,
                headers: [
                    {text: 'Name Of Month', value: 'name'},
                    {text: 'Month', value: 'month'},
                    {text: 'Make Payment', value: 'make_payment'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Notes', value: 'notes'},
                    {text: 'Actions', value: 'actions', align: 'right'},
                ],
                errors: null,
            }
        },
        computed: {
            ...mapGetters('period', ['getLoading', 'getPeriod']),
        },
        methods: {
            ...mapActions('period', ['_get_period', '_post_period', '_put_period', '_delete_period']),
            create(payload) {
                this._post_period(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_period({...payload, id: this.payload.id}).then(() => {
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
                        return this._delete_period(payload).catch(() => {
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
