<template>
    <div>
        <v-card elevation="10" class="pa-10 ma-10">
            <v-card-title>
                    Enterprix Copy of Utilities Scheduling Flow 2.0
            </v-card-title>
            <v-card-subtitle>              
                    For use by Rep on call to streamline the entry process
            </v-card-subtitle>    
            <v-card-text>
                <v-stepper   alt-labels v-model="e1">
<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ---------------------------------------HEADER------------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-header>
                        <v-stepper-step
                            :complete="e1 > 1"
                            step="1"
                        >
                            <small>
                                Customer Info Verification
                            </small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step
                            :complete="e1 > 2"
                            step="2"
                        >
                           <small> Available Provider Synopsis</small>
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3"
                        :complete="e1 > 3"
                        >
                            <small>Cable/Internet/Phone</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="4"
                        :complete="e1 > 4"
                        >
                            <small>Home Security</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="5"
                        :complete="e1 > 5"
                        >
                            <small>Homeowners Insurance</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="6"
                        :complete="e1 > 6"
                        >
                            <small>PODS / Pro Movers</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="7"
                        :complete="e1 > 7">
                            <small>Electric</small>
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="8"
                        :complete="e1 > 8"
                        >
                            <small>Water/Sewer/Trash</small>
                        </v-stepper-step>
                    </v-stepper-header>
<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ------------------------------------------STEP 1---------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-items>
                    <v-stepper-content step="1">
                        <StepOne/>
                        <v-card-actions>
                        <v-spacer>
                        </v-spacer>
                        <v-btn
                        color="primary"
                        @click="e1 = 2"
                        >
                        Next
                        </v-btn>
                     </v-card-actions>
                    </v-stepper-content>
<!-- ----------------------------------------------STEP 2------------------------------------------------------------------------------------------------- -->
                    <v-stepper-content step="2">
                        <StepTwo/>
                        <v-card-actions>
                            <v-btn @click="e1 = 1">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 3"
                            >
                            Next
                            </v-btn>
                       </v-card-actions>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 3 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="3">
                        <StepThree/>
                        <v-card-actions>
                        <v-btn @click="e1 = 2">
                            Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 4"
                            >
                            Next
                        </v-btn>
                        </v-card-actions>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 4 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="4">
                    <StepFour/>
                    <v-card-actions>
                            <v-btn @click="e1 = 3">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 5"
                            >
                            Next
                        </v-btn>
                    </v-card-actions>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 5 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="5">
                    <StepFive/>
                    <v-card-actions>
                            <v-btn @click="e1 = 4">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 6"
                            >
                            Next
                        </v-btn>
                    </v-card-actions>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 6 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="6">
                        <StepSix/>
                        <v-card-actions>
                            <v-btn @click="e1 = 5">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 7"
                            >
                            Next
                            </v-btn>
                        </v-card-actions>
                    </v-stepper-content>
    <!-- --------------------------------------STEP 7-------------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-content step="7">
                        <StepSeven/>
                        <v-card-actions>
                            <v-btn @click="e1 = 6">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="e1 = 8"
                            >
                            Next
                            </v-btn>
                        </v-card-actions>
                    </v-stepper-content>
<!-- --------------------------------------STEP 8-------------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-content step="8">
                        <StepEight/>
                    <v-card-actions>
                        <v-btn @click="e1 = 7">
                            Back
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                        dense
                        color="primary"
                        >Review Recap</v-btn>
                        <v-btn
                        color="primary"
                        @click="e1 = 1"
                        >
                        Submit
                        </v-btn>
                    </v-card-actions>
                    </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import StepOne from './Steps/StepOne.vue'
import StepTwo from './Steps/StepTwo.vue'
import StepThree from './Steps/StepThree.vue'
import StepFour from './Steps/StepFour.vue'
import StepFive from './Steps/StepFive.vue'
import StepSix from './Steps/StepSix.vue'
import StepSeven from './Steps/StepSeven.vue'
import StepEight from './Steps/StepEight.vue'

export default {
    components: {
        StepOne,
        StepTwo,
        StepThree,
        StepFour,
        StepFive,
        StepSix,
        StepSeven,
        StepEight
     },
    data: vm=>( {
        e1: 1,
    }),
    watch: {
    },
    computed: {
   
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