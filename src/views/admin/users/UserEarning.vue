<template>
    <div>
        <empty class="text-center">
            <v-btn @click="showDrawer" color="primary">Create Now</v-btn>
        </empty>

        <AModal :destroyOnClose="true" :footer="null" title="Earnings" v-model="visible" width="900px">
            <UserEarningForm button="Create"></UserEarningForm>
        </AModal>
    </div>
</template>

<script>
    import {Empty} from 'ant-design-vue'
    import 'ant-design-vue/dist/antd.css';
    import UserEarningForm from "../../../components/forms/admin/UserEarningForm";

    export default {
        name: 'UserEarning',
        components: {
            UserEarningForm,
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
