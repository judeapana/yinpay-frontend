<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>User Documents</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text>
                    <UserLeaveForm @on-submit="create" button="Create"></UserLeaveForm>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-row>
            <v-col cols="12" md="12">
                <v-col cols="12" md="12">
                    <v-card elevation="2">
                        <v-card-title>Leaves</v-card-title>
                        <v-card-actions>
                            <v-btn @click="showDrawer">Add Leave</v-btn>
                        </v-card-actions>
                        <v-card-subtitle></v-card-subtitle>
                        <DataTable :data="getLeaves" :handler="_get_leaves" :headers="headers"
                                   :loading="getLoading"></DataTable>
                    </v-card>
                </v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import 'ant-design-vue/dist/antd.css';
    import DataTable from "../../../components/dataTable/DataTable";
    import {mapActions, mapGetters} from "vuex";
    import UserLeaveForm from "../../../components/forms/admin/UserLeaveForm";

    export default {
        name: 'UserLeave',
        components: {
            UserLeaveForm,
            DataTable
            // UserLeaveForm,
            // Empty
        },
        data() {
            return {
                visible: false,
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                ]
            }
        },
        computed: {
            ...mapGetters('leave', ['getLoading', 'getLeaves']),
        },
        methods: {
            ...mapActions('leave', ['_get_leaves']),
            create(payload) {
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
