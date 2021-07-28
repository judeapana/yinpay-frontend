<template>
    <div>
        <PayrollReportForm @on-submit="generate"></PayrollReportForm>
        <PayslipLayout v-if="data" :data="data"></PayslipLayout>
    </div>
</template>
<script>
    import PayrollReportForm from "../../../components/forms/reports/PayrollReportForm";
    import {mapActions, mapGetters} from "vuex";
    import PayslipLayout from "./PayslipLayout";

    export default {
        name: "PayslipReport",
        components: {PayslipLayout, PayrollReportForm},
        data() {
            return {
                data: null
            }
        },
        methods: {
            ...mapActions('payslip', ['_get_payslip']),
            generate(payload) {
                this._get_payslip(payload).then((data) => {
                    this.data = data
                }).catch(() => {
                    this.$message.error("An error occurred")
                })
            }
        }, computed: {
            ...mapGetters('payslip', ['getPayslip'])
        }
    }
</script>
