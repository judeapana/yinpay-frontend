<template>
    <div>
        <EarningsReportForm @on-submit="generate"></EarningsReportForm>
        <pre>{{getEarning}}</pre>
    </div>
</template>

<script>
    import EarningsReportForm from "../../../components/forms/reports/EarningsReportForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'EarningsReport',
        components: {EarningsReportForm},
        computed: {
            ...mapGetters('earning_report', ['getEarning'])
        },
        methods: {
            ...mapActions('earning_report', ['_get_earning']),
            generate(payload) {
                this._get_earning(payload).then(() => {

                }).catch(() => {
                    this.$message.error('Sorry, Something went wrong')
                })
            }
        }
    }
</script>
