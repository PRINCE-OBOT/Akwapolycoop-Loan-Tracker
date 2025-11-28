/*! For license information please see borrower-sign-up.js.LICENSE.txt */
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&"SCRIPT"===a.currentScript.tagName.toUpperCase()&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=n[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=globalThis,a=t.trustedTypes,n=a?a.createPolicy("lit-html",{createHTML:e=>e}):void 0,i="$lit$",s=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+s,r=`<${o}>`,l=document,d=()=>l.createComment(""),c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,u=Array.isArray,p="[ \t\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,f=/>/g,h=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,y=/"/g,b=/^(?:script|style|textarea|title)$/i,w=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),S=w(1),x=(w(2),w(3),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),q=new WeakMap,P=l.createTreeWalker(l,129);function E(e,t){if(!u(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(t):t}const D=(e,t)=>{const a=e.length-1,n=[];let o,l=2===t?"<svg>":3===t?"<math>":"",d=m;for(let t=0;t<a;t++){const a=e[t];let c,u,p=-1,w=0;for(;w<a.length&&(d.lastIndex=w,u=d.exec(a),null!==u);)w=d.lastIndex,d===m?"!--"===u[1]?d=v:void 0!==u[1]?d=f:void 0!==u[2]?(b.test(u[2])&&(o=RegExp("</"+u[2],"g")),d=h):void 0!==u[3]&&(d=h):d===h?">"===u[0]?(d=o??m,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,c=u[1],d=void 0===u[3]?h:'"'===u[3]?y:g):d===y||d===g?d=h:d===v||d===f?d=m:(d=h,o=void 0);const S=d===h&&e[t+1].startsWith("/>")?" ":"";l+=d===m?a+r:p>=0?(n.push(c),a.slice(0,p)+i+a.slice(p)+s+S):a+s+(-2===p?t:S)}return[E(e,l+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class k{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let l=0,c=0;const u=e.length-1,p=this.parts,[m,v]=D(e,t);if(this.el=k.createElement(m,n),P.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=P.nextNode())&&p.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(i)){const t=v[c++],a=r.getAttribute(e).split(s),n=/([.?@])?(.*)/.exec(t);p.push({type:1,index:l,name:n[2],strings:a,ctor:"."===n[1]?$:"?"===n[1]?F:"@"===n[1]?I:N}),r.removeAttribute(e)}else e.startsWith(s)&&(p.push({type:6,index:l}),r.removeAttribute(e));if(b.test(r.tagName)){const e=r.textContent.split(s),t=e.length-1;if(t>0){r.textContent=a?a.emptyScript:"";for(let a=0;a<t;a++)r.append(e[a],d()),P.nextNode(),p.push({type:2,index:++l});r.append(e[t],d())}}}else if(8===r.nodeType)if(r.data===o)p.push({type:2,index:l});else{let e=-1;for(;-1!==(e=r.data.indexOf(s,e+1));)p.push({type:7,index:l}),e+=s.length-1}l++}}static createElement(e,t){const a=l.createElement("template");return a.innerHTML=e,a}}function M(e,t,a=e,n){if(t===x)return t;let i=void 0!==n?a._$Co?.[n]:a._$Cl;const s=c(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,a,n)),void 0!==n?(a._$Co??=[])[n]=i:a._$Cl=i),void 0!==i&&(t=M(e,i._$AS(e,t.values),i,n)),t}class C{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,n=(e?.creationScope??l).importNode(t,!0);P.currentNode=n;let i=P.nextNode(),s=0,o=0,r=a[0];for(;void 0!==r;){if(s===r.index){let t;2===r.type?t=new V(i,i.nextSibling,this,e):1===r.type?t=new r.ctor(i,r.name,r.strings,this,e):6===r.type&&(t=new L(i,this,e)),this._$AV.push(t),r=a[++o]}s!==r?.index&&(i=P.nextNode(),s++)}return P.currentNode=l,n}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class V{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,n){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),c(e)?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==x&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>u(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&c(this._$AH)?this._$AA.nextSibling.data=e:this.T(l.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,n="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=k.createElement(E(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new C(n,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new k(e)),t}k(e){u(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,n=0;for(const i of e)n===t.length?t.push(a=new V(this.O(d()),this.O(d()),this,this.options)):a=t[n],a._$AI(i),n++;n<t.length&&(this._$AR(a&&a._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,n,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=A}_$AI(e,t=this,a,n){const i=this.strings;let s=!1;if(void 0===i)e=M(this,e,t,0),s=!c(e)||e!==this._$AH&&e!==x,s&&(this._$AH=e);else{const n=e;let o,r;for(e=i[0],o=0;o<i.length-1;o++)r=M(this,n[a+o],t,o),r===x&&(r=this._$AH[o]),s||=!c(r)||r!==this._$AH[o],r===A?e=A:e!==A&&(e+=(r??"")+i[o+1]),this._$AH[o]=r}s&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class $ extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class F extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class I extends N{constructor(e,t,a,n,i){super(e,t,a,n,i),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??A)===x)return;const a=this._$AH,n=e===A&&a!==A||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==A&&(a===A||n);n&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const T=t.litHtmlPolyfillSupport;T?.(k,V),(t.litHtmlVersions??=[]).push("3.3.1");class _{constructor({messages:e,inputs:t,runWhenAllFieldFillIsValid:a}){this.messages=e,this.inputs=t,this.runWhenAllFieldFillIsValid=a,this.render()}render(){this.customCheckValidity()}customCheckValidity(){const e=[...this.inputs].some(e=>e.validity.valid);if([...this.messages].some(e=>e.classList.contains("valid"))&&e)this.runWhenAllFieldFillIsValid();else{[...this.messages].filter(e=>!e.classList.contains("valid")).forEach(e=>{e.closest("div").querySelector("[data-set-field-validation-value]").classList.add("invalid")})}}static resetFieldValidity(e){const t=e.querySelectorAll("output.show-message"),a=e.querySelectorAll("input"),n=e.querySelectorAll("textarea"),i=e.querySelectorAll("select");t.forEach(e=>{e.classList.remove("valid"),e.textContent=""});const s=[...a];n&&s.push(...n),i&&s.push(...i),s.forEach(e=>{e.classList.remove("user-interact")})}static hasUserInteract({field:e}){""===e.value||e.classList.contains("user-interact")||e.classList.add("user-interact")}static removeInvalidHighlightFromInput({field:e}){e.classList.contains("invalid")&&e.classList.remove("invalid")}static colorCustomMessage({msgToColor:e,validityState:t,field:a}){e.classList.add(t),a&&a.classList.add(t),t="valid"===t?"invalid":"valid",e.classList.remove(t),a&&a.classList.remove(t)}static resetFieldStyle({field:e,fieldMessage:t}){return""!==e.value?{empty:!1}:(t.value="",t.classList.remove("invalid","valid"),{empty:!0})}static validateClientAndServerState({field:e,isFieldValid:t,fieldMessage:a,msg:n,isConfirmPassword:i,field2:s}){let o,r;if(e.validity.valid&&t?(o="&#9864;",r="valid"):(o=n,r="invalid"),o&&(a.innerHTML=o),this.colorCustomMessage({msgToColor:a,validityState:r,field:s}),i)return this.isPasswordWeak({validityState:r})}static isPasswordWeak({validityState:e}){return"invalid"===e?{weak:!0}:{weak:!1}}}class H{constructor({field:e,fieldMessage:t,isFieldValid:a,fieldErrorMessage:n}){this.field=e,this.fieldMessage=t,this.isFieldValid=a,this.fieldErrorMessage=n,this.render()}render(){this.validateField()}validateField(){_.hasUserInteract({field:this.field}),_.removeInvalidHighlightFromInput({field:this.field}),_.resetFieldStyle({field:this.field,fieldMessage:this.fieldMessage}).empty||_.validateClientAndServerState({field:this.field,fieldMessage:this.fieldMessage,isFieldValid:this.isFieldValid,msg:this.fieldErrorMessage})}}const R={isFieldValid:!1,fieldErrorMessage:!1,setNameValidationValue({field:e}){this.isFieldValid=/^[a-zA-Z]{1,}$/.test(e.value),this.fieldErrorMessage="Incorrect name format"},setEmailValidationValue({field:e}){this.isFieldValid=/^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$/.test(e.value),this.fieldErrorMessage="Incorrect email format"},setAddressValidationValue({field:e}){this.isFieldValid=/(?=.*\s)(?=.*[a-zA-Z])(?=.*[0-9]).{20,}/i.test(e.value),this.fieldErrorMessage="Address not Descriptive"},setBusinessNameValidationValue({field:e}){this.isFieldValid=/^[a-zA-Z0-9_' -]{5,}$/i.test(e.value),this.fieldErrorMessage="Business Name not Descriptive"},setNINValidationValue({field:e}){this.isFieldValid=/^[0-9]{11}$/.test(e.value),this.fieldErrorMessage="Invalid NIN"},setPhoneNumberValidationValue({field:e}){this.isFieldValid=/0?[0-9]{10}/.test(e.value),this.fieldErrorMessage="Incorrect Phone Number"},setPassportValidationValue({field:e}){this.isFieldValid=/^.+\.(png|jpe?g)$/.test(e.value),this.fieldErrorMessage="Unsupported Image Format"},setDateOfBirthValidationValue({field:e}){this.isFieldValid=/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e.value),this.fieldErrorMessage="Incorrect Date of Birth"},setPatternForSettingPin({field:e}){this.isFieldValid=/^.{4}$/.test(e.value),this.fieldErrorMessage="Pin must be 4 character"},setMonthlyIncomeValidationValue({field:e}){this.isFieldValid=+e.value>=2e4,this.fieldErrorMessage="Not within range"},setAccountNumberValidationValue({field:e}){this.isFieldValid=/^[0-9]{10}$/.test(e.value),this.fieldErrorMessage="Invalid Account Number"},setValidatePurposeOfLoan({field:e}){this.isFieldValid=/^[a-zA-Z ]{8,}$/i.test(e.value),this.fieldErrorMessage="Purpose of Loan not descriptive"},setEmptyFieldValidationValue({field:e}){this.isFieldValid=/.+/.test(e.value)},setWithdrawalAmountValidationValue({field:e}){this.isFieldValid=+e.value>=100,this.fieldErrorMessage="Not within range"},setValidateTenorValue({field:e}){this.isFieldValid=+e.value>=1,this.fieldErrorMessage="Not within range"},setPatternForEmptyField({field:e}){this.isFieldValid=""!==e.value.trim()},setSelectElementValidationValue({field:e}){this.isFieldValid="null"!==e.value,this.fieldErrorMessage="You've not selected an option"},setAccountNameValidationValue({field:e}){this.isFieldValid=/[a-z]+ ([a-z]+ ?)+/i.test(e.value),this.fieldErrorMessage="Invalid Account Name"},setCheckElementValidationValue({field:e}){this.isFieldValid=e.checked,this.fieldErrorMessage="Check the box"},setBankNameValidationValue({field:e}){this.setPatternForEmptyField({field:e}),this.fieldErrorMessage="No Bank name"},validateField({field:e,fieldMessage:t}){new H({field:e,fieldMessage:t,isFieldValid:this.isFieldValid,fieldErrorMessage:this.fieldErrorMessage})}},B=function(e){const t=e.target.dataset.setFieldValidationValue;if(!t)return;const a=e.target;R[t]({field:a});const n=a.closest("div").querySelector("output.show-message");R.validateField({field:a,fieldMessage:n})},O=function(){const e=document.createElement("div");return e.classList.add("form-content>"),((e,t)=>{const a=t;let n=a._$litPart$;if(void 0===n){const e=null;a._$litPart$=n=new V(t.insertBefore(d(),e),e,void 0,{})}n._$AI(e)})(S`
    <form id="applicationForm" novalidate>
      <details class="account-details">
        <summary>
          Pay the sum of ₦9000 for your application form using the account details in the dropdown
        </summary>
        <p>Account Name: Akwapolycoop Society</p>
        <p>Account Number: 0940904904</p>
        <p>Bank: United Bank of Nigeria</p>
      </details>
      <!-- Personal Information Section -->
      <div class="section">
        <div class="section-title">
          <span class="section-icon">👤</span>
          Personal Information
        </div>
        <p class="section-description">
          Please provide your accurate personal details as a staff member of Akwa Ibom State
          Polytechnic
        </p>
        <div class="form-row">
          <div class="form-group">
            <label>First Name <span class="required">*</span></label>
            <input
              type="text"
              id="first-name"
              required
              placeholder="Enter your first name"
              pattern="^[a-zA-Z]{1,}$"
              data-set-field-validation-value="setNameValidationValue"
            />
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label>Last Name <span class="required">*</span></label>
            <input
              type="text"
              id="last-name"
              required
              placeholder="Enter your last name"
              pattern="^[a-zA-Z]{1,}$"
              data-set-field-validation-value="setNameValidationValue"
            />
            <output class="show-message"></output>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Date of Birth <span class="required">*</span></label>
            <input
              type="date"
              id="date-of-birth"
              id="date-of-birth"
              pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}$"
              data-set-field-validation-value="setDateOfBirthValidationValue"
              required
            />
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label for="lga">
              LGA
              <span class="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="lga"
              placeholder="Ibeno"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required
            />
            <output class="show-message"></output>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Gender <span class="required">*</span></label>
            <select
              id="gender"
              required
              data-set-field-validation-value="setSelectElementValidationValue"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label>Marital Status <span class="required">*</span></label>
            <select
              id="maritalStatus"
              data-set-field-validation-value="setSelectElementValidationValue"
              required
            >
              <option value="">Select Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            <output class="show-message"></output>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Phone Number <span class="required">*</span></label>
            <input
              type="tel"
              required
              placeholder="+234 XXX XXX XXXX"
              id="phone-number"
              placeholder="08153555726"
              pattern="^0?[0-9]{10}$"
              data-set-field-validation-value="setPhoneNumberValidationValue"
            />
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label>Email Address <span class="required">*</span></label>
            <input
              type="email"
              id="email"
              required
              placeholder="your.email@example.com"
              data-set-field-validation-value="setEmailValidationValue"
              pattern="^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$"
            />
            <output class="show-message"></output>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="nin">
              NIN
              <span class="required-asterisk">*</span>
            </label>
            <input
              type="number"
              id="nin"
              placeholder="xxxxxxxxxxx"
              pattern="^[0-9]{11}$"
              data-set-field-validation-value="setNINValidationValue"
              required
            />
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label for="state">
              State
              <span class="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="state"
              placeholder="Akwa Ibom"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required
            />
            <output class="show-message"></output>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group full-width">
            <label>Home Address <span class="required">*</span></label>
            <textarea
              required
              placeholder="Enter your complete home address"
              id="resident-address"
              pattern="(?=.* )(?=.*[a-zA-Z])(?=.*[0-9]).{20,}"
              data-set-field-validation-value="setAddressValidationValue"
            ></textarea>
            <output class="show-message"></output>
          </div>
        </div>
      </div>
      <!-- Staff Information Section -->

      <div class="section">
        <div class="section-title">
          <span class="section-icon">💼</span>
          Staff Information
        </div>
        <p class="section-description">
          Provide your employment details at Akwa Ibom State Polytechnic
        </p>

        <div class="form-row">
          <div class="form-group">
            <label>Staff ID Number <span class="required">*</span></label>
            <input
              type="text"
              id="staffId"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required
              placeholder="Enter your staff ID"
            />
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label>Department <span class="required">*</span></label>
            <input
              type="text"
              id="department"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required
              placeholder="Enter your department"
            />
            <output class="show-message"></output>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Designation/Position <span class="required">*</span></label>
            <input
              type="text"
              id="position"
              required
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              placeholder="e.g., Lecturer, Admin Officer"
            />
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label>Date of Employment <span class="required">*</span></label>
            <input
              type="date"
              id="employmentDate"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required
            />
            <output class="show-message"></output>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Employment Type <span class="required">*</span></label>
            <select
              id="employmentType"
              data-set-field-validation-value="setSelectElementValidationValue"
              required
            >
              <option value="">Select Type</option>
              <option value="permanent">Permanent</option>
              <option value="contract">Contract</option>
              <option value="temporary">Temporary</option>
            </select>
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label>Monthly Salary Range <span class="required">*</span></label>
            <select
              id="salaryRange"
              data-set-field-validation-value="setSelectElementValidationValue"
              required
            >
              <option value="">Select Range</option>
              <option value="50-100k">₦50,000 - ₦100,000</option>
              <option value="100-200k">₦100,000 - ₦200,000</option>
              <option value="200-300k">₦200,000 - ₦300,000</option>
              <option value="300k+">₦300,000 and above</option>
            </select>
            <output class="show-message"></output>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Fixed Deposit Amount<span class="required">*</span></label>
            <input
              type="text"
              id="fixedDepositAmount"
              required
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              placeholder="e.g., 40000"
            />
            <output class="show-message"></output>
          </div>
        </div>
      </div>

      <!-- Passport Upload Section -->
      <div class="section">
        <div class="section-title">
          <span class="section-icon">📸</span>
          Passport Photograph
        </div>
        <p class="section-description">
          Upload a recent passport-sized photograph (Maximum file size: 2MB, Format: JPEG, JPG, PNG)
        </p>

        <div class="form-group">
          <div class="file-upload-wrapper">
            <input
              type="file"
              id="passport"
              accept="image/*"
              id="passport"
              accept=".png,.jpg,.jpeg"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required
            />
            <label for="passport" class="file-upload-label">
              <div class="upload-icon">📷</div>
              <div class="upload-text">Click to upload your passport photograph</div>
              <div class="upload-hint">or drag and drop your image here</div>
            </label>
            <output class="show-message"></output>
          </div>
        </div>
      </div>

      <!-- Application Letter Section -->
      <div class="section">
        <div class="section-title">
          <span class="section-icon">📄</span>
          Application Letter
        </div>
        <p class="section-description">
          Upload your signed application letter (Maximum file size: 5MB, Format: JPEG, JPG, PNG)
        </p>
        <div class="info-box">
          <p>
            <strong>Note:</strong> Your application letter should be formally written and addressed
            to the Chairman, AKWAPOLYCO, stating your intention to join the cooperative society.
          </p>
        </div>
        <div class="form-group">
          <div class="file-upload-wrapper">
            <input
              type="file"
              id="applicationLetter"
              accept="image/*"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required
            />

            <label for="applicationLetter" class="file-upload-label">
              <div class="upload-icon">📝</div>
              <div class="upload-text">Click to upload your application letter</div>
              <div class="upload-hint">Accepted formats: JPEG, JPG, PNG</div>
            </label>
            <output class="show-message"></output>
          </div>
        </div>
      </div>

      <!-- Form Payment Proof -->
      <div class="section">
        <div class="section-title">
          <span class="section-icon">📝</span>
          Form Payment Proof
        </div>
        <p class="section-description">
          Upload your proof of form payment &#x20A6;9000 (Maximum file size: 5MB, Format: JPEG, JPG,
          PNG)
        </p>
        <div class="info-box">
          <p>
            <strong>Note:</strong>&#x20A6;4,000 will be used to open your account and &#x20A6;5,000
            is non-refundable
          </p>
        </div>
        <div class="form-group">
          <div class="file-upload-wrapper">
            <input
              type="file"
              id="formPaymentProof"
              accept="image/*"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required
            />

            <label for="formPaymentProof" class="file-upload-label">
              <div class="upload-icon">📝</div>
              <div class="upload-text">Click to upload your proof of payment</div>
              <div class="upload-hint">Accepted formats: JPEG, JPG, PNG</div>
            </label>
            <output class="show-message"></output>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">
          <span class="section-icon">✍️</span>
          Account Details
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="account-number">
              Account Number
              <span class="required-asterisk">*</span>
            </label>
            <input
              type="number"
              id="account-number"
              placeholder="8059054434"
              pattern="^[0-9]{10}$"
              data-set-field-validation-value="setAccountNumberValidationValue"
              required
            />
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label for="account-name">
              Account name
              <span class="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="account-name"
              placeholder="James Town"
              pattern="[A-Za-z]+ ([A-Za-z]+ ?)+"
              data-set-field-validation-value="setAccountNameValidationValue"
              required
            />
            <output class="show-message"></output>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="bank-name">
              Bank name
              <span class="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="bank-name"
              placeholder="Opay"
              min="1"
              data-set-field-validation-value="setBankNameValidationValue"
              required
            />
            <output class="show-message"></output>
          </div>

          <div class="form-group">
            <label for="r-number">
              R Number
              <span class="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="RNumber"
              placeholder="R2000xxxxx"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
              required
            />
            <output class="show-message"></output>
          </div>
        </div>
      </div>

      <!-- Guarantors Section -->
      <div class="section">
        <div class="section-title">
          <span class="section-icon">✍️</span>
          Guarantor Information
        </div>
        <p class="section-description">
          Provide details of two guarantors who are staff members of Akwa Ibom State Polytechnic
        </p>
        <div class="info-box">
          <p>
            <strong>Important:</strong> Both guarantors must be verified staff members of Akwa Ibom
            State Polytechnic. They will be contacted to confirm their willingness to stand as your
            guarantor.
          </p>
        </div>

        <!-- First Guarantor -->
        <div class="guarantor-card">
          <div class="guarantor-header">First Guarantor</div>
          <div class="form-row">
            <div class="form-group">
              <label>Full Name <span class="required">*</span></label>
              <input
                type="text"
                id="guarantor1Name"
                required
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
                placeholder="Enter guarantor's full name"
              />
              <output class="show-message"></output>
            </div>

            <div class="form-group">
              <label>Staff ID <span class="required">*</span></label>
              <input
                type="text"
                id="guarantor1StaffId"
                required
                placeholder="Enter staff ID"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
              />
              <output class="show-message"></output>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Department <span class="required">*</span></label>
              <input
                type="text"
                id="guarantor1Department"
                required
                placeholder="Enter department"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
              />
              <output class="show-message"></output>
            </div>

            <div class="form-group">
              <label>Position <span class="required">*</span></label>
              <input
                type="text"
                id="guarantor1Position"
                required
                placeholder="Enter position"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
              />
              <output class="show-message"></output>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Phone Number <span class="required">*</span></label>
              <input
                type="tel"
                id="guarantor1Phone"
                required
                placeholder="+234 XXX XXX XXXX"
                pattern="^[0-9]{10,11}$"
                data-set-field-validation-value="setPhoneNumberValidationValue"
              />
              <output class="show-message"></output>
            </div>

            <div class="form-group">
              <label>Email Address <span class="required">*</span></label>
              <input
                type="email"
                id="guarantor1Email"
                required
                pattern="^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$"
                data-set-field-validation-value="setEmailValidationValue"
                placeholder="guarantor@example.com"
              />
              <output class="show-message"></output>
            </div>
          </div>

          <div class="form-group">
            <label>Relationship to Applicant <span class="required">*</span></label>
            <input
              type="text"
              required
              id="guarantor1Relationship"
              placeholder="e.g., Colleague, Friend"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
            />
            <output class="show-message"></output>
          </div>
        </div>

        <!-- Second Guarantor -->
        <div class="guarantor-card">
          <div class="guarantor-header">Second Guarantor</div>

          <div class="form-row">
            <div class="form-group">
              <label>Full Name <span class="required">*</span></label>
              <input
                type="text"
                id="guarantor2Name"
                required
                placeholder="Enter guarantor's full name"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
              />
              <output class="show-message"></output>
            </div>

            <div class="form-group">
              <label>Staff ID <span class="required">*</span></label>
              <input
                type="text"
                id="guarantor2StaffId"
                required
                placeholder="Enter staff ID"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
              />
              <output class="show-message"></output>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Department <span class="required">*</span></label>
              <input
                type="text"
                id="guarantor2Department"
                required
                placeholder="Enter department"
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
              />
              <output class="show-message"></output>
            </div>

            <div class="form-group">
              <label>Position <span class="required">*</span></label>
              <input
                type="text"
                id="guarantor2Position"
                required
                pattern="^.{1,}$"
                data-set-field-validation-value="setEmptyFieldValidationValue"
                placeholder="Enter position"
              />
              <output class="show-message"></output>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Phone Number <span class="required">*</span></label>
              <input
                type="tel"
                id="guarantor2Phone"
                required
                placeholder="+234 XXX XXX XXXX"
                pattern="^0?[0-9]{10}$"
                data-set-field-validation-value="setPhoneNumberValidationValue"
              />
              <output class="show-message"></output>
            </div>

            <div class="form-group">
              <label>Email Address <span class="required">*</span></label>
              <input
                type="email"
                id="guarantor2Email"
                required
                placeholder="guarantor@example.com"
                data-set-field-validation-value="setEmailValidationValue"
                pattern="^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$"
              />
              <output class="show-message"></output>
            </div>
          </div>

          <div class="form-group">
            <label>Relationship to Applicant <span class="required">*</span></label>
            <input
              type="text"
              required
              placeholder="e.g., Colleague, Friend"
              id="guarantor2Relationship"
              pattern="^.{1,}$"
              data-set-field-validation-value="setEmptyFieldValidationValue"
            />
            <output class="show-message"></output>
          </div>
        </div>
      </div>

      <!-- Declaration Section -->
      <div class="section">
        <div class="section-title">
          <span class="section-icon">📋</span>
          Declaration
        </div>

        <div class="checkbox-group">
          <input
            type="checkbox"
            id="declaration"
            data-set-field-validation-value="setCheckElementValidationValue"
            required
          />
          <label for="declaration">
            I hereby declare that all information provided in this application form is true and
            accurate to the best of my knowledge. I understand that providing false information may
            lead to the rejection of my application or termination of membership.
            <span class="required">*</span>
          </label>
          <output class="show-message"></output>
        </div>

        <div class="checkbox-group">
          <input
            type="checkbox"
            id="terms"
            data-set-field-validation-value="setCheckElementValidationValue"
            required
          />
          <label for="terms">
            I agree to abide by the rules, regulations, and bylaws of the Akwa Ibom State
            Polytechnic Staff Cooperative Society (Akwapolycoop). <span class="required">*</span>
          </label>
          <output class="show-message"></output>
        </div>
      </div>

      <!-- Submit Section -->
      <div class="submit-section">
        <button type="button" class="submit-button btn-submit-application">
          Submit Application
        </button>
        <p style="color: #666;  font-size: 0.9rem">
          By submitting this form, you agree to our terms and conditions
        </p>
      </div>
    </form>
  `,e),e}();O.addEventListener("input",B);const W=O,Y=new EventTarget;let G;function j(e){const t=e.detail,a=t.form;G=t.functionToGetDataInIndexBD;const n=[...a.querySelectorAll("textarea"),...a.querySelectorAll("input")],i=a.querySelectorAll("output.show-message");new _({messages:i,inputs:n,runWhenAllFieldFillIsValid:G})}const z={storeNameInStore:["admin","loan-applicant-list"],interact(e,t){const a=indexedDB.open("akp-loan-tracker",35);a.onupgradeneeded=e=>{const t=e.target.result;z.storeNameInStore.forEach(e=>{this.createObjectStore({storeName:e},t)})},a.onsuccess=a=>{const n=a.target.result;this[t](e,n)}},createObjectStore({storeName:e},t){this.checkIfStoreHasName({storeName:e},t).name||t.createObjectStore(e,{keyPath:"id",autoIncrement:!0})},storeData({storeName:e,data:t,trueState:a,undefinedState:n},i){const s=i.transaction(e,"readwrite").objectStore(e).put(t);s.onsuccess=e=>{a(e.target.result)},s.onerror=()=>{n()}},isUserAlreadyAccountExist({storeName:e,getMethod:t,firstName:a,lastName:n,email:i,trueState:s,falseState:o},r){this.getData({storeName:e,getMethod:t,returnData:function(e){for(let t=0;t<e.length;t++){const o=e[t].membershipApplicationForm;if(o.firstName?.toLowerCase()===a.value?.toLowerCase()&&o.lastName?.toLowerCase()===n.value?.toLowerCase()||o.email?.toLowerCase()===i.value?.toLowerCase())return void s()}o()}},r)},modifyData({storeName:e,keyPathValue:t,newValue:a,firstKey:n,secondKey:i,uniqueID:s,uniqueIDKey:o,getMethod:r,trueState:l,undefinedState:d},c){this.getData({storeName:e,keyPathValue:t,getMethod:r,returnData:function(t){void 0!==t?(function({data:e,firstKey:t,secondKey:a,uniqueID:n,uniqueIDKey:i,newValue:s}){const o={String:(t,a)=>{e[t]=s[a][t]},Object:(t,n)=>{e[t][a[n]]=s[n][a[n]]},Array:(t,o)=>{e[t].find(e=>e[i]===n)[a[o]]=s[o][a[o]]}};t.forEach((t,a)=>{const n=Object.prototype.toString.call(e[t]).slice(8,-1);"Object"!==n&&"Array"!==n?o.String(t,a):o[n](t,a)})}({data:t,firstKey:n,secondKey:i,uniqueID:s,uniqueIDKey:o,newValue:a}),z.storeData({storeName:e,data:t,trueState:l,undefinedState:d},c)):d()}},c)},getData({storeName:e,keyPathValue:t,getMethod:a,returnData:n,undefinedState:i},s){if(!this.checkIfStoreHasName({storeName:e},s).name)return;const o=s.transaction(e,"readwrite").objectStore(e),r={getAll:()=>o.getAll(),get:()=>o.get(t)}[a]();r.onsuccess=e=>{const t=e.target.result;n(t)},r.onerror=()=>{i()}},deleteKey({storeName:e,keyPathValue:t,trueState:a,undefinedState:n},i){if(!this.checkIfStoreHasName({storeName:e},i).name)return;const s=i.transaction(e,"readwrite").objectStore(e).delete(t);s.onsuccess=()=>{a()},s.onerror=()=>{n()}},checkIfStoreHasName:({storeName:e},t)=>t.objectStoreNames.contains(e)?{name:!0}:{name:!1}},X=z,K=W.querySelector("form"),U=K.querySelector("#first-name"),J=K.querySelector("#last-name"),Q=K.querySelector("#email"),Z=K.querySelector("#gender"),ee=K.querySelector("#maritalStatus"),te=K.querySelector("#date-of-birth"),ae=K.querySelector("#resident-address"),ne=K.querySelector("#formPaymentProof"),ie=K.querySelector("#phone-number"),se=K.querySelector("#nin"),oe=K.querySelector("#state"),re=K.querySelector("#lga"),le=K.querySelector("#staffId"),de=K.querySelector("#department"),ce=K.querySelector("#fixedDepositAmount"),ue=K.querySelector("#position"),pe=K.querySelector("#passport"),me=K.querySelector("#employmentDate"),ve=K.querySelector("#employmentType"),fe=K.querySelector("#salaryRange"),he=K.querySelector("#applicationLetter"),ge=K.querySelector("#RNumber"),ye=K.querySelector("#account-number"),be=K.querySelector("#account-name"),we=K.querySelector("#bank-name"),Se=K.querySelector("#guarantor1Name"),xe=K.querySelector("#guarantor1StaffId"),Ae=K.querySelector("#guarantor1Department"),qe=K.querySelector("#guarantor1Position"),Pe=K.querySelector("#guarantor1Phone"),Ee=K.querySelector("#guarantor1Email"),De=K.querySelector("#guarantor1Relationship"),ke=K.querySelector("#guarantor2Name"),Me=K.querySelector("#guarantor2StaffId"),Ce=K.querySelector("#guarantor2Department"),Ve=K.querySelector("#guarantor2Position"),Ne=K.querySelector("#guarantor2Phone"),$e=K.querySelector("#guarantor2Email"),Fe=K.querySelector("#guarantor2Relationship"),Ie=K.querySelector(".btn-submit-application"),Le=new CustomEvent("all-field-valid",{detail:{form:K,functionToGetDataInIndexBD:function(){X.interact({storeName:"loan-applicant-list",getMethod:"getAll",firstName:U,lastName:J,email:Q,trueState:He,falseState:Re},"isUserAlreadyAccountExist")}}}),Te=({eventName:e="dialog-manager",text:t=null,closedByValue:a="any",contentKey:n="status"})=>new CustomEvent(e,{detail:{contentKey:n,closedByValue:a,text:t}}),_e={success:Te({text:"You form has been submitted. Under Review"}),showTakeLoan:Te({eventName:"custom-change-content",contentKey:"take-loan"}),userAlreadyExist:Te({text:"User Already Exist"})};function He(){alert("exist")}function Re(){const e=function(){const e=pe.files[0],t=new FileReader;t.readAsDataURL(e);const a={membershipApplicationForm:{}};return new Promise(e=>{t.onload=t=>{a.membershipApplicationForm.passport=t.target.result,e(a)}})}();e.then(e=>{const t=function(e){const t=he.files[0],a=new FileReader;return a.readAsDataURL(t),new Promise(t=>{a.onload=a=>{e.membershipApplicationForm.applicationLetter=a.target.result,t(e)}})}(e);t.then(e=>{const t=function(e){const t=ne.files[0],a=new FileReader;return a.readAsDataURL(t),new Promise(t=>{a.onload=a=>{e.membershipApplicationForm.formPaymentProof=a.target.result,t(e)}})}(e);t.then(e=>{var t;(t=e).membershipApplicationForm.dateAndTime=new Date,t.membershipApplicationForm.status="Pending",[U,J,Q,Z,le,de,ce,ue,ee,me,ve,fe,ge,ye,be,we,se,oe,re,ie,te,ae,Se,xe,Ae,qe,Pe,Ee,De,ke,Me,Ce,Ve,Ne,$e,Fe].forEach(e=>{var a;a=e,t.membershipApplicationForm[a.id]=a.value}),function(e){K.reset(),_.resetFieldValidity(K),X.interact({storeName:"loan-applicant-list",data:e,trueState:Be,undefinedState:Oe},"storeData")}(t)})})})}function Be(){Y.dispatchEvent(_e.success)}function Oe(){console.log("loan applicant data not stored")}const We=function(...e){return t=>e.reduce((e,t)=>t(e),t)},Ye=(e=>e.createElement("h4"))(document),Ge=e=>e.createElement("button"),je={modifyIndexdb:new CustomEvent("modify-indexdb"),calculateDividend:new CustomEvent("calculateDividend"),massDividend:new CustomEvent("mass-dividend"),massModifyIndexdb:new CustomEvent("mass-modify-indexdb"),logout:new CustomEvent("logout"),previousContentEvent:new CustomEvent("dialog-manager",{detail:{contentKey:"previousContent",closedByValue:"any"}}),manualCloseDialog:new CustomEvent("manual-close-dialog"),displayPreferredDepForm:new CustomEvent("dialog-manager",{detail:{contentKey:"depositPreferenceForm",closedByValue:"closerequest"}})},ze={logout:()=>{Y.dispatchEvent(je.logout)},modifyData:()=>{Y.dispatchEvent(je.modifyIndexdb)},massModifyData:()=>{Y.dispatchEvent(je.massModifyIndexdb)},massDividend:()=>{Y.dispatchEvent(je.massDividend)},calculateDividend:function(){Y.dispatchEvent(je.calculateDividend)}};function Xe(){return localStorage.getData({key:"action"})}function Ke(){const e=Xe().action;e&&ze[e]()}const Ue=We(Ge,e=>(e.classList.add("btn-cancel"),e),e=>(e.addEventListener("click",()=>{Y.dispatchEvent(je.manualCloseDialog),function(){const e=Xe();if(e){const t=e.firstKey;t&&"fixedDepositAmount"===t[0]&&Y.dispatchEvent(je.displayPreferredDepForm)}}()}),e),e=>(e.textContent="Cancel",e.type="button",e)),Je=We(Ge,e=>(e.classList.add("btn-yes"),e),e=>(e.addEventListener("click",Ke),e),e=>(e.textContent="Yes",e)),Qe=Ue(document),Ze=Je(document),et=We(e=>e.createElement("form"),e=>(e.setAttribute("method","dialog"),e),e=>(e.classList.add("form-option"),e),e=>(e.append(Ye),e),e=>(e.append(Ze),e),e=>(e.append(Qe),e))(document),tt=We(e=>e.createElement("h4"),e=>(e.classList.add("status"),e)),at=We(e=>e.createElement("form"),e=>(e.classList.add("form-status"),e),e=>(e.appendChild(nt),e)),nt=tt(document),it=at(document),st={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function ot(e){return(t={})=>{const a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const rt={date:ot({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:ot({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:ot({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},lt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function dt(e){return(t,a)=>{let n;if("formatting"===(a?.context?String(a.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,i=a?.width?String(a.width):t;n=e.formattingValues[i]||e.formattingValues[t]}else{const t=e.defaultWidth,i=a?.width?String(a.width):e.defaultWidth;n=e.values[i]||e.values[t]}return n[e.argumentCallback?e.argumentCallback(t):t]}}function ct(e){return(t,a={})=>{const n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(i);if(!s)return null;const o=s[0],r=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(r)?function(e,t){for(let a=0;a<e.length;a++)if(t(e[a]))return a}(r,e=>e.test(o)):function(e,t){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t(e[a]))return a}(r,e=>e.test(o));let d;return d=e.valueCallback?e.valueCallback(l):l,d=a.valueCallback?a.valueCallback(d):d,{value:d,rest:t.slice(o.length)}}}var ut;const pt={code:"en-US",formatDistance:(e,t,a)=>{let n;const i=st[e];return n="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n},formatLong:rt,formatRelative:(e,t,a,n)=>lt[e],localize:{ordinalNumber:(e,t)=>{const a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:dt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:dt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:dt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:dt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:dt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(ut={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const a=e.match(ut.matchPattern);if(!a)return null;const n=a[0],i=e.match(ut.parsePattern);if(!i)return null;let s=ut.valueCallback?ut.valueCallback(i[0]):i[0];return s=t.valueCallback?t.valueCallback(s):s,{value:s,rest:e.slice(n.length)}}),era:ct({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ct({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:ct({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ct({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ct({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let mt={};function vt(){return mt}Math.pow(10,8);const ft=6048e5,ht=Symbol.for("constructDateFrom");function gt(e,t){return"function"==typeof e?e(t):e&&"object"==typeof e&&ht in e?e[ht](t):e instanceof Date?new e.constructor(t):new Date(t)}function yt(e,t){return gt(t||e,e)}function bt(e){const t=yt(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return a.setUTCFullYear(t.getFullYear()),+e-+a}function wt(e,t){const a=yt(e,t?.in);return a.setHours(0,0,0,0),a}function St(e,t){const a=yt(e,t?.in);return function(e,t,a){const[n,i]=function(e,...t){const a=gt.bind(null,e||t.find(e=>"object"==typeof e));return t.map(a)}(a?.in,e,t),s=wt(n),o=wt(i),r=+s-bt(s),l=+o-bt(o);return Math.round((r-l)/864e5)}(a,function(e,t){const a=yt(e,t?.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}(a))+1}function xt(e,t){const a=vt(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,i=yt(e,t?.in),s=i.getDay(),o=(s<n?7:0)+s-n;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function At(e,t){return xt(e,{...t,weekStartsOn:1})}function qt(e,t){const a=yt(e,t?.in),n=a.getFullYear(),i=gt(a,0);i.setFullYear(n+1,0,4),i.setHours(0,0,0,0);const s=At(i),o=gt(a,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const r=At(o);return a.getTime()>=s.getTime()?n+1:a.getTime()>=r.getTime()?n:n-1}function Pt(e,t){const a=yt(e,t?.in),n=+At(a)-+function(e,t){const a=qt(e,t),n=gt(t?.in||e,0);return n.setFullYear(a,0,4),n.setHours(0,0,0,0),At(n)}(a);return Math.round(n/ft)+1}function Et(e,t){const a=yt(e,t?.in),n=a.getFullYear(),i=vt(),s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=gt(t?.in||e,0);o.setFullYear(n+1,0,s),o.setHours(0,0,0,0);const r=xt(o,t),l=gt(t?.in||e,0);l.setFullYear(n,0,s),l.setHours(0,0,0,0);const d=xt(l,t);return+a>=+r?n+1:+a>=+d?n:n-1}function Dt(e,t){const a=yt(e,t?.in),n=+xt(a,t)-+function(e,t){const a=vt(),n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=Et(e,t),s=gt(t?.in||e,0);return s.setFullYear(i,0,n),s.setHours(0,0,0,0),xt(s,t)}(a,t);return Math.round(n/ft)+1}function kt(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const Mt={y(e,t){const a=e.getFullYear(),n=a>0?a:1-a;return kt("yy"===t?n%100:n,t.length)},M(e,t){const a=e.getMonth();return"M"===t?String(a+1):kt(a+1,2)},d:(e,t)=>kt(e.getDate(),t.length),a(e,t){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];default:return"am"===a?"a.m.":"p.m."}},h:(e,t)=>kt(e.getHours()%12||12,t.length),H:(e,t)=>kt(e.getHours(),t.length),m:(e,t)=>kt(e.getMinutes(),t.length),s:(e,t)=>kt(e.getSeconds(),t.length),S(e,t){const a=t.length,n=e.getMilliseconds();return kt(Math.trunc(n*Math.pow(10,a-3)),t.length)}},Ct={G:function(e,t,a){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if("yo"===t){const t=e.getFullYear(),n=t>0?t:1-t;return a.ordinalNumber(n,{unit:"year"})}return Mt.y(e,t)},Y:function(e,t,a,n){const i=Et(e,n),s=i>0?i:1-i;return"YY"===t?kt(s%100,2):"Yo"===t?a.ordinalNumber(s,{unit:"year"}):kt(s,t.length)},R:function(e,t){return kt(qt(e),t.length)},u:function(e,t){return kt(e.getFullYear(),t.length)},Q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return kt(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return kt(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){const n=e.getMonth();switch(t){case"M":case"MM":return Mt.M(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return kt(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){const i=Dt(e,n);return"wo"===t?a.ordinalNumber(i,{unit:"week"}):kt(i,t.length)},I:function(e,t,a){const n=Pt(e);return"Io"===t?a.ordinalNumber(n,{unit:"week"}):kt(n,t.length)},d:function(e,t,a){return"do"===t?a.ordinalNumber(e.getDate(),{unit:"date"}):Mt.d(e,t)},D:function(e,t,a){const n=St(e);return"Do"===t?a.ordinalNumber(n,{unit:"dayOfYear"}):kt(n,t.length)},E:function(e,t,a){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){const i=e.getDay(),s=(i-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return kt(s,2);case"eo":return a.ordinalNumber(s,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){const i=e.getDay(),s=(i-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return kt(s,t.length);case"co":return a.ordinalNumber(s,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,a){const n=e.getDay(),i=0===n?7:n;switch(t){case"i":return String(i);case"ii":return kt(i,t.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,a){const n=e.getHours();let i;switch(i=12===n?"noon":0===n?"midnight":n/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,a){const n=e.getHours();let i;switch(i=n>=17?"evening":n>=12?"afternoon":n>=4?"morning":"night",t){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,a){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),a.ordinalNumber(t,{unit:"hour"})}return Mt.h(e,t)},H:function(e,t,a){return"Ho"===t?a.ordinalNumber(e.getHours(),{unit:"hour"}):Mt.H(e,t)},K:function(e,t,a){const n=e.getHours()%12;return"Ko"===t?a.ordinalNumber(n,{unit:"hour"}):kt(n,t.length)},k:function(e,t,a){let n=e.getHours();return 0===n&&(n=24),"ko"===t?a.ordinalNumber(n,{unit:"hour"}):kt(n,t.length)},m:function(e,t,a){return"mo"===t?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):Mt.m(e,t)},s:function(e,t,a){return"so"===t?a.ordinalNumber(e.getSeconds(),{unit:"second"}):Mt.s(e,t)},S:function(e,t){return Mt.S(e,t)},X:function(e,t,a){const n=e.getTimezoneOffset();if(0===n)return"Z";switch(t){case"X":return Nt(n);case"XXXX":case"XX":return $t(n);default:return $t(n,":")}},x:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"x":return Nt(n);case"xxxx":case"xx":return $t(n);default:return $t(n,":")}},O:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Vt(n,":");default:return"GMT"+$t(n,":")}},z:function(e,t,a){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Vt(n,":");default:return"GMT"+$t(n,":")}},t:function(e,t,a){return kt(Math.trunc(+e/1e3),t.length)},T:function(e,t,a){return kt(+e,t.length)}};function Vt(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),i=Math.trunc(n/60),s=n%60;return 0===s?a+String(i):a+String(i)+t+kt(s,2)}function Nt(e,t){return e%60==0?(e>0?"-":"+")+kt(Math.abs(e)/60,2):$t(e,t)}function $t(e,t=""){const a=e>0?"-":"+",n=Math.abs(e);return a+kt(Math.trunc(n/60),2)+t+kt(n%60,2)}const Ft=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},It=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},Lt={p:It,P:(e,t)=>{const a=e.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return Ft(e,t);let s;switch(n){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;default:s=t.dateTime({width:"full"})}return s.replace("{{date}}",Ft(n,t)).replace("{{time}}",It(i,t))}},Tt=/^D+$/,_t=/^Y+$/,Ht=["D","DD","YY","YYYY"];function Rt(e){return!(!((t=e)instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t))&&"number"!=typeof e||isNaN(+yt(e)));var t}const Bt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Wt=/^'([^]*?)'?$/,Yt=/''/g,Gt=/[a-zA-Z]/;function jt(e,t,a){const n=vt(),i=a?.locale??n.locale??pt,s=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=yt(e,a?.in);if(!Rt(r))throw new RangeError("Invalid time value");let l=t.match(Ot).map(e=>{const t=e[0];return"p"===t||"P"===t?(0,Lt[t])(e,i.formatLong):e}).join("").match(Bt).map(e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:zt(e)};if(Ct[t])return{isToken:!0,value:e};if(t.match(Gt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(l=i.localize.preprocessor(r,l));const d={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return l.map(n=>{if(!n.isToken)return n.value;const s=n.value;return(!a?.useAdditionalWeekYearTokens&&function(e){return _t.test(e)}(s)||!a?.useAdditionalDayOfYearTokens&&function(e){return Tt.test(e)}(s))&&function(e,t,a){const n=function(e,t,a){const n="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,a);if(console.warn(n),Ht.includes(e))throw new RangeError(n)}(s,t,String(e)),(0,Ct[s[0]])(r,s,i.localize,d)}).join("")}function zt(e){const t=e.match(Wt);return t?t[1].replace(Yt,"'"):e}const Xt=e=>e.createElement("div"),Kt=function(){const e=document.createElement("div");return e.classList.add("consultancy-container"),e.innerHTML='\n        <div class="calc-section income-section">\n            <h3 class="section-title">💰 Income Sources</h3>\n            \n            <div class="calc-card">\n                <div class="calc-label">Loan Interest Income</div>\n                <div class="calc-value">₦<span class="totalLoanInterest"></span></div>\n                <div class="calc-note">10% interest on all loans disbursed</div>\n            </div>\n\n            <div class="calc-card">\n                <div class="calc-label">Shop Gross Rent Income</div>\n                <div class="calc-value">₦<span class="shopGrossRent"></span></div>\n                <div class="calc-note">Monthly rental from cooperative property</div>\n            </div>\n\n            <div class="calc-card total-card">\n                <div class="calc-label">Total Income</div>\n                <div class="calc-value highlight">₦ <span class="totalIncome"></span></div>\n            </div>\n        </div>\n        \n        <div class="calc-section expense-section">\n            <h3 class="section-title">💸 Expenses</h3>\n            \n            <div class="calc-card">\n                <div class="calc-label">Office Expenses</div>\n                <div class="calc-value red">₦<span class="officeExpenses"></span></div>\n                <div class="calc-note">Stationery, supplies, loan processing costs</div>\n            </div>\n\n            <div class="calc-card">\n                <div class="calc-label">Shop Expenses</div>\n                <div class="calc-value red">₦<span class="shopExpenses"></span></div>\n                <div class="calc-note">Maintenance, repairs, utilities</div>\n            </div>\n\n            <div class="calc-card total-card">\n                <div class="calc-label">Total Expenses</div>\n                <div class="calc-value red">₦<span class="totalExpenses"></span></div>\n            </div>\n        </div>\n\n        \n        <div class="calc-section profit-section">\n            <h3 class="section-title">📈 Profit Breakdown</h3>\n            \n            <div class="calc-card">\n                <div class="calc-label">Loan Profit</div>\n                <div class="calc-formula">Loan Interest - Office Expenses</div>\n                <div class="calc-value">₦<span class="loanProfit"></span></div>\n            </div>\n\n            <div class="calc-card">\n                <div class="calc-label">Rent Profit</div>\n                <div class="calc-formula">Gross Rent - Shop Expenses</div>\n                <div class="calc-value">₦<span class="shopProfit"></span></div>\n            </div>\n\n            <div class="calc-card highlight-card">\n                <div class="calc-label">Net Surplus (Total Profit)</div>\n                <div class="calc-value highlight-big">₦<span class="totalProfit"></span></div>\n            </div>\n        </div>\n\n        \n        <div class="calc-section reserve-section">\n            <h3 class="section-title">🏦 Reserve Funds (Savings for Future)</h3>\n            \n            <div class="calc-card">\n                <div class="calc-label">Loan Reserve</div>\n                <div class="calc-formula">10% of Loan Profit</div>\n                <div class="calc-value">₦<span class="loanReserve"></span></div>\n            </div>\n\n            <div class="calc-card">\n                <div class="calc-label">Rent Reserve</div>\n                <div class="calc-formula">10% of Rent Profit</div>\n                <div class="calc-value">₦<span class="rentReserve"></span></div>\n            </div>\n\n            <div class="calc-card total-card">\n                <div class="calc-label">Total Reserve Fund</div>\n                <div class="calc-value">₦<span class="totalReserve"></span></div>\n            </div>\n        </div>\n\n        \n        <div class="calc-section distribute-section">\n            <h3 class="section-title">🎁 Funds Available for Dividend</h3>\n            \n            <div class="calc-card">\n                <div class="calc-label">Loan Distribution</div>\n                <div class="calc-formula">Loan Profit - Loan Reserve</div>\n                <div class="calc-value">₦<span class="loanDistributed"></span></div>\n            </div>\n\n            <div class="calc-card">\n                <div class="calc-label">Rent Distribution</div>\n                <div class="calc-formula">Rent Profit - Rent Reserve</div>\n                <div class="calc-value">₦<span class="rentDistributed"></span></div>\n            </div>\n\n            <div class="calc-card highlight-card">\n                <div class="calc-label">Total Distributable Fund</div>\n                <div class="calc-value highlight-big">₦<span class="totalDistributed"></span></div>\n            </div>\n        </div>\n\n        \n        <div class="calc-section pool-section">\n            <h3 class="section-title">🎯 Dividend Pool Allocation</h3>\n            \n            <div class="calc-card pool-card">\n                <div class="calc-label">Share Dividend Pool (60%)</div>\n                <div class="calc-note">For members who save (based on shares owned)</div>\n                <div class="calc-value highlight">₦<span class="sharedDividendPool"></span></div>\n            </div>\n\n            <div class="calc-card pool-card">\n                <div class="calc-label">Loan Incentive Pool (40%)</div>\n                <div class="calc-note">For members who borrow (based on loan amount)</div>\n                <div class="calc-value highlight">₦<span class="loanIncentivePool"></span></div>\n            </div>\n        </div>\n        \n        <div class="calc-section personal-section">\n            <h3 class="section-title">🌟 Your Personal Dividend</h3>\n            \n            <div class="member-stats">\n                <div class="stat-item">\n                    <div class="stat-label">Your Shares</div>\n                    <div class="stat-value memberShares"></div>\n                </div>\n                <div class="stat-item">\n                    <div class="stat-label">Your Loan Amount</div>\n                    <div class="stat-value">₦<span class="loanAmount"></span></div>\n                </div>\n            </div>\n            \n            <div class="member-stats">\n                <div class="stat-item">\n                    <div class="stat-label">Total Shares</div>\n                    <div class="stat-value totalShares"></div>\n                </div>\n                <div class="stat-item">\n                    <div class="stat-label">Total Loan Amount</div>\n                    <div class="stat-value">₦<span class="totalLoanAmount"></span></div>\n                </div>\n            </div>\n\n            <div class="calc-card dividend-card">\n                <div class="calc-label">Your Share Dividend</div>\n                <div class="calc-formula">(Your Shares ÷ Total Shares) × Share Pool</div>\n                <div class="calc-value green">₦<span class="memberShareDividend"></span></div>\n            </div>\n\n            <div class="calc-card dividend-card">\n                <div class="calc-label">Your Loan Incentive</div>\n                <div class="calc-formula">(Your Loan ÷ Total Loans) × Loan Pool</div>\n                <div class="calc-value green">₦<span class="memberLoanIncentive"></span></div>\n            </div>\n\n            <div class="calc-card final-card">\n                <div class="calc-label">YOUR TOTAL DIVIDEND</div>\n                <div class="calc-value totalDividendSection">₦<span class="totalLoanDividend"></span></div>\n            </div>\n        </div>\n    ',e}(),Ut=function(){const e=document.createElement("div");return e.innerHTML='\n  <label>Tick when sent</label>\n  <input type="checkbox" class="dividend-marker" data-db-first-key="isDividendPaid" />\n  ',e}(),Jt=document.createElement("p"),Qt=Ut.querySelector(".dividend-marker"),Zt=document.createElement("div"),ea=We(Xt,e=>(e.classList.add("profile-container"),e),e=>(e.innerHTML='\n    \x3c!-- Header --\x3e\n    <div class="header">\n        <div class="header-content">\n            <div>\n                <h1>Member Profile</h1>\n                <h5>📊 FINANCIAL CONSULTANCY</h5>\n                <details class="consultancy-section basic-info">\n                  <summary>BASIC INFO</summary>\n                  <p>MEMBER ID: <span class="membershipID"></span></p> \n                  <p>FIXED MONTHLY DEPOSIT AMOUNT: <span class="fixed-deposit-amount"></span></p> \n                  <p>TOTAL DEPOSIT: <span class="total-deposit"></span></p> \n                </details>\n\n                <details class="consultancy-section">\n                  <summary>DETAIL INFO</summary>\n                  <div class="detail-info">\n                  </div>\n                </details>\n\n            </div>\n            </div>\n            \n            <div class="date-box">\n              <p class="date-box-label">Application Date/Time</p>\n              <p class="date-box-value" id="application-date"></p>\n              <p class="date-box-value" id="application-time"></p>\n            </div>\n    </div>\n\n    <div class="profile-picture-box">\n        <img class="passport"  alt="Profile Picture"/>\n    </div>\n    \n    \x3c!-- Content --\x3e\n    <div class="content">\n        \x3c!-- Applicant Information --\x3e\n        <div class="section">\n            <div class="section-header">\n                <div class="icon-box blue">\n                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>\n                    </svg>\n                </div>\n                <h2>Member Information</h2>\n            </div>\n    \n                <div class="grid">\n                <div class="field">\n                    <label>Staff ID</label>\n                    <div class="field-value staffId"></div>\n                </div>\n                <div class="field">\n                    <label>First Name</label>\n                    <div class="field-value first-name">Chukwudi</div>\n                </div>\n                <div class="field">\n                    <label>Last Name</label>\n                    <div class="field-value last-name">Okonkwo</div>\n                </div>\n                <div class="field">\n                    <label>Email Address</label>\n                    <div class="field-value email">\n                        <svg class="field-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>\n                        </svg>\n                        chukwudi.okonkwo@email.com\n                    </div>\n                </div>\n                <div class="field">\n                    <label>Phone Number</label>\n                    <div class="field-value phone-number">+234 803 456 7890</div>\n                </div>\n                <div class="field">\n                    <label>Date of Birth</label>\n                    <div class="field-value date-of-birth">\n                        <svg class="field-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\n                        </svg>\n                        3/15/1985\n                    </div>\n                </div>\n            \n                <div class="field">\n                    <label>State</label>\n                    <div class="field-value state">\n                        <svg class="field-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>\n                        </svg>\n                        Lagos\n                    </div>\n                </div>\n                <div class="field">\n                    <label>LGA</label>\n                    <div class="field-value lga"></div>\n                </div>\n                <div class="field ">\n                    <label>Department</label>\n                    <div class="field-value department"></div>\n                </div>\n                <div class="field ">\n                    <label>Employment Date</label>\n                    <div class="field-value employmentDate"></div>\n                </div>\n                <div class="field ">\n                    <label>Employment Type</label>\n                    <div class="field-value employmentType"></div>\n                </div>\n                <div class="field ">\n                    <label>Salary Range</label>\n                    <div class="field-value salaryRange"></div>\n                </div>\n                 <div class="field full-width">\n                    <label>Residential Address</label>\n                    <div class="field-value resident-address"></div>\n                </div>\n            </div>\n        </div>\n    \n        \x3c!-- Bank Details --\x3e\n        <div class="section">\n            <div class="section-header">\n                <div class="icon-box green">\n                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>\n                    </svg>\n                </div>\n                <h2>Bank Details</h2>\n            </div>\n    \n            <div class="grid">\n                <div class="field">\n                    <label>Bank Name</label>\n                    <div class="field-value bank-name">First Bank of Nigeria</div>\n                </div>\n                <div class="field">\n                    <label>Account Number</label>\n                    <div class="field-value account-number">\n                        <svg class="field-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>\n                        </svg>\n                        0123456789\n                    </div>\n                </div>\n                <div class="field ">\n                    <label>Account Name</label>\n                    <div class="field-value account-name">Chukwudi Okonkwo</div>\n                </div>\n                <div class="field">\n                    <label>RNumber</label>\n                    <div class="field-value RNumber"></div>\n                </div>\n            </div>\n\n            <div>\n              <details>\n               <summary>Application Letter</summary>\n               <img class="application-letter" src="" alt="Application Letter" />\n              </details>\n            </div>\n           \n            <div>\n              <details>\n               <summary>Form Payment Proof</summary>\n               <img class="form-payment-proof" src="" alt="Form Payment Proof" />\n              </details>\n            </div>\n        </div>\n    \n        \x3c!-- Guarantor Information (first) --\x3e\n          <div class="section">\n            \n            <div class="section-header">\n                <div class="icon-box purple">\n                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>\n                    </svg>\n                </div>\n                <h2>Guarantor (First)</h2>\n            </div>\n    \n            <div class="grid">\n              <div class="field">\n                  <label>Staff ID</label>\n                  <div class="field-value guarantor1StaffId"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Full Name</label>\n                  <div class="field-value guarantor1Name"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Email</label>\n                  <div class="field-value guarantor1Email"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Phone Number</label>\n                  <div class="field-value guarantor1Phone"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Department</label>\n                  <div class="field-value guarantor1Department"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Position</label>\n                  <div class="field-value guarantor1Position"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Relationship</label>\n                  <div class="field-value guarantor1Relationship"></div>\n              </div>\n    \n            </div>\n        </div>\n          \n        \x3c!-- Guarantor Information (second) --\x3e\n        <div class="section">\n            \n            <div class="section-header">\n                <div class="icon-box purple">\n                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>\n                    </svg>\n                </div>\n                <h2>Guarantor (Second)</h2>\n            </div>\n    \n            <div class="grid">\n              <div class="field">\n                  <label>Staff ID</label>\n                  <div class="field-value guarantor2StaffId"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Full Name</label>\n                  <div class="field-value guarantor2Name"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Email</label>\n                  <div class="field-value guarantor2Email"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Phone Number</label>\n                  <div class="field-value guarantor2Phone"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Department</label>\n                  <div class="field-value guarantor2Department"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Position</label>\n                  <div class="field-value guarantor2Position"></div>\n              </div>\n              \n              <div class="field">\n                  <label>Relationship</label>\n                  <div class="field-value guarantor2Relationship"></div>\n              </div>\n    \n            </div>\n        </div>\n    </div>\n    \n    \x3c!-- Footer --\x3e\n    <div class="footer">\n        \n        <div>\n            <h3 class="status-title">Status:</h3>\n            <span class="status"></span>\n        </div>\n        </div>\n        ',e)),ta=We(Xt,function(e){return e.innerHTML='\n    <div class="option-key-section">\n        <button data-db-first-key="membershipApplicationForm" data-option-key="approveOption" data-status="Approve">Approve</button>\n        <button data-db-first-key="membershipApplicationForm" data-option-key="declineOption" data-status="Decline">Decline</button>\n    </div>\n    ',e});let aa;const na=Kt.querySelector(".totalLoanInterest"),ia=Kt.querySelector(".shopGrossRent"),sa=Kt.querySelector(".totalIncome"),oa=Kt.querySelector(".officeExpenses"),ra=Kt.querySelector(".shopExpenses"),la=Kt.querySelector(".totalExpenses"),da=Kt.querySelector(".loanProfit"),ca=Kt.querySelector(".shopProfit"),ua=Kt.querySelector(".totalProfit"),pa=Kt.querySelector(".loanReserve"),ma=Kt.querySelector(".rentReserve"),va=Kt.querySelector(".totalReserve"),fa=Kt.querySelector(".loanDistributed"),ha=Kt.querySelector(".rentDistributed"),ga=Kt.querySelector(".totalDistributed"),ya=Kt.querySelector(".sharedDividendPool"),ba=Kt.querySelector(".loanIncentivePool"),wa=Kt.querySelector(".memberShares"),Sa=Kt.querySelector(".loanAmount"),xa=Kt.querySelector(".totalShares"),Aa=Kt.querySelector(".totalLoanAmount"),qa=Kt.querySelector(".memberShareDividend"),Pa=Kt.querySelector(".memberLoanIncentive"),Ea=Kt.querySelector(".totalLoanDividend"),Da=Kt.querySelector(".totalDividendSection"),ka=ea(document),Ma=ta(document),Ca=ka.querySelector(".footer"),Va=()=>{const e=localStorage.getData({key:"action"});return e?.id},Na=e=>{const t=Va(),{status:a}=(e=>{const t=e.target;return{status:t.getAttribute("data-status"),firstKey:t.getAttribute("data-db-first-key")}})(e),n=function(e){return`MEM${(new Date).getFullYear()}0000${e}`}(t),i=function(){const e=[],t=Va(),a={dateAndTime:new Date,status:"Approve",depositAmount:4e3,depositAmountDynamic:4e3,depositID:`DEP${t}-000`,adminDeposit:!0};return e.push(a),e}(),s={key:"action",data:{action:"modifyData",id:t,value:[{status:a},{deposit:i}],firstKey:["membershipApplicationForm","deposit"],secondKey:["status","deposit"]}};return function(e,t,a){"Approve"===t&&(e.data.firstKey.push("membershipApplicationForm","isMemberNew"),e.data.secondKey.push("membershipID"),e.data.value.push({membershipID:a},{isMemberNew:!0}))}(s,a,n),s},$a=e=>{localStorage.setData(e)},Fa=e=>new CustomEvent("dialog-manager",{detail:{contentKey:"question",closedByValue:"any",text:e}}),Ia={approve:Fa("approve the Applicant Form?"),decline:Fa("decline the Applicant Form?")},La={approveOption:()=>{Y.dispatchEvent(Ia.approve)},declineOption:()=>{Y.dispatchEvent(Ia.decline)}},Ta=({eventName:e="dialog-manager"})=>new CustomEvent(e,{detail:{contentKey:"profile",closedByValue:"any",size:"big"}}),_a={profile:Ta({}),modifyIndexdb:Ta({eventName:"modify-indexdb"})},Ha=ka.querySelector(".detail-info"),Ra=ka.querySelector("#application-date"),Ba=ka.querySelector("#application-time"),Oa=ka.querySelector(".passport"),Wa=ka.querySelector(".staffId"),Ya=ka.querySelector(".first-name"),Ga=ka.querySelector(".last-name"),ja=ka.querySelector(".email"),za=ka.querySelector(".phone-number"),Xa=ka.querySelector(".date-of-birth"),Ka=ka.querySelector(".resident-address"),Ua=ka.querySelector(".fixed-deposit-amount"),Ja=ka.querySelector(".bank-name"),Qa=ka.querySelector(".account-number"),Za=ka.querySelector(".account-name"),en=ka.querySelector(".RNumber"),tn=ka.querySelector(".application-letter"),an=ka.querySelector(".form-payment-proof"),nn=ka.querySelector(".department"),sn=ka.querySelector(".employmentDate"),on=ka.querySelector(".employmentType"),rn=ka.querySelector(".salaryRange"),ln=ka.querySelector(".status"),dn=ka.querySelector(".state"),cn=ka.querySelector(".lga"),un=ka.querySelector(".membershipID"),pn=ka.querySelector(".total-deposit"),mn=ka.querySelector(".guarantor1StaffId"),vn=ka.querySelector(".guarantor1Name"),fn=ka.querySelector(".guarantor1Email"),hn=ka.querySelector(".guarantor1Phone"),gn=ka.querySelector(".guarantor1Department"),yn=ka.querySelector(".guarantor1Position"),bn=ka.querySelector(".guarantor1Relationship"),wn=ka.querySelector(".guarantor2StaffId"),Sn=ka.querySelector(".guarantor2Name"),xn=ka.querySelector(".guarantor2Email"),An=ka.querySelector(".guarantor2Phone"),qn=ka.querySelector(".guarantor2Position"),Pn=ka.querySelector(".guarantor2Department"),En=ka.querySelector(".guarantor2Relationship"),Dn=()=>{console.log("Error getting data")},kn={Pending:()=>Ca.append(Ma),Approve:e=>{Ua.textContent=`₦${e.fixedDepositAmount}`,un.textContent=e.membershipID},Decline:()=>{un.textContent="Decline",Ua.textContent="Decline"}};function Mn(e){if(e.deposit)return e.deposit.reduce((e,t)=>"Approve"===t.status?e+t.depositAmount:e,0)}function Cn(e){aa=e;const t=e.membershipApplicationForm,a=jt(t.dateAndTime,"yyyy-MM-dd"),n=jt(t.dateAndTime,"HH:mm:ss");Ra.textContent=a,Ba.textContent=n,Oa.src=t.passport,Wa.textContent=t.staffId,Ya.textContent=t["first-name"],Ga.textContent=t["last-name"],ja.textContent=t.email,dn.textContent=t.state,cn.textContent=t.lga,za.textContent=t["phone-number"],Xa.textContent=t["date-of-birth"],Ka.textContent=t["resident-address"],Qa.textContent=t["account-number"],Za.textContent=t["account-name"],Ja.textContent=t["bank-name"],en.textContent=t.RNumber,tn.src=t.applicationLetter,an.src=t.formPaymentProof,nn.textContent=t.department,sn.textContent=t.employmentDate,on.textContent=t.employmentType,rn.textContent=t.salaryRange,ln.textContent=t.status,mn.textContent=t.guarantor1StaffId,vn.textContent=t.guarantor1Name,fn.textContent=t.guarantor1Email,hn.textContent=t.guarantor1Phone,gn.textContent=t.guarantor1Department,yn.textContent=t.guarantor1Position,bn.textContent=t.guarantor1Relationship,wn.textContent=t.guarantor2StaffId,Sn.textContent=t.guarantor2Name,xn.textContent=t.guarantor2Email,An.textContent=t.guarantor2Phone,qn.textContent=t.guarantor2Position,Pn.textContent=t.guarantor2Department,En.textContent=t.guarantor2Relationship,Ma.remove(),Ha.innerHTML="",un.textContent="Pending",Ua.textContent="Pending",Qt.checked=!1,pn.textContent="Pending",Ut.remove(),Zt.remove(),kn[t.status](t),function(e){const t=localStorage.getData({key:"action"});"Pending"!==e.membershipApplicationForm.status&&(t.action?(Da.after(Ut),Qt.checked=e.isDividendPaid):(Zt.textContent=e.isDividendPaid?"Sent✅":"Not sent🤦‍♂️",Da.after(Zt)),pn.textContent=`₦${Mn(e)}`||"₦0")}(e),localStorage.getData({key:"isCalculateDividend"})?X.interact({storeName:"loan-applicant-list",getMethod:"getAll",returnData:Nn,undefineState:$n},"getData"):(Jt.textContent="Your dividend has not been calculated",Ha.append(Jt)),Y.dispatchEvent(_a.profile)}function Vn(e){return localStorage.getData({key:e})}function Nn(e){let t,a,n,i,s,o,r,l,d,c,u,p,m,v,f,h,g,y,b,w,S,x=0,A=0,q=0,P=0;!function(){for(let t=0;t<e.length;t++){const a=e[t],n=a.deposit,i=a.loan;if(n)for(let e=0;e<n.length;e++){const t=n[e];"Approve"===t.status&&(A+=t.depositAmount)}if(i)for(let e=0;e<i.length;e++){const t=i[e];if("Approve"===t.status){if(P+=t.loanAmount,!t.loanInterest)continue;x+=t.loanInterest}}}na.textContent=x}(),o=Vn("storeGrossRentAmount"),ia.textContent=o,a=x+ +o,sa.textContent=a,Ha.append(Kt),function(){const e=Vn("office-expenses");n=e.reduce((e,t)=>e+ +t.amount,0),oa.textContent=n}(),function(){const e=Vn("shop-expenses");i=e.reduce((e,t)=>e+ +t.amount,0),ra.textContent=i}(),la.textContent=n+i,s=Math.round(100*(x-n))/100,da.textContent=s,r=Math.round(100*(o-i))/100,ca.textContent=r,l=s+r,ua.textContent=l,function(){const e=.1*s;d=e<=0?0:e,pa.textContent=d}(),function(){const e=.1*r;c=e<=0?0:e,ma.textContent=c}(),u=d+c,va.textContent=u<=0?0:u,function(){const e=s-d;p=e<=0?0:e,fa.textContent=p}(),function(){const e=r-c;m=e<=0?0:e,ha.textContent=m}(),v=p+m,ga.textContent=v,h=Math.round(.6*v*100)/100,ya.textContent=h,g=Math.round(.4*v*100)/100,ba.textContent=g,q=Mn(aa),t=q/100,wa.textContent=t,function(){const e=aa.loan;y=e?e.reduce((e,t)=>"Approve"===t.status?e+t.loanAmount:e,0):0,Sa.textContent=y}(),f=A/100,xa.textContent=f,Aa.textContent=P,b=Math.round(t/f*h*10)/10,qa.textContent=b,w=Math.round(y/P*g*10)/10,Pa.textContent=w,S=Math.round(b+10*w)/10,Ea.textContent=S||0}function $n(){console.log("Error!!!")}const Fn=e=>({key:"action",data:{action:"modifyData",id:Va(),value:[{isDividendPaid:Qt.checked}],firstKey:["isDividendPaid"]}});Y.addEventListener("profile",function(){const{id:e}=localStorage.getData({key:"action"});X.interact({storeName:"loan-applicant-list",getMethod:"get",keyPathValue:+e,returnData:Cn,undefineState:Dn},"getData")}),Ma.addEventListener("click",function(e){e.target.dataset.dbFirstKey&&We(Na,$a)(e)}),Ma.addEventListener("click",function(e){const t=e.target.dataset.optionKey;t&&La[t]()}),Qt.addEventListener("change",function(e){e.target.dataset.dbFirstKey&&(We(Fn,$a)(e),Y.dispatchEvent(_a.modifyIndexdb))});const In=ka,Ln=e.p+"acf5f6950198c56996bc.svg",Tn=e.p+"e9fd8f5f4d3ad3d4376e.svg",_n=function(){const e=document.createElement("form");return e.method="dialog",e.innerHTML='\n     \x3c!-- Header --\x3e\n     <div class="proof-payment-header">\n         <h1>Date of Payment</h1>\n         <button class="close-btn">✕</button>\n   \n         </div>\n   \n     <div class="proof-payment-body">\n       \x3c!--<div class="amount-deposit-body">\n           <p>Amount</p>\n           <p class="amount-deposit"></p>\n       </div> --\x3e\n        <img src="" alt="Proof of Payment" class="proof-of-payment-preview">\n        <div class="proof-payment-date-section">\n            <div class="field">\n                <label>Date</label>\n                <div class="field-value date-of-payment">+234 803 456 7890</div>\n            <div class="field">\n                <label>Time</label>\n                <div class="field-value time-of-payment">+234 803 456 7890</div>\n            </div>    \n        \n     </div>\n     ',e.classList.add("proof-of-payment"),e}(),Hn={underReviewProofOfPayment:(({text:e=null,closedByValue:t="any",contentKey:a="status"})=>new CustomEvent("dialog-manager",{detail:{contentKey:a,closedByValue:t,text:e}}))({text:"Your Withdrawal is under review",contentKey:"status"})},Rn=_n.querySelector(".proof-of-payment-preview"),Bn=_n.querySelector(".date-of-payment"),On=_n.querySelector(".time-of-payment"),Wn=()=>{console.log("Error getting data")},Yn=()=>localStorage.getData({key:"action"}),Gn=e=>{const{withdrawalID:t}=Yn(),a=e.withdrawal.find(e=>e.withdrawalID===t);if(!a.actionDate)return void Y.dispatchEvent(Hn.underReviewProofOfPayment);const n=jt(a.actionDate,"yyyy-MM-dd"),i=jt(a.actionDate,"HH:mm:ss");Rn.src="Approve"===a.status?Ln:Tn,Bn.textContent=n,On.textContent=i,zn()},jn={proof:new CustomEvent("dialog-manager",{detail:{contentKey:"proof",closedByValue:"any",text:undefined}})};const zn=()=>{Y.dispatchEvent(jn.proof)};Y.addEventListener("proof",function(){const{id:e}=Yn();X.interact({storeName:"loan-applicant-list",getMethod:"get",keyPathValue:+e,returnData:Gn,undefineState:Wn},"getData")});const Xn=function(){const e=document.createElement("form");return e.novalidate,e.innerHTML='\n    <div class="deposit-container">\n        <div class="header">\n            <h1>Deposit Information</h1>\n            <p>Complete your deposit details to proceed with your loan application</p>\n        </div>\n\n        <div class="form-content">\n            <div class="info-box">\n                <strong>📋 Important:</strong>\n                Please ensure all documents are clear and legible for faster verification.\n            </div>\n\n            <form id="depositForm">\n                <div class="form-group">\n                    <label for="depositAmount">\n                        Deposit Amount\n                        <div class="label-hint">Enter the amount you wish to deposit</div>\n                    </label>\n                    <div class="input-wrapper">\n                        <span class="currency-symbol">N</span>\n                        <input \n                            type="number" \n                            id="depositAmount" \n                            placeholder="5000" \n                            step="0.01"\n                            min="100"\n                            data-set-field-validation-value="setWithdrawalAmountValidationValue" \n                            min="0"\n                            required\n                        >\n                        <output id="deposit-amount-message" class="show-message"></output>\n                    </div>\n                </div>\n\n                <div class="form-group">\n                    <label>\n                        Proof of Payment\n                        <div class="label-hint">Upload a clear image or document as proof</div>\n                    </label>\n                    <div class="upload-area" id="uploadArea">\n                        <div class="upload-icon">📸</div>\n                        <div class="upload-text">\n                            <h3>Click to upload or drag and drop</h3>\n                            <p>Your proof of payment document</p>\n                            <div class="file-formats">PNG, JPG, PDF up to 10MB</div>\n                        </div>\n                        <input \n                            type="file" \n                            id="proof-of-payment" \n                            data-set-field-validation-value="setPassportValidationValue"\n                            accept=".png,.jpg,.jpeg,.pdf"\n                            required\n                        >\n                        <output id="proof-of-payment-message" class="show-message"></output>\n                    </div>\n                    <div class="file-preview-container" >\n                        <img class="file-preview"  src="" />\n                        <p class="fileName">Your Document Preview will display here.</p>\n                    </div>\n                </div>\n\n                <div class="form-actions">\n                    \x3c!-- <button  class="btn btn-cancel">Cancel</button> --\x3e\n                    <button type="button" class="btn btn-submit">Submit Deposit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    ',e.classList.add("deposit-form"),e.addEventListener("input",B),e}(),Kn=Xn.querySelector("#proof-of-payment"),Un=Xn.querySelector(".file-preview"),Jn=Xn.querySelector(".fileName"),Qn=Xn.querySelector(".btn-submit"),Zn=Xn.querySelector("#depositAmount");function ei(e){const t=function(){const e=Kn.files;if(Un.src="",Jn.textContent="",0===e.length)return{paymentProof:!1};const t=e[0];Jn.textContent=e[0].name;const a=new FileReader;return a.readAsDataURL(t),{paymentProof:a}}();t.paymentProof&&function({reader:e,data:t}){e.onload=e=>{t.deposit||(t.deposit=[]),t.deposit.push({proofOfPayment:e.target.result}),function(e){const t=e.deposit.length-1,a=e.deposit[t];a.dateAndTime=new Date,a.status="Pending",a.depositAmount=+Zn.value,a.depositAmountDynamic=+Zn.value,a.depositID=`DEP${e?.id}-00${t}`,function(e){ni(),X.interact({storeName:"loan-applicant-list",data:e,trueState:ai,undefinedState:ti},"storeData")}(e)}(t)}}({reader:t.paymentProof,data:e})}const ti=()=>{console.log("Deposit data not stored")};function ai(){Y.dispatchEvent(ri.successDeposit)}function ni(){Un.src="",Jn.textContent="Your Document Preview will display here.",Xn.reset(),_.resetFieldValidity(Xn)}const ii=new CustomEvent("all-field-valid",{detail:{form:Xn,functionToGetDataInIndexBD:function(){const e=di();li[e?.action](e)}}}),si=()=>{console.log("Error getting data")},oi=({text:e,closedByValue:t="any"})=>new CustomEvent("dialog-manager",{detail:{contentKey:"status",closedByValue:t,text:e}}),ri={failDepositApprove:oi({text:"Approve deposit amount does not match Loan Applicant deposit amount"}),failDeposit:oi({text:"Deposit amount must not be less than your deposit preference"}),successDeposit:oi({text:"Your deposit has been submitted. Under Review"}),modifyIndexdb:new CustomEvent("modify-indexdb"),manualCloseDialog:new CustomEvent("manual-close-dialog")};const li={deposit:()=>(e=>{const t=localStorage.getData({key:"recent-loan-applicant"}),a=t?.id;X.interact({storeName:"loan-applicant-list",keyPathValue:a,getMethod:"get",returnData:e,undefinedState:si},"getData")})(ci),modifyData:function(e){const t=e.value.find(e=>e.outstandingBalance).outstandingBalance;+Zn.value===t?function(){const e=Kn.files[0],t=new FileReader;t.readAsDataURL(e),t.onload=e=>{const t=di();t.value.push({adminProofOfPayment:e.target.result}),function(e){var t;e.firstKey.push("takeLoan"),e.secondKey.push("adminProofOfPayment"),t={key:"action",data:e},localStorage.setData(t),ni(),Y.dispatchEvent(ri.modifyIndexdb),Y.dispatchEvent(ri.manualCloseDialog)}(t)}}():(Y.dispatchEvent(ri.failDepositApprove),ni())}};function di(){return localStorage.getData({key:"action"})}function ci(e){+Zn.value<+e.depositPreference?(Y.dispatchEvent(ri.failDeposit),ni()):ei(e)}Qn.addEventListener("click",function(){Y.dispatchEvent(ii)});const ui=function(){const e=document.createElement("div");return e.classList.add("deposit-preference-form"),e.innerHTML='\n        <div class="form-header">\n            <h1>Withdrawal Pin</h1>\n            <p>Please set your withdrawal pin</p>\n        </div>\n\n        <form class="preferred-deposit-form" id="depositForm" novalidate>\n\n            <div class="withdrawal-pin">\n              <label for="withdrawal-pin">\n                Withdrawal Pin\n                <span class="required-asterisk">*</span>\n              </label>\n              <input\n                type="password"\n                id="withdrawal-pin"\n                placeholder="e.g 9182"\n                pattern="^.{4}$"\n                data-set-field-validation-value\n                required\n              />\n              <output id="withdrawal-pin-message" class="show-message"></output>\n            </div>\n\n           \n            <div class="confirm-withdrawal-pin">\n              <label for="confirm-withdrawal-pin">\n                Confirm Withdrawal Pin\n                <span class="required-asterisk">*</span>\n              </label>\n              <input\n                type="password"\n                id="confirm-withdrawal-pin"\n                placeholder="e.g 9182"\n                pattern="^.{4}$"\n                data-set-field-validation-value\n                required\n              />\n              <output id="confirm-withdrawal-pin-message" class="show-message"></output>\n            </div>\n\n            <button type="button" class="btn-submit-deposit-preference">Set Pin</button>\n        </form>',e}();ui.addEventListener("input",B);const pi=ui,mi=function(){const e=document.createElement("div");return e.classList.add("deposit-preference-form"),e.innerHTML='\n        <div class="form-header">\n            <h1>Verify you are Admin</h1>\n            <p>Please enter your login pin</p>\n        </div>\n\n        <form class="preferred-deposit-form" id="depositForm" novalidate>\n\n            <div class="password">\n              <label for="password">\n                Password\n                <span class="required-asterisk">*</span>\n              </label>\n              <input\n                type="password"\n                id="password"\n                placeholder="xxxxxx"\n                pattern="^.{1,}$"\n                data-set-field-validation-value="setEmptyFieldValidationValue"\n                required\n              />\n              <output id="password-message" class="show-message"></output>\n            </div>\n\n            <button type="button" class="btn-verify-admin">Verify</button>\n        </form>',e}(),vi=mi.querySelector("form"),fi=mi.querySelector(".btn-verify-admin"),hi=mi.querySelector("#password"),gi=new CustomEvent("all-field-valid",{detail:{form:mi,functionToGetDataInIndexBD:function(){X.interact({storeName:"admin",keyPathValue:1,getMethod:"get",returnData:wi,undefineState:Si},"getData")}}}),yi=({contentKey:e="question",text:t})=>new CustomEvent("dialog-manager",{detail:{contentKey:e,closedByValue:"any",text:t}}),bi={pinSuccess:yi({text:"approve the mass deposit"}),pinFail:yi({contentKey:"status",text:"Incorrect Password"})};function wi(e){e.signUpData.password===hi.value?(vi.reset(),_.resetFieldValidity(vi),Y.dispatchEvent(bi.pinSuccess)):Y.dispatchEvent(bi.pinFail)}function Si(){console.log("Error while getting data")}fi.addEventListener("click",()=>Y.dispatchEvent(gi)),mi.addEventListener("input",B);const xi=mi,Ai=document.createElement("dialog");function qi(){qi.prototype.body.append(Ai)}const Pi={question:e=>{Ye.textContent=`Are you sure you want to ${e.text}`,Ai.append(et)},status:e=>{nt.textContent=e.text,Ai.append(it)},profile:()=>{Ai.append(In)},proof:()=>{Ai.append(_n)},depositForm:()=>{Ai.append(Xn)},depositPreferenceForm:()=>{Ai.append(pi)},adminVerification:()=>{Ai.append(xi)}};Y.addEventListener("dialog-manager",function(e){const t=e.detail;Ai.innerHTML="",Ai.setAttribute("closedby",t.closedByValue),Pi[t.contentKey](t),function(e="small"){Ai.setAttribute("data-size",e)}(t.size),Ai.showModal()}),Y.addEventListener("manual-close-dialog",function(){Ai.close()}),qi.prototype.body=document.body,qi();const Ei=document.querySelector(".join-us-content-holder");Y.addEventListener("all-field-valid",j),Ie.addEventListener("click",()=>Y.dispatchEvent(Le)),Ei.append(W)})();