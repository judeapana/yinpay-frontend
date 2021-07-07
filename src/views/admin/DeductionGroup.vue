<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Deduction Group
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>
                <v-tab>Primary</v-tab>

                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Deduction Group</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <DeductionGroupForm :errors="errors" @on-submit="create"
                                                    button="Create"></DeductionGroupForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <DeductionGroupForm :deduction="payload" :errors="errors" @on-submit="update"
                                                    button="Update"></DeductionGroupForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Deduction Group</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getDg" :handler="_get_deduction_group" :headers="headers"
                                               :loading="getLoading"
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
    import DeductionGroupForm from "../../components/forms/admin/DeductionGroupForm";

    export default {
        name: 'DeductionGroup',
        components: {
            DeductionGroupForm,

            DataTable
        },
        data() {
            return {
                visible: false,
                payload: null,
                headers: [
                    {text: 'Name', value: 'name'},
                    {text: 'Personnel Group', value: 'personnel_group.name'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Notes', value: 'notes'},
                    {text: 'Per Day', value: 'per_day'},
                    {text: 'Actions', value: 'actions', align: 'right'},
                ],
                errors: null
            }
        },
        computed: {
            ...mapGetters('deduction_group', ['getLoading', 'getDg']),
        },
        methods: {
            ...mapActions('deduction_group', ['_get_deduction_group', '_post_deduction_group', '_put_deduction_group']),
            create(payload) {
                this._post_deduction_group(payload).then(() => {
                    this.visible = false
                }).catch((errors) => {
                    this.errors = errors
                })
            },
            update(payload) {
                this._put_deduction_group({...payload, id: this.payload.id}).then(() => {
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
