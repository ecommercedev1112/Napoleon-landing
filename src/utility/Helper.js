import { PublicDomainsList } from "./PublicDomains";
import moment from 'moment';

export function openAppMessageDialog() {
    resetMessageDialog();
    let btnMsgDialogOK = document.getElementById('btnMsgDialogOk');
    btnMsgDialogOK.setAttribute('data-bs-dismiss', 'modal');
    document.getElementById('btnOpenAlert').click();
}

export function openAppMessageDialogLevelTwo(firstLevelModalId) {
    resetMessageDialog();
    let btnMsgDialogOK = document.getElementById('btnMsgDialogOk');
    btnMsgDialogOK.setAttribute('data-bs-target', '#' + firstLevelModalId);
    btnMsgDialogOK.setAttribute('data-bs-toggle', 'modal');
    document.getElementById('btnOpenAlert').click();
}

export function openAppMessageDialogWithNavigation(navigationPath) {
    resetMessageDialog();
    let btnMsgDialogOK = document.getElementById('btnMsgDialogOk');
    btnMsgDialogOK.setAttribute('data-bs-dismiss', 'modal');
    let txtNavigationPath = document.getElementById('txtNavigationPath');
    txtNavigationPath.value = navigationPath;
    document.getElementById('btnOpenAlert').click();
}

export function openAppMessageDialogWithNextStep(nextStep) {
    resetMessageDialog();
    let btnMsgDialogOK = document.getElementById('btnMsgDialogOk');
    btnMsgDialogOK.setAttribute('data-bs-dismiss', 'modal');
    let txtNavigationPath = document.getElementById('txtNextStep');
    txtNavigationPath.value = nextStep;
    document.getElementById('btnOpenAlert').click();
}

function resetMessageDialog() {
    let btnMsgDialogOK = document.getElementById('btnMsgDialogOk');
    if (btnMsgDialogOK.hasAttribute('data-bs-target')) {
        btnMsgDialogOK.removeAttribute('data-bs-target');
    }

    if (btnMsgDialogOK.hasAttribute('data-bs-toggle')) {
        btnMsgDialogOK.removeAttribute('data-bs-toggle');
    }

    if (btnMsgDialogOK.hasAttribute('data-bs-dismiss')) {
        btnMsgDialogOK.removeAttribute('data-bs-dismiss');
    }

    let txtNavigationPath = document.getElementById('txtNavigationPath');
    txtNavigationPath.value = '';
}

export function formatAppMessage(msg, title) {
    return {
        'title': title ? title : 'Error message',
        'body': msg
    };
}

export function openAppMessageConfirmDialogWithNextStep(nextStep, parameter) {
    resetConfirmMessageDialog();
    let btnConfirmMsgDialogOK = document.getElementById('btnConfirmMsgDialogOk');
    btnConfirmMsgDialogOK.setAttribute('data-bs-dismiss', 'modal');
    let txtConfirnNextStep = document.getElementById('txtConfirmNextStep');
    txtConfirnNextStep.value = nextStep;
    let txtConfirnNextStepParam = document.getElementById('txtConfirmNextStepParameter');
    txtConfirnNextStepParam.value = parameter;
    document.getElementById('btnOpenConfirmation').click();
}

function resetConfirmMessageDialog() {
    let btnConfirmMsgDialogOK = document.getElementById('btnConfirmMsgDialogOk');
    if (btnConfirmMsgDialogOK.hasAttribute('data-bs-target')) {
        btnConfirmMsgDialogOK.removeAttribute('data-bs-target');
    }

    if (btnConfirmMsgDialogOK.hasAttribute('data-bs-toggle')) {
        btnConfirmMsgDialogOK.removeAttribute('data-bs-toggle');
    }

    if (btnConfirmMsgDialogOK.hasAttribute('data-bs-dismiss')) {
        btnConfirmMsgDialogOK.removeAttribute('data-bs-dismiss');
    }

    let txtConfirnNextStep = document.getElementById('txtConfirmNextStep');
    txtConfirnNextStep.value = '';
}

export function getStaticMasterData(dataType) {
    var jsonDataURL = '';
    if (dataType === 'USA-STATES-LIST') {
        jsonDataURL = '/data/usaStatesList.json';
    } else if (dataType === 'EMPLOYEE-COUNT-RANGE') {
        jsonDataURL = '/data/employeeCountRanges.json';
    } else if (dataType === 'COMPANY-REVENUE-RANGE') {
        jsonDataURL = '/data/companyRevenueRanges.json';
    } else if (dataType === 'INDUSTRY-LIST') {
        jsonDataURL = '/data/industriesList.json';
    } else if (dataType === 'WORK-AUTH-LIST') {
        jsonDataURL = '/data/workAuthorizationList.json';
    } else if (dataType === 'WORKING-MODE-LIST') {
        jsonDataURL = '/data/workingModesList.json';
    } else if (dataType === 'JOB-TYPES-LIST') {
        jsonDataURL = '/data/jobTypesList.json';
    } else if (dataType === 'SKILL-DIMENTIONS') {
        jsonDataURL = '/data/skillsList.json';
    } else if (dataType === 'WORK-STATUS-LIST') {
        jsonDataURL = '/data/workStatusList.json';
    } else if (dataType === 'USA-TIMEZONE-LIST') {
        jsonDataURL = '/data/usaTimezonesList.json';
    } else if (dataType === 'USA-TIMEZONE-CODES-LIST') {
        jsonDataURL = '/data/usaTimezoneAreaCodes.json';
    }

    return fetch(jsonDataURL,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.warn(error));
}

