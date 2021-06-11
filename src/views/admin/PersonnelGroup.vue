<template>
    <div>
        <v-card>
            <v-toolbar dark elevation="0">
                <v-toolbar-title>
                    Personnel Group
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>
                <v-tab>Active</v-tab>
                <v-tab>Inactive</v-tab>

                <v-tab-item>
                    <empty class="text-center">
                        <a-modal @destroyOnClose="true" :footer="null"
                               v-model="visible"
                               title="Create New Personnel Group">
                            <PersonnelGroupForm button="Create"></PersonnelGroupForm>
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
    import PersonnelGroupForm from "../../components/forms/admin/PersonnelGroupForm";

    export default {
        name: 'PersonnelGroup',
        components: {
            PersonnelGroupForm,
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
