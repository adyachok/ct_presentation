<template>
    <div>
        <h2>Trial Type Selection</h2>
        <v-form ref="form">
            <v-radio-group v-model="ex8">
                <v-radio label="Site Clinical Trial" value="ordinary"></v-radio>
                <v-radio label="Remote Clinical Trial" value="remote"></v-radio>
            </v-radio-group>

            <v-btn @click="submit" class="green">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
    </div>

</template>

<script>
    export default {
        step: "2",
        data () {
            return {
                ex8: 'ordinary',
            }
        },
        methods: {
            submit () {
                    this.$router.push("managers-selection")
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>