<template>
    <div>
        <empty class="text-center">
            <v-btn @click="showDrawer" color="primary">Create Now</v-btn>
        </empty>

        <AModal :destroyOnClose="true" :footer="null" title="Attendance" v-model="visible" width="900px">
            <UserAttendanceForm button="Create"></UserAttendanceForm>
        </AModal>
    </div>
</template>

<script>
    import {Empty} from 'ant-design-vue'
    import 'ant-design-vue/dist/antd.css';
    import UserAttendanceForm from "../../../components/forms/admin/UserAttendanceForm";

    export default {
        name: 'UserAttendance',
        components: {
            UserAttendanceForm,
            Empty
        },
        data() {
            return {
                visible: false,
            }
        },
        methods: {
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
