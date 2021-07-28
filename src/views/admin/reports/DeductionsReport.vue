<template>
    <div>
        <DeductionReportForm @on-submit="generate"></DeductionReportForm>
        <template v-for="(_deductions,index) in deductions">
            <DeductionsReportLayout :data="_deductions" :key="index"></DeductionsReportLayout>
        </template>
    </div>

</template>

<script>
    import DeductionReportForm from "../../../components/forms/reports/DeductionReportForm";
    import {mapActions, mapGetters} from "vuex";
    import DeductionsReportLayout from "./DeductionsReportLayout";

    export default {
        name: 'DeductionsReport',
        components: {DeductionsReportLayout, DeductionReportForm},
        computed: {
            ...mapGetters('deduction_report', ['getDeduction'])
        },
        data() {
            return {
                deductions: null
            }
        },
        methods: {
            ...mapActions('deduction_report', ['_get_deduction']),
            generate(payload) {
                this._get_deduction(payload).then((data) => {
                    this.deductions = data
                }).catch(() => {
                    this.$message.error('Sorry something went wrong')
                })
            }
        }
    }
</script>
