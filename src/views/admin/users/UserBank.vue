<template>
    <div>
        <empty class="text-center">
            <AModal :footer="null" title="Add User Bank Account" v-model="visible">
                <UserBankForm button="Add Account"></UserBankForm>
            </AModal>
            <v-btn @click="showDrawer" color="primary">Create Now</v-btn>
        </empty>

    </div>
</template>

<script>
    import {Empty} from 'ant-design-vue'
    import UserBankForm from "../../../components/forms/admin/UserBankForm";

    export default {
        name: 'UserBank',
        components: {
            UserBankForm,
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
