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
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_sCC6wMAb8EMeWXRA(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_sCC6wMAb8EMeWXRA(bh) {
    try {
      bh = this.sd_ho5lzmfANCOESSmz(bh);
      //appendnew_next_sd_sCC6wMAb8EMeWXRA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sCC6wMAb8EMeWXRA');
    }
  }

  seletedStep(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_CJuw0hhvBT9L334l(bh);
      //appendnew_next_seletedStep
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vtau54Zzh8oL31JF');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_ho5lzmfANCOESSmz(bh) {
    try {
      this.page.stepIndex = '0';
      bh = this.sd_byO66AZrDbTMwoi7(bh);
      //appendnew_next_sd_ho5lzmfANCOESSmz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ho5lzmfANCOESSmz');
    }
  }

  sd_byO66AZrDbTMwoi7(bh) {
    try {
      this.page.common = this.__page_injector__.get(commonService);
      bh = this.sd_EL7riCiuHT360XNt(bh);
      //appendnew_next_sd_byO66AZrDbTMwoi7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_byO66AZrDbTMwoi7');
    }
  }

  sd_EL7riCiuHT360XNt(bh) {
    try {
      const page = this.page;
      page.common.getCurrentTabdetails(0);
      //appendnew_next_sd_EL7riCiuHT360XNt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EL7riCiuHT360XNt');
    }
  }

  sd_CJuw0hhvBT9L334l(bh) {
    try {
      const page = this.page; // page.common.stepNumber =0;
      console.log(bh.input.event);
      //appendnew_next_sd_CJuw0hhvBT9L334l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CJuw0hhvBT9L334l');
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
  //appendnew_flow_homeComponent_Catch
}
