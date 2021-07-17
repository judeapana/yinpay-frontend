<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Working Days
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>Details</v-tab>
                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Working Days</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <WorkingDayForm :errors="errors" @on-submit="create" button="Create"></WorkingDayForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <WorkingDayForm :days="payload" :errors="errors" @on-submit="update"
                                                button="Update"></WorkingDayForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Working Days</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getWorkingDays" :handler="_get_working_days" :headers="headers"
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
    import {mapActions, mapGetters} from "vuex";
    import DataTable from "../../components/dataTable/DataTable";
    import WorkingDayForm from "../../components/forms/admin/WorkingDayForm";

    export default {
        name: 'WorkingDay',
        components: {
            WorkingDayForm,
            DataTable
        },
        data() {
            return {
                payload: null,
                visible: false,
                headers: [
                    {text: 'Period', value: 'period.name'},
                    {text: 'Personnel Group', value: 'personnel_group.name'},
                    {text: 'Days', value: 'days'},
                    {text: 'Hours', value: 'hours'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Notes', value: 'notes'},
                    {text: 'Actions', value: 'actions', align: 'right'}
                ],
                errors: null
            }
        },
        computed: {
            ...mapGetters('working_days', ['getLoading', 'getWorkingDays']),
        },
        methods: {
            ...mapActions('working_days', ['_get_working_days', '_post_working_days', '_put_working_days', '_delete_working_days']),
            create(payload) {
                this._post_working_days(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_working_days({...payload, id: this.payload.id}).then(() => {
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
                        return this._delete_working_days(payload).catch(() => {
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
