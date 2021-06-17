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
                    <!--                    <empty class="text-center">-->
                    <!--                        <a-modal @destroyOnClose="true" :footer="null"-->
                    <!--                                 title="Create New Personnel Group"-->
                    <!--                                 v-model="visible">-->
                    <!--                            <DeductionGroupForm button="Create"></DeductionGroupForm>-->
                    <!--                        </a-modal>-->
                    <!--                        <v-btn @click="showDrawer" color="primary">Create Now</v-btn>-->
                    <!--                    </empty>-->
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Deduction Group</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getDg" :handler="_get_deduction_group" :headers="headers"
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
        name: 'DeductionGroup',
        components: {
            // DeductionGroupForm,
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
            ...mapGetters('deduction_group', ['getLoading', 'getDg']),
        },
        methods: {
            ...mapActions('deduction_group', ['_get_deduction_group']),
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
