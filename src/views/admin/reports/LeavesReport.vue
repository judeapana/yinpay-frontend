<template>
    <div>
        <LeaveReportForm @on-submit="generate"></LeaveReportForm>
        <pre>{{getLeave}}</pre>
    </div>
</template>

<script>
    import LeaveReportForm from "../../../components/forms/reports/LeavesReportForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'LeavesReport',
        components: {LeaveReportForm},
        computed: {
            ...mapGetters('leave_report', ['getLeave'])
        },
        methods: {
            ...mapActions('leave_report', ['_get_leave']),
            generate(payload) {
                this._get_leave(
                    payload?.date.length >= 2 ? {
                        from: payload?.date[0],
                        to: payload?.date[1]
                    } : {on: payload?.date[0]}).then(() => {

                }).catch(() => {
                    this.$message.error('Sorry, Something went wrong')
                })
            }
        }
    }
</script>
