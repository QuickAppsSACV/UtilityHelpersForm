<template>
    <div>
        <v-card flat>
            <v-card-title><b>Form Summary</b></v-card-title>
            <v-card-subtitle> Customer Info Verification</v-card-subtitle>
            <v-card-text>
                <table id="myTable">
                    <tr>
                        <td>Template Instructions</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Zoho CRM <span style="color:red">*</span></td>
                        <td>Alexis Alvarado Marquez</td>
                    </tr>
                    <tr>
                        <td>Primary Email</td>
                        <td> {{ $store.state.stepOne.primaryEmail }}</td>
                    </tr>
                   <tr>
                    <td>Primary Name</td>
                    <td> {{ $store.state.stepOne.primaryFirstName }}  {{ $store.state.stepOne.primaryLastName }}  </td>
                   </tr>
                   <tr>
                    <td>Primary Phone</td>
                    <td> {{ $store.state.stepOne.primaryPhone }}   </td>
                   </tr>
                   <tr>
                    <td> Secondary Email</td>
                    <td>  {{ $store.state.stepOne.secondaryEmail }}  </td>
                   </tr>
                   <tr>
                    <td> Secondary Name</td>
                    <td>  {{ $store.state.stepOne.secondaryFirstName }} {{ $store.state.stepOne.secondaryLastName }}  </td>
                   </tr>
                   <tr>
                    <td>Secondary Phone</td>
                    <td>{{ $store.state.stepOne.secondaryPhone }}</td>
                   </tr>
                   <tr>
                    <td>Who am i speaking to?  <span style="color:red">*</span></td>
                    <td> {{ $store.state.stepOne.whoamISpeaking }}   </td>
                   </tr>
                   <tr>
                    <td> Will any services be in the Secondary's name? <span style="color:red">*</span>   </td>
                    <td>  {{ $store.state.stepOne.willanyService }}  </td>
                   </tr>
                   <tr>
                    <td>Who submitted the request</td>
                    <td>  {{ $store.state.stepOne.whosubmittedRequest }}</td>
                   </tr>
                   <tr>
                    <td>Referral Partner    </td>
                    <td> {{ $store.state.stepOne.referrallPartner }}   </td>
                   </tr>
                   <tr>
                    <td>Brokerage/Company    </td>
                    <td>  {{ $store.state.stepOne.brokerageCompany }}  </td>
                   </tr>
                   <tr>
                    <td> Agent </td>
                    <td>  {{ $store.state.stepOne.agentFirstName }}  {{ $store.state.stepOne.agentLastName }} </td>
                   </tr>
                   <tr>
                    <td>Assistant</td>
                    <td> {{ $store.state.stepOne.assistantFirstName }} {{ $store.state.stepOne.assistantLastName }}   </td>
                   </tr>
                   <tr>
                    <td> New Address (Moving To)   </td>
                    <td> {{ $store.state.stepOne.streetAddress }} {{ $store.state.stepOne.city }} {{ $store.state.stepOne.stateRegion }} {{ $store.state.stepOne.zipCode }}      </td>
                   </tr>
                   <tr>
                    <td> Expected Closing Date </td>
                    <td> {{ $store.state.stepOne.closingDate }}   </td>
                   </tr>
                   <tr>
                    <td> Some Services will be in the <br>Secondary NameDid you add/verify <br>Secondary data? <span style="color:red">*</span></td>
                    <td> {{ $store.state.stepOne.someServicesWill }}   </td>
                   </tr>
                </table>
                <v-card-subtitle>
                    Available Provider Synopsis
                </v-card-subtitle>
                <table>   
                   <tr>
                    <td>Research Notes:</td>
                    <td> {{ $store.state.stepTwo.researchNotes }}  </td>
                   </tr>
                   <tr>
                    <td>1. Available Power Provider(s) </td>
                    <td> {{ $store.state.stepTwo.availablePower }}   </td>
                   </tr>
                   <tr>
                    <td> 2. Available Gas Provider </td>
                    <td> {{ $store.state.stepTwo.availableGas }}   </td>
                   </tr>
                   <tr>
                    <td> 3. Available Water/Sewer Service  </td>
                    <td> {{ $store.state.stepTwo.availableWater }}   </td>
                   </tr>
                   <tr>
                    <td> 4. Available Trash Provider </td>
                    <td> {{ $store.state.stepTwo.availableTrash }}   </td>
                   </tr>
                   <tr>
                    <td> Trash Days </td>
                    <td> {{ $store.state.stepTwo.trashDays }} </td>
                   </tr>
                   <tr>
                    <td> Recycle Days</td>
                    <td> {{ $store.state.stepTwo.recycleDays }} </td>
                   </tr>
                   <tr>
                    <td> Recycle is collected:</td>
                    <td> {{ $store.state.stepTwo.recycleIsCollected }} </td>
                   </tr>
                   <tr>
                    <td> Yard Days</td>
                    <td> {{ $store.state.stepTwo.yardDays }} </td>
                   </tr>
                   <tr>
                    <td> Yard is collected:</td>
                    <td> {{ $store.state.stepTwo.yardDaysIsCollected }} </td>
                   </tr>
                </table>
                <table>
                    <v-card-subtitle>
                        Cable/Internet/Phone
                    </v-card-subtitle>
                    <tr>
                    <td>Available Internet Provider(s)</td>
                    <td> {{ $store.state.stepThree.availableInternetProviders }} </td>
                   </tr>
                   <tr>
                    <td> Available TV Provider(s)</td>
                    <td> {{ $store.state.stepThree.availableTVProviders }} </td>
                   </tr>
                   <tr>
                    <td> Available Phone Provider(s)</td>
                    <td> {{ $store.state.stepThree.availablePhoneProviders }} </td>
                   </tr>
                   <tr>
                    <td> New Address</td>
                    <td> {{ $store.state.stepThree.newStreetAddress }} {{ $store.state.stepThree.newCity }}  {{ $store.state.stepThree.newState }}  {{ $store.state.stepThree.newZipCode }}   </td>
                   </tr>
                   <tr>
                    <td>  Cable Services Requested <span style="color:red">*  NEED Attention</span></td>
                    <td> {{ $store.state.stepThree.yardDaysIsCollected }} </td>
                   </tr>
                   <tr>
                    <td> Previous Address (OLD)  <span style="color:red">*</span> </td>
                    <td> {{ $store.state.stepThree.previousStreet }} {{ $store.state.stepThree.previousCity }}
                        {{ $store.state.stepThree.previousState }} {{ $store.state.stepThree.previousZipCode }}
                    </td>
                   </tr>
                   <tr>
                    <td> Security Question (Internet)</td>
                    <td> {{ $store.state.stepThree.securityQuestion }} </td>
                   </tr>
                   <tr>
                    <td> Mobile Phone Provider</td>
                    <td> {{ $store.state.stepThree.mobilePhoneProvider }} </td>
                   </tr>
                   <tr>
                    <td>Number of Mobile Lines Purchased</td>
                    <td> {{ $store.state.stepThree.noMobileLines }} </td>
                   </tr>
                   <tr>
                    <td> Mobile Activation Date</td>
                    <td> {{ $store.state.stepThree.mobileActivationDateFormattedStore }} </td>
                   </tr>
                   <tr>
                    <td> Mobile Notes</td>
                    <td> {{ $store.state.stepThree.mobileNotes }} </td>
                   </tr>
                </table>
                <v-card-subtitle>
                    Home Security
                </v-card-subtitle>
                <table>
                    <tr>
                    <td> Who's Name will Security be in?</td>
                    <td> {{ $store.state.stepFour.whoIsNameWillSecurityBeIn }} </td>
                   </tr>
                   <tr>
                    <td> Alarm Company</td>
                    <td> {{ $store.state.stepFour.alarmCompany }} </td>
                   </tr>
                   <tr>
                    <td> TraxID / Order#</td>
                    <td> {{ $store.state.stepFour.traxID }} </td>
                   </tr>
                   <tr>
                    <td> Alarm Notes</td>
                    <td> {{ $store.state.stepFour.alarmNotes }} </td>
                   </tr>
                </table>
                <v-card-subtitle>
                    Homeowners Insurance
                </v-card-subtitle>
                <table>
                    <tr>
                        <td> New State</td>
                        <td> {{ $store.state.stepFive.newState }} </td>
                    </tr>
                    <tr>
                        <td> Insurance quote requested?</td>
                        <td> {{ $store.state.stepFive.insuranceQuoteRequested }} </td>
                    </tr>
                    <tr>
                        <td>What is your Date of Birth?</td>
                        <td> {{ $store.state.stepFive.dateOfBirthDateStore }} </td>
                    </tr>
                </table>
                <v-card-subtitle>
                    PODS / Pro Movers
                </v-card-subtitle>
                <table>
                    <tr>
                        <td> PODS or Pro Mover?</td>
                        <td> {{ $store.state.stepSix.podsOrProMover }} </td>
                    </tr>
                    <tr>
                        <td> Customer would like a Solar Consultation</td>
                        <td> {{ $store.state.stepSix.wouldLikeSolarConsulation }} </td>
                    </tr>
                </table>
                <v-card-subtitle>
                    Electric
                </v-card-subtitle>
                <table>
                    <tr>
                        <td> Available Power Provider(s)</td>
                        <td> {{ $store.state.stepSeven.availablePowerProviders }} </td>
                    </tr>
                    <tr>
                        <td>Primary DOB</td>
                        <td> {{ $store.state.stepSeven.primaryDOBFormatedStore }} </td>
                    </tr>
                    <tr>
                        <td>Primary SSN</td>
                        <td> {{ $store.state.stepSeven.primarySSN }} </td>
                    </tr>
                    <tr>
                        <td>Secondary DOB for Power</td>
                        <td> {{ $store.state.stepSeven.secondaryDOBFormatedStore }} </td>
                    </tr>
                    <tr>
                        <td>Secondary SSN for Power</td>
                        <td> {{ $store.state.stepSeven.secondarySSNForPower }} </td>
                    </tr>
                    <tr>
                        <td>Available Gas Provider(s)</td>
                        <td> {{ $store.state.stepSeven.availableGasProviders }} </td>
                    </tr>
                    <tr>
                        <td>Who's name will the Gas be in?</td>
                        <td> {{ $store.state.stepSeven.whosNameWillGas }} </td>
                    </tr>
                </table>
                <v-card-subtitle>
                    Water/Sewer/Trash
                </v-card-subtitle>
                <table>
                    <tr>
                        <td> Available Water/Sewer</td>
                        <td> {{ $store.state.stepEight.availableWater }} </td>
                    </tr>
                    <tr>
                        <td>Call Notes 1 </td>
                        <td> {{ $store.state.stepEight.callNotes }} </td>
                    </tr>
                    <tr>
                        <td>Sales Rep <span style="color:red">*</span> </td>
                        <td> {{ $store.state.stepEight.salesRep }} </td>
                    </tr>
                    <tr>
                        <td>Errors in Research? </td>
                        <td> {{ $store.state.stepEight.errorField }} </td>
                    </tr>
                </table>
            </v-card-text>
        </v-card>
    </div>
</template>
<style>
table{
    width: 100%;
    border-collapse: collapse;
}
th, td {
border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width: 50vw !important;
}
</style>