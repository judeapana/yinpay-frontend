<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Taxes
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>Details</v-tab>

                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Tax</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <TaxForm :errors="errors" @on-submit="create" button="Create"></TaxForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <TaxForm :errors="errors" :tax="payload" @on-submit="update" button="Update"></TaxForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Taxation</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getTax" :handler="_get_tax" :headers="headers"
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
    import TaxForm from "../../components/forms/admin/TaxForm";

    export default {
        name: 'Business',
        components: {
            TaxForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                payload: null,
                headers: [
                    {text: 'Period', value: 'period.name'},
                    {text: 'Personnel Group', value: 'personnel_group.name'},
                    {text: 'Name', value: 'name'},
                    {text: 'Rate', value: 'rate'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Automate', value: 'automate'},
                    {text: 'Notes', value: 'notes'},
                    {text: 'Actions', value: 'actions', align: 'right'},
                ],
                errors: null
            }
        },
        computed: {
            ...mapGetters('tax', ['getLoading', 'getTax']),
        },
        methods: {
            ...mapActions('tax', ['_get_tax', '_post_tax', '_put_tax', '_delete_tax']),
            create(payload) {
                this._post_tax(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_tax({...payload, id: this.payload.id}).then(() => {
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
                        return this._delete_tax(payload).catch(() => {
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
