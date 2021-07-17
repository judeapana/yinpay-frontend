<template>
    <SsnitReportForm @on-submit="generate"></SsnitReportForm>
</template>

<script>
    import SsnitReportForm from "../../../components/forms/reports/SsnitReportForm";

    export default {
        name: 'SsnitReport',
        components: {SsnitReportForm},
        methods: {
            generate(payload) {
                console.log(payload)
            }
        }
    }
</script>
