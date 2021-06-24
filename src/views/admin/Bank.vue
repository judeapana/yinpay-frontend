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
                            <v-card-text>
                                <BankForm @on-submit="create" button="Create"></BankForm>
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
                                    <DataTable :data="getBanks" :handler="_get_bank" :headers="headers"
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
    import BankForm from "../../components/forms/admin/BankForm";

    export default {
        name: 'Bank',
        components: {
            BankForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                headers: [
                    {text: 'Name Of Bank', value: 'name'},
                    {text: 'Notes', value: 'notes'},
                    {text: 'Disabled', value: 'disabled'},
                ]
            }
        },
        computed: {
            ...mapGetters('bank', ['getLoading', 'getBanks']),
        },
        methods: {
            ...mapActions('bank', ['_get_bank', '_post_bank']),
            create(payload) {
                this._post_bank(payload).then(() => {
                    this.visible = false
                    this._get_bank()
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
