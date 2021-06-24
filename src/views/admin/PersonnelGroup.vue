<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Personnel Group
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>
                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Create User Grouping</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text>
                                <PersonnelGroupForm @on-submit="create" button="Create"></PersonnelGroupForm>
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
    import PersonnelGroupForm from "../../components/forms/admin/PersonnelGroupForm";

    export default {
        name: 'PersonnelGroup',
        components: {
            PersonnelGroupForm,
            DataTable
        },
        data() {
            return {
                visible: false,
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
            ...mapActions('personnel_group', ['_get_personnel_group', '_post_personnel_group']),
            create(payload) {
                this._post_personnel_group(payload).then(() => {
                    this.visible = false
                    this._get_personnel_group()
                })
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
