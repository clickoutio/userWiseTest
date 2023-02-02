import React from "react";
import styles from "../../pages/index.module.css";
import FlowTemplates from "../FlowTemplates";

const Popup = React.forwardRef(({handleUserClickOnATemplate}, ref) => {
  return (
    <>
      <div className={styles.popup}>
        <div ref={ref} className={styles.popupContent}>
          <h1 className={"font-semibold text-xl mb-4"}>Templates</h1>
          <div className={"flex flex-wrap"}>
            <div className={"mx-1 my-4 cursor-pointer group"} onClick={() => handleUserClickOnATemplate(["blank"])}>
              <div
                className={"w-80 h-80 border-2 border-dashed border-zinc-300 group-hover:border-zinc-500 ease-in-out duration-150 rounded-md px-8 py-6 flex flex-col justify-center items-center"}>
                <img className={"opacity-40  group-hover:opacity-100 ease-in-out duration-150"}
                     src={"/images/addFile.svg"} width={"50px"}/>
                <span className={"font-medium text-base mt-6"}>Start Blank</span>
                <span className={"text-sm text-gray-400"}>Create flow from Scratch</span>
              </div>
            </div>
            <FlowTemplates title={"Capture Leads From a Typeform, and Segment Based on Value"}
                           tags={["Nurture", "Leads", "Onboarding"]}
                           onClick={handleUserClickOnATemplate}>
              Capture lead information in a form and segment leads based on their Budget input. Send low-value leads an
              automated email sequence. Assign high-value leads to a sales rep and ask them to book a demo.
            </FlowTemplates>
            <FlowTemplates title={"Get Feedback From a Recently Churned Customer"} tags={["Customer Success"]}
                           onClick={handleUserClickOnATemplate}>
              Ask recently churned customers for feedback to improve product and customer experience. Most people go
              silent once they churn, so we're going to follow up!
            </FlowTemplates>
            <FlowTemplates title={"Follow Up On Pricing Page Visit"}
                           tags={["Leads"]} onClick={handleUserClickOnATemplate}>
              If a user visits your pricing page, send them an email.
            </FlowTemplates>
            <FlowTemplates title={"Educate Users About a Recently Activated Feature"}
                           tags={["Product Adoption"]} onClick={handleUserClickOnATemplate}>
              If a user starts using or activates a specific feature, send them an educational email about that feature
              to increase feature adoption.
            </FlowTemplates>
            <FlowTemplates title={"Engage Your Important Trials on Facebook"} tags={["Trials"]}
                           onClick={handleUserClickOnATemplate}>
              Add users that have signed up for a trial for a more expensive plan to a Facebook audience and engage them
              with Facebook Ads with case studies.
            </FlowTemplates>
            <FlowTemplates title={"Nudge Long-Term Customer to Upgrade to Annual Subscription"}
                           tags={["Onboarding", "Trials"]} onClick={handleUserClickOnATemplate}>
              If a user has completed the first step of your sign-up flow but hasn’t finished the rest of the steps (for
              example, not provided billing details), send them a helpful reminder email.
            </FlowTemplates>
            <FlowTemplates title={"Prevent Delinquent Churn"}
                           tags={["Churn Prevention"]} onClick={handleUserClickOnATemplate}>
              Follow up on failed payments to prevent churn. Add tag PaymentFailed when a subscription is Past Due and
              remove it when subscription becomes Active again.
            </FlowTemplates>
            <FlowTemplates title={"Prevent Inactive Customers From Churning"}
                           tags={["Churn Prevention"]} onClick={handleUserClickOnATemplate}>
              If a customer is not active for more than 10 days, send “Do you need help?” email. If they don't open the
              email start showing them successful case studies via Facebook ads to reactivate them. Stop showing them
              Facebook Ads when they become active again.
            </FlowTemplates>
            <FlowTemplates title={"Convert Trial Users With Targeted Onboarding Campaigns"}
                           tags={["Onboarding", "Trials"]}
                           onClick={handleUserClickOnATemplate}>
              Send Trial users the most relevant content for them with the help of user data that you’ve collected
              through the sign-up process.
            </FlowTemplates>
          </div>
        </div>
      </div>
    </>
  )
});

export default Popup;