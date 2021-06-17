<template>
    <v-card>
        <v-toolbar elevation="0">
            <v-toolbar-title>Your Memos</v-toolbar-title>
        </v-toolbar>
        <v-tabs>
            <v-tab>All</v-tab>
            <v-tab>Delivered</v-tab>
            <v-tab>UnDelivered</v-tab>

            <v-tab-item>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-col cols="12" md="12">
                            <v-card elevation="2">
                                <v-card-title>Memo</v-card-title>
                                <v-card-actions>
                                    <v-btn @click="showDrawer">Add Memo</v-btn>
                                </v-card-actions>
                                <v-card-subtitle></v-card-subtitle>
                                <DataTable :data="getMemos" :handler="_get_memo" :headers="headers"
                                           :loading="getLoading"></DataTable>
                            </v-card>
                        </v-col>
                    </v-col>
                </v-row>
                <!--                <empty class="text-center">-->
                <!--                    <AModal @destroyOnClose="true" :footer="null" title="New Memo" v-model="visible">-->
                <!--                        <MemoForm button="Create"></MemoForm>-->
                <!--                    </AModal>-->
                <!--                    <v-btn @click="showDrawer" color="primary">Create Now</v-btn>-->
                <!--                </empty>-->
            </v-tab-item>
            <v-tab-item></v-tab-item>
            <v-tab-item></v-tab-item>
        </v-tabs>

    </v-card>
</template>

<script>
    import DataTable from "../../components/dataTable/DataTable";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'Memo',
        components: {
            // MemoForm,
            DataTable
            // Empty
        },
        data() {
            return {
                visible: false,
                headers: []
            }
        },
        computed: {
            ...mapGetters('memo', ['getLoading', 'getMemos']),
        },
        methods: {
            ...mapActions('memo', ['_get_memo']),
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
