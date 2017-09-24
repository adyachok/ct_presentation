<template>
    <v-app light>
        <main>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs4>
                        <div id="tree"></div>
                    </v-flex>
                    <v-flex xs8>
                        <router-view></router-view>
                    </v-flex>

                </v-layout>
            </v-container>
        </main>
        <v-footer>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        step: "0",
        data() {
            return {
                title: 'Clinical Trial : Home',
                treeData: [
                    {
                        "name": "Init CT",
                        "parent": "null",
                        "id": "1",
                        "children": [{
                            "name": "Select CT Type",
                            "parent": "Init CT",
                            "id": "2",
                            "children": [
                                {
                                    "name": "Remote CT Type",
                                    "parent": "Select CT Type",
                                    "id": "3_a",
                                    "children": [
                                        {
                                            "name": "Select RCT Managers",
                                            "parent": "Remote CT Type",
                                            "id": "4_a",
                                            "children": [
                                                {
                                                    "name": "Select RCT Sites",
                                                    "parent": "Select RCT Managers",
                                                    "id": "5_a"
                                                }]
                                        }
                                    ]
                                },
                                {
                                    "name": "Common CT Type",
                                    "parent": "Select CT Type",
                                    "id": "3_b",
                                    "children": [
                                        {
                                            "name": "Select CT Managers",
                                            "parent": "Remote CT Type",
                                            "id": "4_b",
                                            "children": [
                                                {
                                                    "name": "Select CT Sites",
                                                    "parent": "Select RCT Managers",
                                                    "id": "5_b"
                                                }]
                                        }
                                    ]
                                }
                            ]
                        }]

                    }
                ]
            }
        },
        mounted() {
            treeBuilder.init(this.treeData, '#tree')
            this.$router.push("")
        },
        beforeUpdate() {
            if(this.step !== "0") {
                console.log(this.step)
//                var el = document.getElementById(this.step)
//                el.classList.remove("active")
            }

        },
        updated(){
            if(this.step !== "0") {
                console.log(this.step)
//                var el = document.getElementById(this.step)
//                el.classList.add("active")
            }
        }
    }


</script>
