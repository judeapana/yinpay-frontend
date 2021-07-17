<template>
    <EarningsReportForm @on-submit="generate"></EarningsReportForm>
</template>

<script>
    import EarningsReportForm from "../../../components/forms/reports/EarningsReportForm";

    export default {
        name: 'EarningsReport',
        components: {EarningsReportForm},
        methods: {
            generate(payload) {
                console.log(payload)
            }
        }
    }
</script>
