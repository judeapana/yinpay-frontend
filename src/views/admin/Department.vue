<template>
    <div>
        <v-card>
            <v-toolbar elevation="0">
                <v-toolbar-title>Departments</v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>
                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Departments</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <DepartmentForm :errors="errors" @on-submit="create" button="Create"></DepartmentForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <DepartmentForm :department="payload" :errors="errors" @on-submit="update"
                                                button="Update"></DepartmentForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-title>Department</v-card-title>
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Department</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getDepartments" :handler="_get_department" :headers="headers"
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
    import DepartmentForm from "../../components/forms/admin/DepartmentForm";

    export default {
        name: 'Department',
        components: {
            DepartmentForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                errors: null,
                payload: null,
                headers: [
                    {text: 'Name Of Department', value: 'name'},
                    {text: 'Code', value: 'abbr'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Notes', value: 'notes'},
                    {text: 'Actions', value: 'actions', align: 'right'}
                ]
            }
        },
        computed: {
            ...mapGetters('department', ['getLoading', 'getDepartments']),
        },
        methods: {
            ...mapActions('department', ['_get_department', '_post_department', '_put_department', '_delete_department']),
            OnUpdate(payload) {
                this.payload = payload
                this.visible = true
            },
            create(payload) {
                this._post_department(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_department({...payload, id: this.payload.id}).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            OnDelete(payload) {
                this.$confirm({
                    title: 'Do you want to delete these items?',
                    content: 'When you click the OK button this item will be deleted without recovery',
                    onOk: () => {
                        return this._delete_department(payload).catch(() => {
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
