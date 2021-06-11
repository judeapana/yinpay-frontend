<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Your Businesses
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>
                <v-tab>Primary</v-tab>

                <v-tab-item>
                    <empty class="text-center">
                        <a-modal @destroyOnClose="true" :footer="null"
                                 title="Create New Personnel Group"
                                 v-model="visible">
                            <TaxForm button="Create"></TaxForm>
                        </a-modal>
                        <v-btn @click="showDrawer" color="primary">Create Now</v-btn>
                    </empty>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
    import {Empty} from "ant-design-vue";
    import TaxForm from "../../components/forms/admin/TaxForm";

    export default {
        name: 'Business',
        components: {
            TaxForm,
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
