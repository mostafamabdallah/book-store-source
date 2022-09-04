import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import hatly from "../../../img/01.jpg";
const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} style={{ backgroundColor: "#ebeef5", paddingTop: '150px' }} className="pb-5">
      <div className="container pt-4">
        <div className="row">
          <div
            className="col-12 p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <h1 className="pb-4 pt-4 text-center">ABOUT US</h1>
            <div className="row">
              <div className="col-12 col-md-6 p-3">
                <img width="100%" src={hatly} />
              </div>
              <div
                className="col-12 col-md-6 p-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-evenly",
                }}
              >
                <h4>THE STORY</h4>
                <p className="description">
                  Hatly Stores was established in 2014 to make it easier for buyers from Egypt to shop abroad safely with cash on delivery payment method.
                </p>
                <p className="description">
                  We are a bunch of passionate experts in different fields who decided to gather our efforts to bring you the best of products shipped from abroad.
                </p>
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                  to="/shop/all"
                  className="btn btn-primary p-2 col-6 col-md-5 col-lg-3"
                >
                  <i className="fa fa-shopping-bag pe-1" aria-hidden="true"> </i> SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <div className="row ">
              <div className="col-6 col-md-3">
                <i
                  className="fa fa-car mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>Quick Delivery</h5>
                <p className="description" style={{ width: "90%" }}>
                  Home delivery within 24hr of placing your order
                </p>
              </div>
              <div className="col-6 col-md-3">
                <i
                  className="fa fa-cc-mastercard mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>Payment Methods</h5>
                <p className="description" style={{ width: "90%" }}>
                  Cash On Delivery, Credit Card, Premium Card, Ahly Visa
                  Installment
                </p>
              </div>
              <div className="col-6 col-md-3">
                <i
                  className="fa fa-check-circle-o mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>Quality</h5>
                <p className="description" style={{ width: "90%" }}>
                  Anything you buy from hatlystore.com has an Agent Warranty
                </p>
              </div>
              <div className="col-6 col-md-3">
                <i
                  className="fa fa-retweet mb-2"
                  style={{ color: "#001c46", fontSize: "50px" }}
                ></i>
                <h5>Return & Refund</h5>
                <p className="description" style={{ width: "90%" }}>
                  Enjoy 14 days Return Or Refund on all your purchases
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Payment Methods:
            </h3>
            <p>Pay at ease with Hatly Stores, we provide you with convenient payment methods to choose from.</p>
            <ul className="description" >
              <li>Cash on delivery</li>
              <li>Fawry</li>
              <li>Visa or Master Card via Fawry “3% Fawry Fees”</li>
            </ul>
            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Delivery Methods:
            </h3>
            <ul className="description" >
              <li> To Doorstep</li>
              <li>Aramex Services </li>
            </ul>
            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Cash on delivery Policy:
            </h3>
            <p className="description">
              “Shipped from abroad” is a statement that makes you feel it would take ages to be delivered, that’s what “Hatly Stores” changed by providing you with larger quantities of products to be ready for immediate purchase.
            </p>
            <p className="description">
              However, in case the customer requests a device that is not available in our warehouse, a deposit is made with a reasonable amount by one of the following methods, bearing in mind that the order would be requested on the same day that the deposit is paid.

            </p>

            <ul className="description">
              <li>Bank deposit</li>
              <li>Payment in our store</li>
              <li>Vodafone Cash, Etisalat cash or MobiCash</li>
            </ul>

            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Pricing policy
            </h3>
            <p className="description">
              Please be aware that, in case that a product is not offered or given in our inventory, the prices listed on the website are approximations and are liable to change in accordance with the cost of delivering the device without informing the customer.
            </p>
            <p className="description">
              In case that the device is not delivered within 21 days, the customer has the right to receive their deposit back.
            </p>
            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Return and Refund Policy:
            </h3>
            <p className="description">
              The replacement system for manufacturing defects is valid for all Hatly products that are currently in our warehouse or that are imported to the customer with a preorder request for a period of 3 months in order to fill your experience with all the elements of safety. We were the first company to apply the warranty to manufacturing defects to purchases made from abroad, and we are still working to develop that in order to satisfy our customer's needs.
            </p>
            <p className="description">
              In the event that the customer complains about the existence of manufacturing defects within the warranty period, the device shall be received from the customer by one of the following methods:
            </p>
            <p className="description">
              We in Hatly have the most qualified maintenance technicians and we promise to provide all spare parts for all devices in Hatly, we provide all hardware maintenance they need without referring to any other maintenance center Just contact us, and the device will be fully examined, the spare parts will be determined and the action will be taken as soon as possible.
            </p>
            <p className="description">
              Hatly store will NOT deal or provide any services or products to any of OFAC (Office of Foreign Assets Control) sanctions countries in accordance with the law of  Egypt.
            </p>
            <ul className="description">
              <li>Multiple transactions may result in multiple postings to the cardholder’s monthly statement.</li>
              <li>Refund and Cancellation Policy – The following statement to be added on this section is as follows:</li>
              <li>Refunds will be done only through the Original Mode of Payment.
              </li>
            </ul>
            <h3 style={{ textTransform: "uppercase" }} className="mb-3">
              Privacy Policy:

            </h3>
            <p className="description">
              This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p className="description">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
            </p>
            <h3>
              Interpretation and Definitions
              Interpretation
            </h3>
            <p className="description">The words in which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in the plural.
            </p>
            <h3>Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className="description">
              <li>Account means a unique account created for You to access our Service or parts of our Service.</li>
              <li>Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Hatly Store, El-moltaqa towers – Tower B – 3rd floor – Apt. 3 Abbasiya Sqr. – Abbasiya, Cairo Governorate.</li>
              <li>Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
              <li>Country refers to: Egypt</li>
              <li>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
              <li>Personal Data is any information that relates to an identified or identifiable individual.</li>
              <li>Service refers to the Website.</li>
              <li>Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
              <li>Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.</li>
              <li>Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
              <li>Website refers to Hatly Store, accessible from http://34.65.137.94</li>
              <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
