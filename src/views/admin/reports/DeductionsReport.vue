<template>
    <DeductionReportForm @on-submit="generate"></DeductionReportForm>
</template>

<script>
    import DeductionReportForm from "../../../components/forms/reports/DeductionReportForm";

    export default {
        name: 'DeductionsReport',
        components: {DeductionReportForm},
        methods: {
            generate(payload) {
                console.log(payload)
            }
        }
    }
</script>
