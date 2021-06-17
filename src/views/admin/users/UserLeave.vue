<template>
    <div>
        <!--        <empty class="text-center">-->
        <!--            <v-btn @click="showDrawer" color="primary">Create Now</v-btn>-->
        <!--        </empty>-->
        <!---->
        <!--        <AModal :destroyOnClose="true" :footer="null" title="Leaves" v-model="visible" width="900px">-->
        <!--            <UserLeaveForm button="Create"></UserLeaveForm>-->
        <!--        </AModal>-->
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

    export default {
        name: 'UserLeave',
        components: {
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
