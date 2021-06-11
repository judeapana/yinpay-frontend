<template>
    <div>
        <empty class="text-center">
            <AModal title="Next Of Kin" :footer="null" v-model="visible">
                <NextOfKinForm button="Add"></NextOfKinForm>
            </AModal>
            <v-btn @click="showDrawer" color="primary">Create Now</v-btn>
        </empty>


    </div>
</template>

<script>
    import {Empty} from 'ant-design-vue'
    import NextOfKinForm from "../../../components/forms/admin/NextOfKinForm";

    export default {
        name: 'UserDocs',
        components: {
            NextOfKinForm,
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
