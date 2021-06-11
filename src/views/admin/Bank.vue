<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Banks
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>
                <v-tab>Active</v-tab>
                <v-tab>Inactive</v-tab>
                <v-tab>Primary</v-tab>
                <v-tab-item>
                    <empty class="text-center">
                        <AModal @destroyOnClose="true" :footer="null" title="Create Bank Information" v-model="visible">
                            <BankForm button="Create"></BankForm>
                        </AModal>
                        <v-btn @click="showDrawer" color="primary">Create Now</v-btn>
                    </empty>
                </v-tab-item>

            </v-tabs>
        </v-card>
    </div>
</template>

<script>
    import {Empty} from "ant-design-vue";
    import BankForm from "../../components/forms/admin/BankForm";

    export default {
        name: 'Bank',
        components: {
            BankForm, Empty
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
