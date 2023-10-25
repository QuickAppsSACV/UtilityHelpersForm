<template>
    <div>
        <v-card
        flat
        class="mb-12"
        >
            <v-card-title class="bluelight-text" >
                Water/Sewer/TrashActivation:
            </v-card-title>
            <v-card-text>
                <v-row class="mt-0">
                <v-col cols="8">
                    <v-text-field
                    dense
                    v-model="availableWater"
                    outlined
                    label="Available Water/Sewer"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <h2 class="center" style="color:Black"> <mark> ***SEE EMAIL FOR CUSTOMER INSTRUCTIONS***</mark></h2>
            </v-row>
            <v-row class="mt-10">
                <p style="font-size: 22px; color:black" >Finalize Orders</p>
            </v-row>
            <v-divider></v-divider>
            </v-card-text>
            <v-row class="mt-2">
                <v-col>
                    <v-textarea
                    outlined
                    dense
                    v-model="callNotes"
                    height="100px"
                    label="Call Notes 1"
                    hint="Who? What? When? Why? How? Next Steps?"
                    persistent-hint
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row class="mt-2">
                <v-col cols="6">
                    <v-select
                    v-model="salesRep"
                    label="Sales Rep *"
                    outlined
                    dense
                    hint="Select your Name for Sales Reporting"
                    persistent-hint
                    ></v-select>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="6">
                   <v-checkbox
                   dense
                   v-model="error"
                   label="Errors in Research?"
                   color="red"
                   ></v-checkbox>
                </v-col>
            </v-row>
            <v-row v-if="error==true" class="mt-0">
                <v-col cols="6">
                    <v-text-field
                    dense
                    outlined
                    v-model="errorField"
                    label="What was the Research Error?"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col>
                    <p style="color:black;font-size:18px">Thank you for trusting Utility Helpers! We strive to provide 5 star service. If you found your service helpful it would mean the world to us if when you receive that confirmation email, you took a moment to leave us a review about your experience today. What else I can do for you today to earn your 5 Star review?</p>
                </v-col>
            </v-row>
            <v-row class="mt-4">
                <v-col>
                    <v-checkbox
                    v-model="usedUtilityTool"
                    label="Used Utility Flow tool?"
                    ></v-checkbox>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script>

export default {
    data: vm=>( {
        error: true
    }),
    watch: {
    },
    computed: {
        availableWater: {
            get() {
                return this.$store.state.stepEight.availableWater;
            },
            set(value) {
                this.$store.state.stepEight.availableWater = value;
            },
        },
        callNotes: {
            get() {
                return this.$store.state.stepEight.callNotes;
            },
            set(value) {
                this.$store.state.stepEight.callNotes = value;
            },
        },
        salesRep: {
            get() {
                return this.$store.state.stepEight.salesRep;
            },
            set(value) {
                this.$store.state.stepEight.salesRep = value;
            },
        },
        errorField: {
            get() {
                return this.$store.state.stepEight.errorField;
            },
            set(value) {
                this.$store.state.stepEight.errorField = value;
            },
        },
        usedUtilityTool: {
            get() {
                return this.$store.state.stepEight.usedUtilityTool;
            },
            set(value) {
                this.$store.state.stepEight.usedUtilityTool = value;
            },
        },
    },
    methods: {
      
    }
}
</script>
<style>
    .blue-text {
        color: blue;
    }
    .green-text{
        color: green;
    }
    .bluelight-text{
        color:#3399ff;
    }
    .comic-sans-font{
        font-family: 'Comic Sans MS';
    }
</style>