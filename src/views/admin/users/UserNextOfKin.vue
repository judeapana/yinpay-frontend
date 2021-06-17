<template>
    <div>
        <!--        <empty class="text-center">-->
        <!--            <AModal title="Next Of Kin" :footer="null" v-model="visible">-->
        <!--                <NextOfKinForm button="Add"></NextOfKinForm>-->
        <!--            </AModal>-->
        <!--            <v-btn @click="showDrawer" color="primary">Create Now</v-btn>-->
        <!--        </empty>-->
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

    export default {
        name: 'UserDocs',
        components: {
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
