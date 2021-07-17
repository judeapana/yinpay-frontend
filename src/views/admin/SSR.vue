<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Your Social Security Rates
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>Details</v-tab>

                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>SSR</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text v-if="!payload">
                                <SocialSecurityRateForm :errors="errors" @on-submit="create"
                                                        button="Create"></SocialSecurityRateForm>
                            </v-card-text>
                            <v-card-text v-else>
                                <SocialSecurityRateForm :errors="errors" :ssr="payload" @on-submit="update"
                                                        button="Update"></SocialSecurityRateForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add SSR</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getSsr" :handler="_get_ssr" :headers="headers"
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
    import SocialSecurityRateForm from "../../components/forms/admin/SocialSecurityRateForm";

    export default {
        name: 'SSR',
        components: {
            SocialSecurityRateForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                payload: null,
                headers: [
                    {text: 'Period', value: 'period.name'},
                    {text: 'Employee Rate(%)', value: 'emp_rate'},
                    {text: 'Employer Rate(%)', value: 'emper_rate'},
                    {text: 'Tier 1(%)', value: 'tier1'},
                    {text: 'Tier 2(%)', value: 'tier2'},
                    {text: 'Actions', value: 'actions', align: 'right'}

                ],
                errors: null,
            }
        },
        computed: {
            ...mapGetters('ssr', ['getLoading', 'getSsr']),
        },
        methods: {
            ...mapActions('ssr', ['_get_ssr', '_post_ssr', '_put_ssr', '_delete_ssr']),
            create(payload) {
                this._post_ssr(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_ssr({...payload, id: this.payload.id}).then(() => {
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
                        return this._delete_ssr(payload).catch(() => {
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
