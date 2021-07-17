<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="period" :rules="rules.period_id" item-text="name" item-value="id" label="Period"
                  v-model="form.period_id"></v-select>
        <v-btn :disabled="!valid" type="submit">Generate</v-btn>
    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name: "DeductionReportForm",
        mounted() {
            this._get_period({page: -1}).then((periods) => {
                this.period = periods.data
            })
        },
        methods: {
            ...mapActions('period', ['_get_period'])
        },

        data() {
            return {
                valid: false,
                period: [],
                rules: {
                    period: [this.required()],
                },
                form: {
                    period_id: '',
                }
            }
        }
    }
</script>
