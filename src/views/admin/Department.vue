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
                            <v-card-text>
                                <DepartmentForm @on-submit="create" button="Create"></DepartmentForm>
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
    import DepartmentForm from "../../components/forms/admin/DepartmentForm";

    export default {
        name: 'Department',
        components: {
            DepartmentForm,
            // Empty
            DataTable
        },
        data() {
            return {
                visible: false,
                headers: [
                    {text: 'Name Of Department', value: 'name'},
                    {text: 'Code', value: 'code'},
                    {text: 'Description', value: 'description'},
                ]
            }
        },
        computed: {
            ...mapGetters('department', ['getLoading', 'getDepartments']),
        },
        methods: {
            ...mapActions('department', ['_get_department', '_post_department']),
            OnUpdate(pk) {
                console.log(pk)
            },
            create(payload) {
                this._post_department(payload).then(() => {
                    this.visible = false
                    this._get_department()
                })
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
