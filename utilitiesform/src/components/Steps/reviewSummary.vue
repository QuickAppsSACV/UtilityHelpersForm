<template>
    <div>
        <v-card flat>
            <v-card-title><b>Form Summary</b></v-card-title>
            <v-card-subtitle> Customer Info Verification</v-card-subtitle>
            <v-card-text>
                <table id="myTable">
                    <tr>
                        <td class="tdClass">Template Instructions</td>
                        <td class="tdClass"> {{ $store.state.stepOne.templateInstructions }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Zoho CRM <span style="color:red">*</span></td>
                        <td class="tdClass">{{ $store.state.stepOne.zohoCRM }}</td>
                    </tr>
                    <tr>
                        <td class="tdClass">Primary Email</td>
                        <td class="tdClass"> {{ $store.state.stepOne.primaryEmail }}</td>
                    </tr>
                   <tr>
                    <td class="tdClass">Primary Name</td>
                    <td class="tdClass"> {{ $store.state.stepOne.primaryFirstName }}  {{ $store.state.stepOne.primaryLastName }}  </td>
                   </tr>
                   <tr>
                    <td class="tdClass">Primary Phone</td>
                    <td class="tdClass"> {{ $store.state.stepOne.primaryPhone }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Secondary Email</td>
                    <td class="tdClass">  {{ $store.state.stepOne.secondaryEmail }}  </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Secondary Name</td>
                    <td class="tdClass">  {{ $store.state.stepOne.secondaryFirstName }} {{ $store.state.stepOne.secondaryLastName }}  </td>
                   </tr>
                   <tr>
                    <td class="tdClass">Secondary Phone</td>
                    <td class="tdClass">{{ $store.state.stepOne.secondaryPhone }}</td>
                   </tr>
                   <tr>
                    <td class="tdClass">Who am i speaking to?  <span style="color:red">*</span></td>
                    <td class="tdClass"> {{ $store.state.stepOne.whoamISpeaking }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Will any services be in the Secondary's name? <span style="color:red">*</span>   </td>
                    <td class="tdClass">  {{ $store.state.stepOne.willanyService }}  </td>
                   </tr>
                   <tr>
                    <td class="tdClass">Who submitted the request</td>
                    <td class="tdClass">  {{ $store.state.stepOne.whosubmittedRequest }}</td>
                   </tr>
                   <tr>
                    <td class="tdClass">Referral Partner    </td>
                    <td class="tdClass"> {{ $store.state.stepOne.referrallPartner }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass">Brokerage/Company    </td>
                    <td class="tdClass">  {{ $store.state.stepOne.brokerageCompany }}  </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Agent </td>
                    <td class="tdClass">  {{ $store.state.stepOne.agentFirstName }}  {{ $store.state.stepOne.agentLastName }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass">Assistant</td>
                    <td class="tdClass"> {{ $store.state.stepOne.assistantFirstName }} {{ $store.state.stepOne.assistantLastName }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> New Address (Moving To)   </td>
                    <td class="tdClass"> {{ $store.state.stepOne.streetAddress }} {{ $store.state.stepOne.city }} {{ $store.state.stepOne.stateRegion }} {{ $store.state.stepOne.zipCode }}      </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Expected Closing Date </td>
                    <td class="tdClass"> {{ $store.state.stepOne.closingDate }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Some Services will be in the <br>Secondary NameDid you add/verify <br>Secondary data? <span style="color:red">*</span></td>
                    <td class="tdClass"> {{ $store.state.stepOne.someServicesWill }}   </td>
                   </tr>
                </table>
                <v-card-subtitle>
                    Available Provider Synopsis
                </v-card-subtitle>
                <table>   
                   <tr>
                    <td class="tdClass">Research Notes:</td>
                    <td class="tdClass"> {{ $store.state.stepTwo.researchNotes }}  </td>
                   </tr>
                   <tr>
                    <td class="tdClass">1. Available Power Provider(s) </td>
                    <td class="tdClass"> {{ $store.state.stepTwo.availablePower }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> 2. Available Gas Provider </td>
                    <td class="tdClass"> {{ $store.state.stepTwo.availableGas }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> 3. Available Water/Sewer Service  </td>
                    <td class="tdClass"> {{ $store.state.stepTwo.availableWater }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> 4. Available Trash Provider </td>
                    <td class="tdClass"> {{ $store.state.stepTwo.availableTrash }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Trash Days </td>
                    <td class="tdClass"> {{ $store.state.stepTwo.trashDays }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Recycle Days</td>
                    <td class="tdClass"> {{ $store.state.stepTwo.recycleDays }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Recycle is collected:</td>
                    <td class="tdClass"> {{ $store.state.stepTwo.recycleIsCollected }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Yard Days</td>
                    <td class="tdClass"> {{ $store.state.stepTwo.yardDays }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Yard is collected:</td>
                    <td class="tdClass"> {{ $store.state.stepTwo.yardIsCollected }} </td>
                   </tr>
                </table>
                <table>
                    <v-card-subtitle>
                        Cable/Internet/Phone
                    </v-card-subtitle>
                    <tr>
                    <td class="tdClass">Available Internet Provider(s)</td>
                    <td class="tdClass"> {{ $store.state.stepThree.availableInternetProviders }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Available TV Provider(s)</td>
                    <td class="tdClass"> {{ $store.state.stepThree.availableTVProviders }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Available Phone Provider(s)</td>
                    <td class="tdClass"> {{ $store.state.stepThree.availablePhoneProviders }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> New Address</td>
                    <td class="tdClass"> {{ $store.state.stepThree.newStreetAddress }} {{ $store.state.stepThree.newCity }}  {{ $store.state.stepThree.newState }}  {{ $store.state.stepThree.newZipCode }}   </td>
                   </tr>
                   <tr>
                    <td class="tdClass">  Cable Services Requested <span style="color:red">*  NEED Attention</span></td>
                    <td class="tdClass"> {{ $store.state.stepThree.yardIsCollected }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Previous Address (OLD)  <span style="color:red">*</span> </td>
                    <td class="tdClass"> {{ $store.state.stepThree.previousStreet }} {{ $store.state.stepThree.previousCity }}
                        {{ $store.state.stepThree.previousState }} {{ $store.state.stepThree.previousZipCode }}
                    </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Security Question (Internet)</td>
                    <td class="tdClass"> {{ $store.state.stepThree.securityQuestion }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Mobile Phone Provider</td>
                    <td class="tdClass"> {{ $store.state.stepThree.mobilePhoneProvider }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass">Number of Mobile Lines Purchased</td>
                    <td class="tdClass"> {{ $store.state.stepThree.noMobileLines }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Mobile Activation Date</td>
                    <td class="tdClass"> {{ $store.state.stepThree.mobileActivationDateFormattedStore }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Mobile Notes</td>
                    <td class="tdClass"> {{ $store.state.stepThree.mobileNotes }} </td>
                   </tr>
                </table>
                <v-card-subtitle>
                    Home Security
                </v-card-subtitle>
                <table>
                    <tr>
                    <td class="tdClass"> Who's Name will Security be in?</td>
                    <td class="tdClass"> {{ $store.state.stepFour.whoIsNameWillSecurityBeIn }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Alarm Company</td>
                    <td class="tdClass"> {{ $store.state.stepFour.alarmCompany }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> TraxID / Order#</td>
                    <td class="tdClass"> {{ $store.state.stepFour.traxID }} </td>
                   </tr>
                   <tr>
                    <td class="tdClass"> Alarm Notes</td>
                    <td class="tdClass"> {{ $store.state.stepFour.alarmNotes }} </td>
                   </tr>
                </table>
                <v-card-subtitle>
                    Homeowners Insurance
                </v-card-subtitle>
                <table>
                    <tr>
                        <td class="tdClass"> New State</td>
                        <td class="tdClass"> {{ $store.state.stepFive.newState }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass"> Insurance quote requested?</td>
                        <td class="tdClass"> {{ $store.state.stepFive.insuranceQuoteRequested }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">What is your Date of Birth?</td>
                        <td class="tdClass"> {{ $store.state.stepFive.dateOfBirthDateStore }} </td>
                    </tr>
                </table>
                <v-card-subtitle>
                    PODS / Pro Movers
                </v-card-subtitle>
                <table>
                    <tr>
                        <td class="tdClass"> PODS or Pro Mover?</td>
                        <td class="tdClass"> {{ $store.state.stepSix.podsOrProMover }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass"> Customer would like a Solar Consultation</td>
                        <td class="tdClass"> {{ $store.state.stepSix.wouldLikeSolarConsulation }} </td>
                    </tr>
                </table>
                <v-card-subtitle>
                    Electric
                </v-card-subtitle>
                <table>
                    <tr>
                        <td class="tdClass"> Available Power Provider(s)</td>
                        <td class="tdClass"> {{ $store.state.stepSeven.availablePowerProviders }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Primary DOB</td>
                        <td class="tdClass"> {{ $store.state.stepSeven.primaryDOBFormatedStore }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Primary SSN</td>
                        <td class="tdClass"> {{ $store.state.stepSeven.primarySSN }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Secondary DOB for Power</td>
                        <td class="tdClass"> {{ $store.state.stepSeven.secondaryDOBFormatedStore }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Secondary SSN for Power</td>
                        <td class="tdClass"> {{ $store.state.stepSeven.secondarySSNForPower }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Available Gas Provider(s)</td>
                        <td class="tdClass"> {{ $store.state.stepSeven.availableGasProviders }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Who's name will the Gas be in?</td>
                        <td class="tdClass"> {{ $store.state.stepSeven.whosNameWillGas }} </td>
                    </tr>
                </table>
                <v-card-subtitle>
                    Water/Sewer/Trash
                </v-card-subtitle>
                <table>
                    <tr>
                        <td class="tdClass"> Available Water/Sewer</td>
                        <td class="tdClass"> {{ $store.state.stepEight.availableWater }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Call Notes 1 </td>
                        <td class="tdClass"> {{ $store.state.stepEight.callNotes }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Sales Rep <span style="color:red">*</span> </td>
                        <td class="tdClass"> {{ $store.state.stepEight.salesRep }} </td>
                    </tr>
                    <tr>
                        <td class="tdClass">Errors in Research? </td>
                        <td class="tdClass"> {{ $store.state.stepEight.errorField }} </td>
                    </tr>
                </table>
            </v-card-text>
        </v-card>
    </div>
</template>
<style>
#myTable{
    width: 100%;
    border-collapse: collapse;
}
.tdClass {
border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width: 50vw !important;
}
</style>