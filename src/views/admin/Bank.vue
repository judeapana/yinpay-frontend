<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Banks
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>
                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Banks</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <BankForm :errors="errors" @on-submit="create" button="Create"></BankForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <BankForm :bank="payload" :errors="errors" @on-submit="update"
                                          button="Update"></BankForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-title>Banks</v-card-title>
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Banks</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable @on-delete="OnDelete" :data="getBanks" :handler="_get_bank" :headers="headers"
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
    import BankForm from "../../components/forms/admin/BankForm";

    export default {
        name: 'Bank',
        components: {
            BankForm,
            DataTable
        },
        data() {
            return {
                errors: null,
                visible: false,
                headers: [
                    {text: 'Name Of Bank', value: 'name'},
                    {text: 'Notes', value: 'notes'},
                    {text: 'Disabled', value: 'disabled'},
                    {text: 'Actions', value: 'actions', align: 'right'}
                ]
            }
        },
        computed: {
            ...mapGetters('bank', ['getLoading', 'getBanks']),
        },
        methods: {
            ...mapActions('bank', ['_get_bank', '_post_bank', '_put_bank','_delete_bank']),
            create(payload) {
                this._post_bank(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_bank({...payload, id: this.payload.id}).then(() => {
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
                        return this._delete_bank(payload).catch(() => {
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
