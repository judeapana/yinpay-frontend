<template>
    <div>
        <v-dialog max-width="690"
                  v-if="visible"
                  v-model="visible">
            <v-card>
                <v-card-title>Next Of Kin</v-card-title>
                <v-card-subtitle>Please provide the following information to complete the form
                </v-card-subtitle>
                <v-card-text>
                    <NextOfKinForm @on-submit="create" button="Create"></NextOfKinForm>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-card elevation="2">
            <v-card-title>Attendance</v-card-title>
            <v-card-actions>
                <v-btn @click="showDrawer">Add Attendance</v-btn>
            </v-card-actions>
            <v-card-subtitle></v-card-subtitle>
            <DataTable :data="getNextOfKin" :handler="_get_next_of_kin" :headers="headers"
                       :loading="getLoading"></DataTable>
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
                headers: [
                    {text: 'User', align: 'start', value: 'user_meta.user.username',},
                ]
            }
        },
        computed: {
            ...mapGetters('next_of_kin', ['getLoading', 'getNextOfKin']),
        },
        methods: {
            ...mapActions('next_of_kin', ['_get_next_of_kin']),
            create(payload) {
                console.log(payload)
            },
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
