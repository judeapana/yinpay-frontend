<template>
    <div>
        <DeductionReportForm @on-submit="generate"></DeductionReportForm>
        <pre>{{getDeduction}}</pre>
    </div>

</template>

<script>
    import DeductionReportForm from "../../../components/forms/reports/DeductionReportForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'DeductionsReport',
        components: {DeductionReportForm},
        computed: {
            ...mapGetters('deduction_report', ['getDeduction'])
        },
        methods: {
            ...mapActions('deduction_report', ['_get_deduction']),
            generate(payload) {
                this._get_deduction(payload).then((data) => {
                    console.log(data)
                }).catch(() => {
                    this.$message.error('Sorry something went wrong')
                })
            }
        }
    }
</script>
