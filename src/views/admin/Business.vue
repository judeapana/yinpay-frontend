<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Your Businesses
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
                            <v-card-title>Business</v-card-title>
                            <v-card-subtitle>Please provide the following information to complete the form
                            </v-card-subtitle>
                            <v-card-text>
                                <BusinessForm @on-submit="create" button="Create"></BusinessForm>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Business</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getBs" :handler="_getBusiness" :headers="headers"
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
    import BusinessForm from "../../components/forms/admin/BusinessForm";

    export default {
        name: 'Business',
        components: {
            BusinessForm,
            // BusinessForm,
            // Empty
            DataTable
        },
        data() {
            return {
                visible: false,
                headers: []
            }
        },
        computed: {
            ...mapGetters('business', ['getLoading', 'getBs']),
        },
        methods: {
            ...mapActions('business', ['_getBusiness']),
            create(payload){
              console.log(payload)
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
