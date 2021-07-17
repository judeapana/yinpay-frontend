<template>
    <v-card>
        <v-toolbar elevation="0">
            <v-toolbar-title>Your Memos</v-toolbar-title>
        </v-toolbar>
        <v-tabs>
            <v-tab>All</v-tab>

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
                                           :loading="getLoading"
                                           @on-delete="OnDelete"
                                           @on-edit="OnUpdate"></DataTable>
                            </v-card>
                        </v-col>
                    </v-col>
                </v-row>
                <v-dialog max-width="690"
                          v-if="visible"
                          v-model="visible">
                    <v-card>
                        <v-card-title>Memo</v-card-title>
                        <v-card-subtitle>Please provide the following information to complete the form
                        </v-card-subtitle>
                        <v-card-text v-if="!payload">
                            <MemoForm :errors="errors" @on-submit="create" button="Create"></MemoForm>
                        </v-card-text>
                        <v-card-text v-else>
                            <MemoForm :errors="errors" :memo="payload" @on-submit="update" button="Update"></MemoForm>
                        </v-card-text>
                    </v-card>
                </v-dialog>

            </v-tab-item>
        </v-tabs>

    </v-card>
</template>

<script>
    import DataTable from "../../components/dataTable/DataTable";
    import {mapActions, mapGetters} from "vuex";
    import MemoForm from "../../components/forms/admin/MemoForm";

    export default {
        name: 'Memo',
        components: {
            MemoForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                errors: null,
                payload: null,
                headers: [
                    {text: 'Title', value: 'title'},
                    {text: 'Date', value: 'date'},
                    {text: 'created', value: 'created'},
                    {text: 'Action', value: 'actions'},
                ]
            }
        },
        computed: {
            ...mapGetters('memo', ['getLoading', 'getMemos']),
        },
        methods: {
            ...mapActions('memo', ['_get_memo', '_post_memo', '_put_memo', '_delete_memo']),
            create(payload) {
                this._post_memo(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_memo({...payload, id: this.payload.id}).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            OnUpdate(payload) {
                this.payload = payload
                this.visible = true
            },
            OnDelete(payload) {
                this.$confirm({
                    title: 'Do you want to delete these items?',
                    content: 'When you click the OK button this item will be deleted without recovery',
                    onOk: () => {
                        return this._delete_memo(payload).catch(() => {
                            this.$error({ title:"Error Occurred", content:"Sorry but an error occurred, we are working to fix this issue.Thank You" })
                        })
                    },
                    onCancel: () => {
                    },
                });
            },
            afterVisibleChange(val) {
                console.log('visible', val);
            },
            showDrawer() {
                this.payload = null
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
