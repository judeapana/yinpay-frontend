<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="period" :rules="rules.period_id" item-text="name" item-value="id" label="Period"
                  v-model="form.period_id"></v-select>
        <v-select :items="users" :rules="rules.user_meta_id" item-text="username" item-value="user_meta.id" label="User"
                  v-model="form.user_meta_id"></v-select>
        <v-btn :disabled="!valid" type="submit">Generate</v-btn>
    </v-form>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "PayrollReportForm",
        mounted() {
            this._get_period({page: -1}).then((periods) => {
                this.period = periods.data
            })
            this._get_user({page: -1}).then((users) => {
                this.users = users.data
            })
        },
        methods: {
            ...mapActions('user', ['_get_user']),
            ...mapActions('period', ['_get_period'])
        },

        data() {
            return {
                valid: false,
                period: [],
                users: [],
                rules: {
                    period: [this.required()],
                    user_meta_id: [this.required()]
                },
                form: {
                    period_id: '',
                    user_meta_id: ''
                }
            }
        }
    }
</script>
