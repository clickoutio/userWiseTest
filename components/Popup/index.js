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
            <FlowTemplates title={"Prevent Delinquent Churn"} tags={["Churn Prevention"]}
                           onClick={handleUserClickOnATemplate}>
              Follow up on failed payments to prevent churn. Add tag PaymentFailed when a subscription is Past Due and
              remove it when subscription becomes Active again.
            </FlowTemplates>
            <FlowTemplates title={"Prevent Inactive Users from Churning"} tags={["Churn Prevention"]}
                           onClick={handleUserClickOnATemplate}>
              If a customer is not active for more than 10 days, send “Do you need help?” email. If they don't open
              the
              email start showing them successful case studies via Facebook ads to reactivate them. Stop showing them
              Facebook Ads when they become active again.
            </FlowTemplates>
            <FlowTemplates title={"Capture Leads With a Lead Magnet and Send a Nurture Sequence"}
                           tags={["Nurture", "Leads"]} onClick={handleUserClickOnATemplate}>
              When a person downloads an eBook, cheatsheet or another lead magnet through a form on your site: 1. Tag
              them
              2. Send them a nurturing email sequence.
            </FlowTemplates>
            <FlowTemplates title={"Convert Trial Users With Targeted Onboarding Campaigns"}
                           tags={["Onboarding", "Trials"]} onClick={handleUserClickOnATemplate}>
              Send Trial users the most relevant content for them with the help of user data that you’ve collected
              through
              the sign-up process.
            </FlowTemplates>
            <FlowTemplates title={"Double the Open Rate of a Newsletter Broadcast"} tags={["Email Broadcast"]}
                           onClick={handleUserClickOnATemplate}>
              Send a follow-up email with a different subject line to people who haven’t opened your first broadcast.
              That
              way you’re going to drastically increase the open rate of the broadcast with almost no extra efforts.
            </FlowTemplates>
            <FlowTemplates title={"Capture Mailchimp Subscribers With a Lead Magnet and Send a Nurture Sequence"}
                           tags={["Nurture", "Leads"]} onClick={handleUserClickOnATemplate}>
              When a MailChimp subscriber downloads an eBook through a specific form on your site: 1. Tag them 2. Send
              them a nurturing email sequence.
            </FlowTemplates>
            <FlowTemplates title={"Remind a Person to Download a Lead Magnet"} tags={["Nurture", "Leads"]}
                           onClick={handleUserClickOnATemplate}>
              When a person leaves their email on a lead magnet on your website but doesn’t click on the Download link
              in
              the confirmation email, remind them with a follow-up email.
            </FlowTemplates>
            <FlowTemplates title={"Onboard Trial Users and Help Them Reach the 'Aha' Moment"}
                           tags={["Onboarding", "Trials"]} onClick={handleUserClickOnATemplate}>
              When a user signs up for your product, send them an onboarding sequence.
            </FlowTemplates>
          </div>
        </div>
      </div>
    </>
  )
});

export default Popup;