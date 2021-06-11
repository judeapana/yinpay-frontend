<template>
    <div>
        <empty class="text-center">
            <AModal :footer="null" title="User Upload Documents" v-model="visible">
                <UserDocForm button="Upload"></UserDocForm>
            </AModal>
            <v-btn @click="showDrawer" color="primary">Create Now</v-btn>
        </empty>
    </div>
</template>

<script>
    import {Empty} from 'ant-design-vue'
    import UserDocForm from "../../../components/forms/admin/UserDocForm";

    export default {
        name: 'UserDocs',
        components: {
            UserDocForm,
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
