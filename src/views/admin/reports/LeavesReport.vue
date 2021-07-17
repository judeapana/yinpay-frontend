<template>
    <LeaveReportForm @on-submit="generate"></LeaveReportForm>
</template>

<script>
    import LeaveReportForm from "../../../components/forms/reports/LeavesReportForm";

    export default {
        name: 'LeavesReport',
        components: {LeaveReportForm},
        methods: {
            generate(payload) {
                console.log(payload)
            }
        }
    }
</script>
