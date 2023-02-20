/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { commonService } from '../services/common/common.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-tabs',
  templateUrl: './tabs.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class tabsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_n3Pz8saLNi3dByjM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_n3Pz8saLNi3dByjM(bh) {
    try {
      bh = this.sd_8onYHoDtd2SXKqMx(bh);
      //appendnew_next_sd_n3Pz8saLNi3dByjM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n3Pz8saLNi3dByjM');
    }
  }

  goToNextStep(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_IC5AFkPf0woUa4l9(bh);
      //appendnew_next_goToNextStep
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WCvbvSQBAARrynuD');
    }
  }

  //appendnew_flow_tabsComponent_start

  sd_8onYHoDtd2SXKqMx(bh) {
    try {
      bh = this.sd_FWqMw76YWMdOBkrC(bh);
      //appendnew_next_sd_8onYHoDtd2SXKqMx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8onYHoDtd2SXKqMx');
    }
  }

  sd_FWqMw76YWMdOBkrC(bh) {
    try {
      this.page.common = this.__page_injector__.get(commonService);
      //appendnew_next_sd_FWqMw76YWMdOBkrC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FWqMw76YWMdOBkrC');
    }
  }

  sd_IC5AFkPf0woUa4l9(bh) {
    try {
      const page = this.page;
      page.common.getCurrentTabdetails(1);
      page.common.isEditable = true;
      //appendnew_next_sd_IC5AFkPf0woUa4l9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IC5AFkPf0woUa4l9');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_tabsComponent_Catch
}
