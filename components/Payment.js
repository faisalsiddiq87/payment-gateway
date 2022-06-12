import {makePayment} from "./gateways/RazorPayment";
import notFound from "./gateways/NotFound";

export function selectGateWay(prop) {   
    return  prop == 'razorPay' ? makePayment : notFound;
}