<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Your Businesses
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>Details</v-tab>

                <v-tab-item>
                    <v-dialog max-width="690"
                              v-if="visible"
                              v-model="visible">
                        <v-card>
                            <v-card-title>Business</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text>
                                <BusinessForm :business="payload" :errors="errors" @on-submit="update"
                                              button="Update"></BusinessForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getBs" :handler="_getBusiness" :headers="headers"
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
    import BusinessForm from "../../components/forms/admin/BusinessForm";

    export default {
        name: 'Business',
        components: {
            BusinessForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                payload: null,

                headers: [
                    {text: 'Name', value: 'name'},
                    {text: 'Address', value: 'address'},
                    {text: 'Support Email', value: 'support_email'},
                    {text: 'Phone Number', value: 'phone_number'},
                    {text: 'Type', value: 'btype'},
                    {text: 'Actions', value: 'actions', align: 'right'},

                ],
                errors: null
            }
        },
        computed: {
            ...mapGetters('business', ['getLoading', 'getBs']),
        },
        methods: {
            ...mapActions('business', ['_getBusiness', '_putBusiness', 'setBusiness', '_deleteBusiness', 'setBusiness']),
            ...mapActions('upload', ['_put_upload_img']),

            update(payload) {
                let formData = new FormData();
                formData.append('img', payload.logo);
                delete payload.logo

                this._putBusiness({...payload, id: this.payload.id}).then((data) => {
                    if (formData.get('img')) {
                        let _payload = {
                            loc: 'logo',
                            id: data.id,
                            img: formData
                        }
                        this._put_upload_img(_payload).then((data) => {
                            this.setBusiness(data)
                            this._getBusiness()
                            this.visible = false
                        })
                    } else {
                        this.visible = false
                    }

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
                    title: 'Do you want to delete these items? ',
                    content: 'When you click the OK button this item will be deleted without recovery',
                    onOk: () => {
                        return this._deleteBusiness(payload).catch(() => {
                            this.$error({
                                title: 'Error Occurred',
                                content: "Sorry but an error while performing this action, our team will resolve it soon"
                            })
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
