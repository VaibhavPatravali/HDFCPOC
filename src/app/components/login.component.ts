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
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_ckxg97JaYSOeniAm(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ckxg97JaYSOeniAm(bh) {
    try {
      bh = this.sd_rlHcQcx2yMyvDgpg(bh);
      //appendnew_next_sd_ckxg97JaYSOeniAm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ckxg97JaYSOeniAm');
    }
  }

  onSubmit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_uskxcM8La01Df0M2(bh);
      //appendnew_next_onSubmit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gJeV6aEEFRsMVni8');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_rlHcQcx2yMyvDgpg(bh) {
    try {
      bh = this.sd_9srkiR7CO602kTAs(bh);
      //appendnew_next_sd_rlHcQcx2yMyvDgpg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rlHcQcx2yMyvDgpg');
    }
  }

  sd_9srkiR7CO602kTAs(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      bh = this.sd_nneP4l9DmSv1ihRI(bh);
      //appendnew_next_sd_9srkiR7CO602kTAs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9srkiR7CO602kTAs');
    }
  }

  sd_nneP4l9DmSv1ihRI(bh) {
    try {
      const page = this.page;
      page.loginForm = page.fb.group({
        userName: [''],
        password: [''],
      });
      //appendnew_next_sd_nneP4l9DmSv1ihRI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nneP4l9DmSv1ihRI');
    }
  }

  sd_uskxcM8La01Df0M2(bh) {
    try {
      const page = this.page;
      console.log(page.loginForm.value);
      bh = this.sd_VWsmb1uZjliAjIj7(bh);
      //appendnew_next_sd_uskxcM8La01Df0M2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uskxcM8La01Df0M2');
    }
  }

  async sd_VWsmb1uZjliAjIj7(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_VWsmb1uZjliAjIj7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VWsmb1uZjliAjIj7');
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
  //appendnew_flow_loginComponent_Catch
}
