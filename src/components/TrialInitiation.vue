<template>
    <div>
        <h3>Trial Creation</h3>

        <v-form v-model="valid" ref="form">
            <v-text-field
                    label="Name"
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    required
            ></v-text-field>
            <v-text-field
                    label="Description"
                    v-model="description"
                    required
            ></v-text-field>
            <v-btn @click="submit" :class="{ green: valid, red: !valid }">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
    </div>

</template>

<script>
    export default {
        step: "1",
        data () {
            return {
                valid: false,
                name: '',
                nameRules: [
                    (v) => !!v || 'Name is required',
                    (v) => v.length <= 10 || 'Name must be less than 10 characters'
                ],
                description: ''
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    this.$router.push("trial-type-selection")
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>