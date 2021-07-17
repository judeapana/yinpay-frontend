<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>User Documents</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text v-if="!payload">
                    <UserDocForm :errors="errors" @on-submit="create" button="Create"></UserDocForm>
                </v-card-text>
                <v-card-text v-else>
                    <UserDocForm :doc="payload" :errors="errors" @on-submit="update" button="Update"></UserDocForm>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-row>
            <v-col cols="12" md="12">
                <v-col cols="12" md="12">
                    <v-card elevation="2">
                        <v-card-title>Documents</v-card-title>
                        <v-card-actions>
                            <v-btn @click="showDrawer">Add Document</v-btn>
                        </v-card-actions>
                        <v-card-subtitle></v-card-subtitle>
                        <DataTable :data="getDocs" :handler="_get_docs" :headers="headers" :loading="getLoading"
                                   @on-delete="OnDelete" @on-edit="OnUpdate"
                                   has_file="doc"></DataTable>
                    </v-card>
                </v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import DataTable from "../../../components/dataTable/DataTable";
    import {mapActions, mapGetters} from "vuex";
    import UserDocForm from "../../../components/forms/admin/UserDocForm";

    export default {
        name: 'UserDocs',
        components: {
            UserDocForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                payload: null,
                errors: null,
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                    {text: 'Date', value: 'date',},
                    {text: 'Notes', value: 'notes',},
                    {text: 'Action', value: 'actions',},
                ]
            }
        },
        computed: {
            ...mapGetters('docs', ['getLoading', 'getDocs']),
        },
        methods: {
            ...mapActions('docs', ['_get_docs', '_post_docs', '_put_docs', '_delete_docs']),
            ...mapActions('upload', ['_post_upload_file', '_put_upload_file']),
            create(payload) {
                let formData = new FormData();
                formData.append('file', payload.doc);
                delete payload.doc
                this._post_docs(payload).then((data) => {
                    let _payload = {
                        loc: 'doc',
                        id: data.id,
                        file: formData
                    }
                    this._post_upload_file(_payload).then(() => {
                        this.visible = false
                    })
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                let formData = new FormData();
                formData.append('file', payload.doc);
                delete payload.doc
                this._put_docs({...payload, id: this.payload.id}).then((data) => {
                    if (formData.get('file')) {
                        let _payload = {
                            loc: 'doc',
                            id: data.id,
                            file: formData
                        }
                        this._put_upload_file(_payload).then(() => {
                            this.visible = false
                            this._get_docs()
                        })
                    } else {
                        this.visible = false
                    }
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
                    title: 'Do you want to delete these items? ',
                    content: 'When you click the OK button this item will be deleted without recovery',
                    onOk: () => {
                        return this._delete_docs(payload).catch(() => {
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
