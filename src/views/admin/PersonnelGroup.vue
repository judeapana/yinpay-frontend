<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Personnel Group
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>Details</v-tab>
                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>User Grouping</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <PersonnelGroupForm :errors="errors" @on-submit="create"
                                                    button="Create"></PersonnelGroupForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <PersonnelGroupForm :errors="errors" :personnel_group="payload" @on-submit="update"
                                                    button="Update"></PersonnelGroupForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>

                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card :loading="getLoading" elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Grouping</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getPg" :handler="_get_personnel_group" :headers="headers"
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
    import PersonnelGroupForm from "../../components/forms/admin/PersonnelGroupForm";

    export default {
        name: 'PersonnelGroup',
        components: {
            PersonnelGroupForm,
            DataTable
        },
        data() {
            return {
                payload: null,
                visible: false,
                errors: null,
                headers: [
                    {text: 'Name', align: 'start', value: 'name',},
                    {text: 'Category', align: 'start', value: 'category',},
                    {text: 'Description', align: 'start', value: 'description',},
                    {text: 'Disabled', align: 'start', value: 'disabled',},
                    {text: 'Actions', value: 'actions'},
                ]
            }
        },
        computed: {
            ...mapGetters('personnel_group', ['getLoading', 'getPg']),
        },
        methods: {
            ...mapActions('personnel_group', ['_get_personnel_group', '_post_personnel_group', '_put_personnel_group', '_delete_personnel_group']),
            create(payload) {
                this._post_personnel_group(payload).then(() => {
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
                        return this._delete_personnel_group(payload).catch(() => {
                            this.$error({ title:"Error Occurred", content:"Sorry but an error occurred, we are working to fix this issue.Thank You" })
                        })
                    },
                    onCancel: () => {
                    },
                });
            },
            update(payload) {
                this._put_personnel_group({...payload, id: this.payload.id}).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
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
