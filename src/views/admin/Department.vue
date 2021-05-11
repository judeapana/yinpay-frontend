<template>
    <div>
        <v-card>
            <v-toolbar elevation="0">
                <v-toolbar-title>Departments</v-toolbar-title>
            </v-toolbar>
            <v-tabs>
                <v-tab>All</v-tab>
                <v-tab-item>
                    <empty class="text-center">
                        <v-btn color="primary" @click="showDrawer">Create Now</v-btn>
                    </empty>
                </v-tab-item>
            </v-tabs>

        </v-card>

    </div>
</template>

<script>
    import {Empty} from "ant-design-vue";

    export default {
        name: 'Department',
        components: {
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
