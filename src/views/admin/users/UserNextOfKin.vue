<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>Next Of Kin</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text v-if="!payload">
                    <NextOfKinForm :errors="errors" @on-submit="create" button="Create"></NextOfKinForm>
                </v-card-text>
                <v-card-text v-else>
                    <NextOfKinForm :errors="errors" :next_of_kin="payload" @on-submit="update"
                                   button="Update"></NextOfKinForm>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-card elevation="2">
            <v-card-title>Next Of Kin</v-card-title>
            <v-card-actions>
                <v-btn @click="showDrawer">Add Next Of Kin Info</v-btn>
            </v-card-actions>
            <v-card-subtitle></v-card-subtitle>
            <DataTable :data="getNextOfKin" :handler="_get_next_of_kin" :headers="headers" :loading="getLoading"
                       @on-edit="OnUpdate"></DataTable>
        </v-card>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import DataTable from "../../../components/dataTable/DataTable";
    import NextOfKinForm from "../../../components/forms/admin/NextOfKinForm";

    export default {
        name: 'UserDocs',
        components: {
            NextOfKinForm,
            DataTable
        },
        data() {
            return {
                visible: false,
                payload: null,
                errors: null,
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                    {text: 'First Name', value: 'first_name'},
                    {text: 'Last Name', value: 'last_name'},
                    {text: 'Middle Name', value: 'middle_name'},
                    {text: 'Dob', value: 'dob'},
                    {text: 'Action', value: 'actions'},
                ]
            }
        },
        computed: {
            ...mapGetters('next_of_kin', ['getLoading', 'getNextOfKin']),
        },
        methods: {
            ...mapActions('next_of_kin', ['_get_next_of_kin', '_post_next_of_kin', '_put_next_of_kin']),
            create(payload) {
                this._post_next_of_kin(payload).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            update(payload) {
                this._put_next_of_kin({...payload, id: this.payload.id}).then(() => {
                    this.visible = false
                }).catch((e) => {
                    this.errors = e
                })
            },
            OnUpdate(payload) {
                this.payload = payload
                this.visible = true
            },
            OnDelete(pk) {
                console.log(pk)
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
