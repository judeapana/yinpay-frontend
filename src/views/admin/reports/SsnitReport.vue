<template>
    <div>
        <SsnitReportForm @on-submit="generate"></SsnitReportForm>
        <template v-for="(_ssnit,index) in ssnit">
            <SsnitReportLayout :data="_ssnit" :key="index"/>
        </template>
    </div>
</template>

<script>
    import SsnitReportForm from "../../../components/forms/reports/SsnitReportForm";
    import {mapActions, mapGetters} from "vuex";
    import SsnitReportLayout from "./SsnitReportLayout";

    export default {
        name: 'SsnitReport',
        components: {SsnitReportLayout, SsnitReportForm},
        computed: {
            ...mapGetters('ssnit_report', ['getSsnit'])
        },
        data() {
            return {
                ssnit: null
            }
        },
        methods: {
            ...mapActions('ssnit_report', ['_get_ssnit']),
            generate(payload) {
                this._get_ssnit(payload).then((data) => {
                    this.ssnit = data
                }).catch(() => {
                    this.$message.error('Sorry, Something went wrong')
                })
            }
        }
    }
</script>
