<template>
    <AttendanceReportForm @on-submit="generate"></AttendanceReportForm>
</template>

<script>
    import AttendanceReportForm from "../../../components/forms/reports/AttendanceReportForm";

    export default {
        name: 'AttendanceReport',
        components: {AttendanceReportForm},
        methods: {
            generate(payload) {
                console.log(payload)
            }
        }
    }
</script>