export function getTimezoneFromAreaCode(time, napoleoneTimezonesList, usaTimezonesAreaCodesList) {
    let areaCode = '';
    if (time !== null && time !== undefined && time !== '') {
        areaCode = time.substring(time.lastIndexOf(".") + 1, (time.length - 1));
        let areaKey = '';
        for (let i = 0; i < usaTimezonesAreaCodesList.length; i++) {
            if (usaTimezonesAreaCodesList[i].key === Number.parseInt(areaCode)) {
                areaKey = usaTimezonesAreaCodesList[i].value;
                break;
            } else {
                continue;
            }
        }

        if (areaKey !== '') {
            for (let i = 0; i < napoleoneTimezonesList.length; i++) {
                if (napoleoneTimezonesList[i].abbr === areaKey) {
                    return napoleoneTimezonesList[i].key;
                }
            }
        } else {
            areaCode = 'Timezone not available';
        }
    }
    return areaCode;
}

export function getInterviewTimeWithAreaCode(time, zone, napoleoneTimezonesList) {
    let updatedTime = time + '.000Z';
    for (var i = 0; i < napoleoneTimezonesList.length; i++) {
        if (napoleoneTimezonesList[i].key === zone) {
            updatedTime = time + '.' + napoleoneTimezonesList[i].areaCode + 'Z';
            break;
        }
    }

    return updatedTime;
}

export function doBeforePageRefresh() {
    console.log(window.sessionStorage.getItem('loggedInUserDetails'));
}

export function formatDate(dateString, format) {
    if (!format) {
        format = 'yyyy-mm-dd';
    }
    return moment(new Date(dateString)).format(format);
}

export function validateNumericFieldLength(value, length) {
    if (!isNaN(value) && String(value).length <= length) {
        return true;
    } else {
        return false;
    }
}

export function convertToIntitCap(sentence) {
    if (sentence !== undefined && sentence.trim() !== '') {
        let initCapSentence = '';
        let wordsArray = sentence.split(' ');
        for (let i = 0; i < wordsArray.length; i++) {
            initCapSentence = initCapSentence + wordsArray[i][0]?.toUpperCase() + wordsArray[i]?.slice(1);
            if (i < wordsArray.length) {
                initCapSentence = initCapSentence + ' ';
            }
        }

        return initCapSentence;
    } else {
        return '';
    }
}

export function isValidMobileNoCharAtEnd(value) {
    let ASCIICode = value.charCodeAt(value.length - 1);
    if ((ASCIICode > 31) && (ASCIICode < 48 || ASCIICode > 57) && (ASCIICode !== 45))
        return false;
    return true;
}

export function formatUSPhoneNo(phoneNumber) {
    let formattedNumber = '';
    if (phoneNumber) {
        phoneNumber = phoneNumber.toString().replaceAll('-', '');
        for (let i = 0; i < phoneNumber.length; i++) {
            if (i === 3 || i === 6) {
                formattedNumber = formattedNumber + '-' + phoneNumber[i];
            } else {
                formattedNumber = formattedNumber + phoneNumber[i];
            }
        }
    }

    return formattedNumber;
}

export function formatUSEINNo(einNumber) {
    let formattedNumber = '';
    if (einNumber) {
        einNumber = einNumber.toString().replaceAll('-', '');
        for (let i = 0; i < einNumber.length; i++) {
            if (i === 2) {
                formattedNumber = formattedNumber + '-' + einNumber[i];
            } else {
                formattedNumber = formattedNumber + einNumber[i];
            }
        }
    }

    return formattedNumber;
}

export function LoginPageValidation(email, password) {
    let errors = {
        'isError': false,
        'msg': undefined
    };
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (email === '' || !emailPattern.test(email)) {
        errors.isError = true;
        errors.msg = 'Enter a valid email ID';
    } else if (password === '') {//|| !passwordPattern.test(password)) {
        errors.isError = true;
        errors.msg = 'Enter a valid  Password';
    }

    return errors;
}

