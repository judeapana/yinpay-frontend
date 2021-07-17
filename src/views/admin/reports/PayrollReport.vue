<template>
    <div>
        <PayslipReportForm @on-submit="generate"></PayslipReportForm>
        <pre>{{getPayroll}}</pre>
    </div>
</template>
<script>
    import PayslipReportForm from "../../../components/forms/reports/PayslipReportForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "PayrollReport",
        components: {PayslipReportForm},
        methods: {
            ...mapActions('payroll', ['_get_payroll']),
            generate(payload) {
                this._get_payroll(payload).catch((e) => {
                    console.log(e)
                })
            }
        }, computed: {
            ...mapGetters('payroll', ['getPayroll'])
        }
    }
</script>
