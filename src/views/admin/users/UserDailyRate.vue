<template>
    <div>
        <!--        <empty class="text-center">-->
        <!--            <v-btn @click="showDrawer" color="primary">Create Now</v-btn>-->
        <!--        </empty>-->
        <!---->
        <!--        <AModal :destroyOnClose="true" :footer="null" title="Daily Rates" v-model="visible" width="900px">-->
        <!--            <DailyRateForm button="Create"></DailyRateForm>-->
        <!--        </AModal>-->
        <v-row>
            <v-col cols="12" md="12">
                <v-col cols="12" md="12">
                    <v-card elevation="2">
                        <v-card-title>Deductions</v-card-title>
                        <v-card-actions>
                            <v-btn @click="showDrawer">Add Deductions</v-btn>
                        </v-card-actions>
                        <v-card-subtitle></v-card-subtitle>
                        <DataTable :data="getDailyRate" :handler="_get_daily_rate" :headers="headers"
                                   :loading="getLoading"></DataTable>
                    </v-card>
                </v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import 'ant-design-vue/dist/antd.css';
    import {mapActions, mapGetters} from "vuex";
    import DataTable from "../../../components/dataTable/DataTable";

    export default {
        name: 'UserDailyRate',
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
            ...mapGetters('daily_rate', ['getLoading', 'getDailyRate']),
        },
        methods: {
            ...mapActions('daily_rate', ['_get_daily_rate']),

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
