<template>
    <v-form @submit="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="users" :rules="rules.user_meta_id" item-text="username" item-value="user_meta.id" label="User"
                  v-model="form.user_meta_id"></v-select>
        <v-combobox :items="['Sick Leave',]" :rules="rules.ltype" label="Type Of Leave"
                    v-model="form.ltype"></v-combobox>

        <v-date-picker elevation="2" full-width range v-model="date"
        ></v-date-picker>
        <!--        <v-menu :close-on-content-click="false" :nudge-right="40" min-width="auto" offset-y-->
        <!--                transition="scale-transition" v-model="dateMenu">-->
        <!--            <template v-slot:activator="{ on, attrs }">-->
        <v-text-field
                :rules="rules.date"
                label="From Date n To Date"
                prepend-icon="mdi-calendar"
                readonly
                v-model="date"
        ></v-text-field>
        <!--            </template>-->
        <!--            -->
        <!--        </v-menu>-->
        <v-textarea :rules="rules.reason" label="Reason" v-model="form.reason"></v-textarea>
        <v-switch :rules="rules.without_pay" label="Without Payment" v-model="form.without_pay"></v-switch>
        <v-switch :rules="rules.status" label="Status" v-model="form.status"></v-switch>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: 'UserLeaveForm',
        props: {
            errors: {
                type: Object
            },
            button: {
                type: String
            },
            leave: {
                type: Object
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            },
            date(value) {
                if (value.length > 0) {
                    this.form.to_date = value[1]
                    this.form.from_date = value[0]
                }
            }
        },
        methods: {
            ...mapActions('user', ['_get_user']),
        },
        mounted() {
            this._get_user({page: -1}).then((users) => {
                this.users = users.data
            })
        },

        data() {
            return {
                users: [],
                valid: false,
                rules: {
                    user_meta_id: [this.required(), this.api('user_meta_id')],
                    without_pay: [this.api('without_pay')],
                    ltype: [this.required(), this.api('ltype')],
                    reason: [this.required(), this.api('reason')],
                    date: [this.required(), this.api('from_date'), this.api('to_date')],
                    status: [this.api('status')],
                },
                date: [this.leave?.from_date || '', this.leave?.to_date || ''],
                dateMenu: false,
                form: {
                    user_meta_id: this.leave?.user_meta_id || "",
                    without_pay: this.leave?.without_pay || false,
                    ltype: this.leave?.ltype || '',
                    from_date: this.leave?.from_date || '',
                    to_date: this.leave?.to_date || '',
                    reason: this.leave?.reason || '',
                    status: this.leave?.status || false
                }
            }
        },
    }
</script>

<style scoped>

</style>
