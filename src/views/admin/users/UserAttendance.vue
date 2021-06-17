<template>
    <div>
        <empty class="text-center">
            <v-btn @click="showDrawer" color="primary">Create Now</v-btn>
        </empty>

        <!--        <AModal :destroyOnClose="true" :footer="null" title="Attendance" v-model="visible" width="900px">-->
        <!--            <UserAttendanceForm button="Create"></UserAttendanceForm>-->
        <!--        </AModal>-->
        <v-card elevation="2">
            <v-card-title>Attendance</v-card-title>
            <v-card-actions>
                <v-btn @click="showDrawer">Add Attendance</v-btn>
            </v-card-actions>
            <v-card-subtitle></v-card-subtitle>
            <DataTable :data="getUserAttendance" :handler="_get_user_attendance" :headers="headers"
                       :loading="getLoading"></DataTable>
        </v-card>

    </div>
</template>

<script>
    import {Empty} from 'ant-design-vue'
    import 'ant-design-vue/dist/antd.css';
    // import UserAttendanceForm from "../../../components/forms/admin/UserAttendanceForm";
    import {mapActions, mapGetters} from "vuex";
    import DataTable from "../../../components/dataTable/DataTable";

    export default {
        name: 'UserAttendance',
        components: {
            Empty, DataTable
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
            ...mapGetters('attendance', ['getLoading', 'getUserAttendance']),
        },
        methods: {
            ...mapActions('attendance', ['_get_user_attendance']),
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
