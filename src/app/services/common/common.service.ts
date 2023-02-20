/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class commonService {

    stepNumber =3;
    currentTabsArray = [];
    stepperList = [
    { stepId: 0, tabName: 'Register' }, 
    { stepId: 1, tabName: 'Login' }, 
    { stepId: 2, tabName: 'Education Details' }, 
    { stepId: 3, tabName: 'Personal Details' }, 
    { stepId: 4, tabName: 'Banking Details' }, 
    { stepId: 5, tabName: 'Membership Details' }, 
    { stepId: 6, tabName: 'Confirmation' }
];

tabsList = [
  { tabId: 100, tabName: 'Register', stepId: 0 },
  { tabId: 101, tabName: 'Login', stepId: 1 },
  { tabId: 102, tabName: 'Primary Education Details', stepId: 2 },
  { tabId: 103, tabName: 'Secondary Education Details', stepId: 2 },
  { tabId: 104, tabName: 'Higher Education Details', stepId: 2 },
  { tabId: 105, tabName: 'Family Details', stepId: 3 },
  { tabId: 106, tabName: 'Personal Details', stepId: 3 },
  { tabId: 107, tabName: 'Bank Details', stepId: 4 },
  { tabId: 108, tabName: 'IFSC Details', stepId: 4 },
  { tabId: 109, tabName: 'Member Details', stepId: 5 },
  { tabId: 110, tabName: 'Confirmation', stepId: 6 },
];
    getCurrentTabdetails(stepId:any){
            this.stepNumber = stepId;
            this.currentTabsArray = this.tabsList.filter((tab) => tab.stepId == stepId);
            console.log(this.currentTabsArray);
    }

    tabEnable(){
        let data =[];
        for(let i=0;i<this.stepperList.length;i++) {
          if(this.stepperList[i].stepId < this.stepNumber)
          data.push(this.stepperList[i].stepId)
    }
        console.log(data)
    return data;
    }
}
