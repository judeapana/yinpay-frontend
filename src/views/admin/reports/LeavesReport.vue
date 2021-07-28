<template>
    <div>
        <LeaveReportForm @on-submit="generate"></LeaveReportForm>
        <LeaveReportLayout :data="attendance" v-if="attendance"/>
    </div>
</template>

<script>
    import LeaveReportForm from "../../../components/forms/reports/LeavesReportForm";
    import {mapActions, mapGetters} from "vuex";
    import LeaveReportLayout from "./LeaveReportLayout";

    export default {
        name: 'LeavesReport',
        components: {LeaveReportLayout, LeaveReportForm},
        computed: {
            ...mapGetters('leave_report', ['getLeave'])
        },
        data() {
            return {
                attendance: null
            }
        },
        methods: {
            ...mapActions('leave_report', ['_get_leave']),
            generate(payload) {
                this._get_leave(
                    payload?.date.length >= 2 ? {
                        from: payload?.date[0],
                        to: payload?.date[1]
                    } : {on: payload?.date[0]}).then((data) => {
                    this.attendance = data
                }).catch(() => {
                    this.$message.error('Sorry, Something went wrong')
                })
            }
        }
    }
</script>
