<template>
    <div>
        <v-row>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.bank" style="margin-right: 50px"
                                     title="Total Banks"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.bank_details" title="Total Bank Details"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.working_day" title="Total Working Days"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.daily_rate" title="Total Daily Rates"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.social_security_rate" title="Total Social Security Rates"/>
                    </v-card-text>

                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.deduction_group" title="Total Deduction Group"/>
                    </v-card-text>

                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.earning_group" title="Total Earning Groups"/>
                    </v-card-text>

                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.tax" title="Total Taxes"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.user_deduction" title="Total Worker Deductions"/>
                    </v-card-text>


                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.user_earning" title="Total Worker Earnings"/>
                    </v-card-text>


                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.avg_daily_rate" title="Average Daily Rate"/>
                    </v-card-text>


                </v-card>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: 'PayrollDashboard',
        data() {
            return {
                stats: null
            }
        },
        mounted() {
            this._get_payroll().then((data) => {
                this.stats = data
            })
        },
        methods: {
            ...mapActions('payroll_report', ['_get_payroll'])
        }

    }
</script>

<style scoped>

</style>
