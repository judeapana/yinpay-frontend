<template>
    <div>
        <v-card>
            <v-card-title>Profile</v-card-title>
            <v-card-subtitle>Change your profile information of your account</v-card-subtitle>
            <v-card-text>
                <ProfileForm :errors="errors" @on-submit="update" button="Update"></ProfileForm>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import ProfileForm from "../../components/forms/admin/ProfileForm";
    import {mapActions} from "vuex";

    export default {
        name: 'Profile',
        components: {ProfileForm},
        methods: {
            ...mapActions('profile', ['_put_profile']),
            update(payload) {
                this._put_profile(payload).then((data) => {
                    console.log(data)
                }).catch((e) => {
                    this.errors = e
                })
            }
        },
        data() {
            return {
                errors: null,
            }
        },
    }
</script>

<style scoped>

</style>
