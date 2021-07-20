<template>
    <div>
        <AttendanceReportForm @on-submit="generate"></AttendanceReportForm>
        <pre>{{getAttendance}}</pre>
    </div>
</template>

<script>
    import AttendanceReportForm from "../../../components/forms/reports/AttendanceReportForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'AttendanceReport',
        components: {AttendanceReportForm},
        computed: {
            ...mapGetters('attendance_report', ['getAttendance'])
        },
        methods: {
            ...mapActions('attendance_report', ['_get_attendance']),
            generate(payload) {
                this._get_attendance(payload?.date.length >= 2 ? {
                    from: payload?.date[0],
                    to: payload?.date[1]
                } : {on: payload?.date[0]}).catch(() => {
                    this.$message.error('Sorry, Something went wrong')
                })
            }
        }
    }
</script>
