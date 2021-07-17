<template>
    <div>
        <SettingsForm @on-submit="update" button="Update"/>
    </div>
</template>

<script>
    import SettingsForm from "../../components/forms/admin/SettingsForm";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'Settings',
        components: {SettingsForm},
        mounted() {

        },
        computed: {
            ...mapGetters('business', ['getSettings']),
        },
        methods: {
            ...mapActions('business', ['_getSetting', '_putSetting']),
            update(payload) {
                this._putSetting(payload).then((data) => {
                    console.log(data)
                }).catch((e) => {
                    this.errors = e
                })
            }
        },
        data() {
            return {
                errors: null,
                settings: null
            }
        },
    }
</script>

<style scoped>

</style>
