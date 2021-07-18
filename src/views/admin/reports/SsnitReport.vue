<template>
    <div>
        <SsnitReportForm @on-submit="generate"></SsnitReportForm>
        <pre>{{getSsnit}}</pre>
    </div>
</template>

<script>
    import SsnitReportForm from "../../../components/forms/reports/SsnitReportForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'SsnitReport',
        components: {SsnitReportForm},
        computed: {
            ...mapGetters('ssnit_report', ['getSsnit'])
        },
        methods: {
            ...mapActions('ssnit_report', ['_get_ssnit']),
            generate(payload) {
                this._get_ssnit(payload).catch(() => {
                    this.$message.error('Sorry, Something went wrong')
                })
            }
        }
    }
</script>
