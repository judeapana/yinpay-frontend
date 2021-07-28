<template>
    <div>
        <v-row>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.personnel_group" style="margin-right: 50px"
                                     title="Total Personnel Groups"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.next_of_kin" title="Total Next Of Kins"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.memo" title="Total Memos"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.user_leave" title="Total Leaves"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.user_doc" title="Total Documents"/>
                    </v-card-text>

                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.department" title="Total Departments"/>
                    </v-card-text>

                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.attendance" title="Total Attendances"/>
                    </v-card-text>

                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.user_attendance" title="Total Worker Attendance"/>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: 'HrmDashboard',
        data() {
            return {
                stats: null
            }
        },
        mounted() {
            this._get_hrm().then((data) => {
                this.stats = data
            })
        },
        methods: {
            ...mapActions('hrm_report', ['_get_hrm'])
        }

    }
</script>

<style scoped>

</style>
