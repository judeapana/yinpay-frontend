<template>
    <div>
        <empty class="text-center">
            <v-btn color="primary" @click="showDrawer">Create Now</v-btn>
        </empty>

        <FormDrawer title="Create A New User" :visible="visible" v-on:onClose="onClose">
            <UserForm button="Add"></UserForm>
        </FormDrawer>
    </div>
</template>

<script>
    import {Empty} from 'ant-design-vue'
    import 'ant-design-vue/dist/antd.css';
    import FormDrawer from "../../../components/drawer/FormDrawer";
    import UserForm from "../../../components/forms/admin/UserForm";

    export default {
        name: 'AllUsers',
        components: {
            UserForm,
            FormDrawer,
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
