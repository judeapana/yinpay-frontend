<template>
    <div>
        <AttendanceReportForm @on-submit="generate"></AttendanceReportForm>
        <AttendanceReportLayout v-if="attendance" :data="attendance"/>
    </div>
</template>

<script>
    import AttendanceReportForm from "../../../components/forms/reports/AttendanceReportForm";
    import {mapActions, mapGetters} from "vuex";
    import AttendanceReportLayout from "./AttendanceReportLayout";

    export default {
        name: 'AttendanceReport',
        components: {AttendanceReportLayout, AttendanceReportForm},
        computed: {
            ...mapGetters('attendance_report', ['getAttendance'])
        },
        data() {
            return {
                attendance: null
            }
        },
        methods: {
            ...mapActions('attendance_report', ['_get_attendance']),
            generate(payload) {
                this._get_attendance(payload?.date.length >= 2 ? {
                    from: payload?.date[0],
                    to: payload?.date[1]
                } : {on: payload?.date[0]}).then(data => {
                    this.attendance = data
                }).catch(() => {
                    this.$message.error('Sorry, Something went wrong')
                })
            }
        }
    }
</script>
