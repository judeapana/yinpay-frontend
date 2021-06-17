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
                <v-tab>Active</v-tab>
                <v-tab>Inactive</v-tab>
                <v-tab>Primary</v-tab>
                <v-tab-item>
                    <!--                    <empty class="text-center">-->
                    <!--                        <AModal @destroyOnClose="true" :footer="null" title="Create Bank Information" v-model="visible">-->
                    <!--                            <BankForm button="Create"></BankForm>-->
                    <!--                        </AModal>-->
                    <!--                        <v-btn @click="showDrawer" color="primary">Create Now</v-btn>-->
                    <!--                    </empty>-->
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

    export default {
        name: 'Bank',
        components: {
            // BankForm, Empty
            DataTable
        },
        data() {
            return {
                visible: false,
                headers: []
            }
        },
        computed: {
            ...mapGetters('bank', ['getLoading', 'getBanks']),
        },
        methods: {
            ...mapActions('bank', ['_get_bank']),
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