export function SignUpValidation(signUpInfo) {
    let publicDomains = PublicDomainsList;
    let errors = {
        'isError': true,
        'msg': undefined
    };

    const emailPattern = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const mobilePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    // const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (signUpInfo.role === 'company' && signUpInfo.companyName === '') {
        errors.msg = 'Enter a valid Company Name';
    } else if (signUpInfo.firstName === '') {
        errors.msg = 'Enter your first name';
    } else if (signUpInfo.lastName === '') {
        errors.msg = 'Enter your last name';
    } else if (signUpInfo.email === '' || !emailPattern.test(signUpInfo.email)) {
        errors.msg = 'Enter a valid email ID';
    } else if (signUpInfo.mobile === '' || !mobilePattern.test(signUpInfo.mobile)) {
        errors.msg = 'Enter a valid mobile number';
    } else if (signUpInfo.role === 'company' && publicDomains.includes(signUpInfo.email.slice(signUpInfo.email.indexOf('@') + 1))) {
        errors.msg = 'Use your organization email to register as company.';
    } else if (signUpInfo.password === '' || signUpInfo.rePassword === '' || signUpInfo.password.length < 6) {
        errors.msg = 'Enter a valid  Password of minimum 6 characters.';
    } else if (signUpInfo.password !== signUpInfo.rePassword) {
        errors.msg = 'Both passwords does not match.';
    } else if (!signUpInfo.termsAccept) {
        errors.msg = 'Accept Napoleone Terms and Conditions.';
    } else {
        errors.isError = false;
    }

    return errors;
}

export function HandleSrviceCallError(err, activity) {
    let msg = 'Error occured. Try again after some time.';

    if (!err?.response) {
        msg = 'Session expired. Re-login to continue.';
    } else if (err?.response?.data?.message) {
        msg = err?.response?.data?.message;
    } else {
        switch (err.response?.status) {
            case 400:
                msg = 'Bad request. Try after some time.'
                break;
            case 401:
                msg = 'You are not authorised. Re-login with proper credentials.'
                break;
            case 404:
                msg = 'Service could not be reached.';
                break;
            default:
                switch (activity.toUpperCase()) {
                    case 'SIGNUP':
                        msg = err.response.data.message + '\n Failed to register. Re-try with proper inputs.';
                        break;
                    case 'LOGIN':
                        msg = 'Login failed. Re-try with proper credentials.';
                        break;
                    case 'OTP':
                        msg = 'OTP retrieval failed. Try again.';
                        break;
                    case 'FORGETPASS':
                        msg = 'Password reset failed. Try again after sometime.';
                        break;

                    /***** COMPANY *****/
                    case 'COMPANY_DASHBOARD':
                        msg = 'Error occured during fetching the data. Try again later. Report the issue to Napoleon support.';
                        break;
                    case 'COMPANY_REQUEST_DETAILS':
                        msg = 'Error occured during fetching the details. Try again later. Report the issue to Napoleon support.';
                        break;
                    case 'COMPANY_REQUEST_CREATE':
                        msg = 'Error occured during creation of the request. Try again later. Report the issue to Napoleon support.';
                        break;
                    case 'COMPANY_REQUEST_EDIT':
                        msg = 'Error occured during editig the request details. Try again later. Report the issue to Napoleon support.';
                        break;
                    case 'COMPANY_CONTRACT_UPLOAD':
                        msg = 'Error occured during contract upload. Try again later. Report the issue to Napoleon support.';
                        break;
                    case 'COMPANY_PROFILE_EDIT':
                        msg = 'Error occured during profile update. Try again later. Report the issue to Napoleon support.';
                        break;

                    /***** CANDIDATE *****/
                    case 'CANDIDATE_DASHBOARD':
                        msg = 'Dashboard loading failed. Try again after sometime.';
                        break;
                    case 'PROFILE_UPDATE':
                        msg = ' Profile update failed. Try again after sometime.';
                        break;

                    /***** ADMIN *****/
                    case 'ADMIN_DASHBOARD':
                        msg = 'Admin Dashboard loading failed. Try again after sometime.';
                        break;
                    case 'FETCH_HIRED':
                        msg = 'Hired Candidate list loading failed. Try again after sometime.';
                        break;
                    case 'FETCH_REJECTED':
                        msg = 'Rejected Candidate list loading failed. Try again after sometime.';
                        break;
                    case 'FETCH_COMPANY':
                        msg = 'Company list loading failed. Try again after sometime.';
                        break;
                    case 'FETCH_CANDIDATE':
                        msg = 'Candidate list loading failed. Try again after sometime.';
                        break;
                    case 'ASSIGN_CANDIDTE':
                        msg = 'Candidate assignation failed. Try again after sometime.';
                        break;
                    case 'ADMIN_REQ_DETAILS':
                        msg = 'Fetching request details failed. Try again after sometime.';
                        break;
                    case 'ADMIN_SEND_EMAIL_NOTIFICATION':
                        msg = 'Notification email send failed.';
                        break;
                    default:
                        msg = 'Error occured. Try again later.';
                }
        }
    }

    return msg;
}