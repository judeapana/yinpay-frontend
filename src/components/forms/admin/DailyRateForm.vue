<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="period" :rules="rules.period_id" item-text="name" item-value="id" label="Period"
                  v-model="form.period_id"></v-select>
        <v-select :items="users" :rules="rules.user_meta_id" item-text="username" item-value="user_meta.id" label="User"
                  v-model="form.user_meta_id"></v-select>
        <v-text-field :rules="rules.main_amount" label="Main Amount" type="number"
                      v-model="form.main_amount"></v-text-field>
        <v-text-field :rules="rules.emergency_amount" label="Emergency Amount" type="number"
                      v-model="form.emergency_amount"></v-text-field>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea :rules="rules.notes" label="Notes" rows="2" v-model="form.notes"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name: 'DailyRateForm',
        props: {
            errors: {
                type: Object
            },
            daily_rate: {
                type: Object
            },
            button: {
                type: String
            }
        },
        methods: {
            ...mapActions('period', ['_get_period']),
            ...mapActions('user', ['_get_user'])
        },
        computed: {},
        mounted() {
            this._get_period({page: -1}).then((periods) => {
                this.period = periods.data
            })
            this._get_user({page: -1}).then((users) => {
                this.users = users.data
            })
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            }
        },
        data() {
            return {
                period: [],
                users: [],
                valid: false,
                rules: {
                    period_id: [this.api('period_id'), this.required()],
                    main_amount: [this.api('main_amount'), this.required()],
                    emergency_amount: [this.api('emergency_amount'), this.required()],
                    disabled: [this.api('disabled')],
                    notes: [this.api('notes')],
                    user_meta_id: [this.api('user.user_meta.id'), this.required()]

                },
                form: {
                    period_id: this.daily_rate?.period_id || "",
                    user_meta_id: this.daily_rate?.user_meta_id || "",
                    main_amount: this.daily_rate?.main_amount || "",
                    emergency_amount: this.daily_rate?.emergency_amount || "",
                    disabled: this.daily_rate?.disabled || false,
                    notes: this.daily_rate?.notes || ""
                }
            }
        }
    }
</script>
