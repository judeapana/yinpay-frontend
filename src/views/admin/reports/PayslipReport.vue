<template>
    <div>
        <PayrollReportForm @on-submit="generate"></PayrollReportForm>
        <pre>{{getPayslip}}</pre>
    </div>
</template>
<script>
    import PayrollReportForm from "../../../components/forms/reports/PayrollReportForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "PayslipReport",
        components: {PayrollReportForm},
        methods: {
            ...mapActions('payslip', ['_get_payslip']),
            generate(payload) {
                this._get_payslip(payload).catch((e) => {
                    console.log(e)
                })
            }
        }, computed: {
            ...mapGetters('payslip', ['getPayslip'])
        }
    }
</script>
