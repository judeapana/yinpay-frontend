<template>
    <div>
        <PayslipReportForm @on-submit="generate"></PayslipReportForm>
        <template v-for="(_data,index) in data">
            <PayslipLayout :data="_data" :key="index"></PayslipLayout>
        </template>
    </div>
</template>
<script>
    import PayslipReportForm from "../../../components/forms/reports/PayslipReportForm";
    import {mapActions, mapGetters} from "vuex";
    import PayslipLayout from "./PayslipLayout";

    export default {
        name: "PayrollReport",
        components: {PayslipLayout, PayslipReportForm},
        data() {
            return {
                data: null
            }
        },
        methods: {
            ...mapActions('payroll', ['_get_payroll']),
            generate(payload) {
                this._get_payroll(payload).then(data => this.data = data).catch((e) => {
                    console.log(e)
                })
            }
        }, computed: {
            ...mapGetters('payroll', ['getPayroll'])
        }
    }
</script>
