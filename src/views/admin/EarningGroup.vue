<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Earning Group
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>Details</v-tab>

                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Earning Group</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <EarningGroupForm :errors="errors" @on-submit="create"
                                                  button="Create"></EarningGroupForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <EarningGroupForm :earning="payload" :errors="errors" @on-submit="update"
                                                  button="Update"></EarningGroupForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Earning Group</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getEg" :handler="_get_earning_group" :headers="headers"
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
    import EarningGroupForm from "../../components/forms/admin/EarningGroupForm";

    export default {
        name: 'EarningGroup',
        components: {
            EarningGroupForm,
            DataTable
        },
        data() {
            return {
                errors: null,
                payload: null,
                visible: false,
                headers: [
                    {text: 'Name', value: 'name'},
                    {text: 'Personnel Group', value: 'personnel_group.name'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Notes', value: 'notes'},
                    {text: 'Per day', value: 'per_day'},
                    {text: 'Allowances', value: 'allowance'},
                    {text: 'Actions', value: 'actions', align: 'right'}

                ]
            }
        },
        computed: {
            ...mapGetters('earning_group', ['getLoading', 'getEg']),
        },
        methods: {
            ...mapActions('earning_group', ['_get_earning_group', '_post_earning_group', '_put_earning_group']),
            create(payload) {
                this._post_earning_group(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_earning_group({...payload, id: this.payload.id}).then(() => {
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
