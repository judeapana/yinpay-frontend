<template>
    <div>
        <EarningsReportForm @on-submit="generate"></EarningsReportForm>
        <template v-for="(_earning,index) in earning">
            <EarningReportLayout :data="_earning" :key="index"/>
        </template>
    </div>
</template>

<script>
    import EarningsReportForm from "../../../components/forms/reports/EarningsReportForm";
    import {mapActions, mapGetters} from "vuex";
    import EarningReportLayout from "./EarningReportLayout";

    export default {
        name: 'EarningsReport',
        components: {EarningReportLayout, EarningsReportForm},
        computed: {
            ...mapGetters('earning_report', ['getEarning'])
        },
        data() {
            return {
                earning: null
            }
        },
        methods: {
            ...mapActions('earning_report', ['_get_earning']),
            generate(payload) {
                this._get_earning(payload).then((data) => {
                    this.earning = data
                }).catch(() => {
                    this.$message.error('Sorry, Something went wrong')
                })
            }
        }
    }
</script>
