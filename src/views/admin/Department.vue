<template>
    <div>
        <v-card>
            <v-toolbar elevation="0">
                <v-toolbar-title>Departments</v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>
                <v-tab-item>
                    <!--                    <empty class="text-center">-->
                    <!--                        <AModal @destroyOnClose="true" v-model="visible" :footer="null" title="New Department">-->
                    <!--                            <DepartmentForm button="Create"></DepartmentForm>-->
                    <!--                        </AModal>-->
                    <!--                        <v-btn @click="showDrawer" color="primary">Create Now</v-btn>-->
                    <!--                    </empty>-->
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-col cols="12" md="12">
                                <v-card elevation="2">
                                    <v-card-title>Department</v-card-title>
                                    <v-card-actions>
                                        <v-btn @click="showDrawer">Add Department</v-btn>
                                    </v-card-actions>
                                    <v-card-subtitle></v-card-subtitle>
                                    <DataTable :data="getDepartments" :handler="_get_department" :headers="headers"
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
        name: 'Department',
        components: {
            // DepartmentForm,
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
            ...mapGetters('department', ['getLoading', 'getDepartments']),
        },
        methods: {
            ...mapActions('department', ['_get_department']),
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
