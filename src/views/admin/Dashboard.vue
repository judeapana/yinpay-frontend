<template>
    <div>
        <v-row>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.users" style="margin-right: 50px" title="Total Active Users"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.workers" title="Total Workers"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.business" title="Total Businesses"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.business" title="Total Businesses"/>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-card-text>
                        <a-statistic :value="stats.business_accounts" title="Total Business Accounts"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: 'Dashboard',
        data() {
            return {
                stats: null
            }
        },
        mounted() {
            this._get_dashboard().then((data) => {
                this.stats = data
            })
        },
        methods: {
            ...mapActions('dashboard_report', ['_get_dashboard'])
        }

    }
</script>

<style scoped>

</style>
