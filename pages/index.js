import React, {useEffect, useRef, useState} from 'react';
import TopBar from '../components/Navigation/TopBar';
import DotIcon from '../public/images/icons/dot.inline.svg';
import addIcon from '../public/images/icons/add.svg';
import Button from '../components/Button';
import styles from './flows/flows.module.css';
import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0/client";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import FlowTemplates from "../components/FlowTemplates";

function usePopupVisible(initialIsVisible) {
  const [isPopupVisible, setIsPopupVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target))
      setIsPopupVisible();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return {ref, isPopupVisible, setIsPopupVisible};
}

function Flows() {
  const {user: userData, isLoading} = useUser();
  const {ref, isPopupVisible, setIsPopupVisible} =
    usePopupVisible(false);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setIsPopupVisible(false);
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, []);

  const stats = [
    {
      id: 0,
      iconClass: 'fill-error',
      count: 0,
      title: 'Paused',
    },
    {
      id: 1,
      iconClass: 'fill-success-2',
      count: 0,
      title: 'Activated',
    },
  ];
  const CreateFlowComponent = () => (
    <div className={'flex-grow py-20'}>
      <div className={styles.createNew}>
        <div className={styles.content}>
          <h4 className={styles.title}>Create your first flow</h4>
          <p>
            Configure your first Clickout in a few minutes and integrate it in
            your platform with a simple 10 lines script
          </p>
          <Button
            type={'button'}
            onClick={() => setIsPopupVisible(true)}
            size={'large'}
            className={styles.btnCreate}
            icon={addIcon}
          >
            Create new
          </Button>
        </div>
      </div>
    </div>
  );

  const Popup = React.forwardRef((props, ref) => (
    <div className={styles.popup}>
      <div ref={ref} className={styles.popupContent}>
        <h1 className={"font-semibold text-xl mb-4"}>Templates</h1>
        <div className={"flex flex-wrap"}>
          <div className={"mx-1 my-4 cursor-pointer group"}>
            <div
              className={"w-80 h-80 border-2 border-dashed border-zinc-300 group-hover:border-zinc-500 ease-in-out duration-150 rounded-md px-8 py-6 flex flex-col justify-center items-center"}>
              <img className={"opacity-40  group-hover:opacity-100 ease-in-out duration-150"}
                   src={"/images/addFile.svg"} width={"50px"}/>
              <span className={"font-medium text-base mt-6"}>Start Blank</span>
              <span className={"text-sm text-gray-400"}>Create flow from Scratch</span>
            </div>
          </div>
          <FlowTemplates title={"Prevent Delinquent Churn"} tags={["Churn Prevention"]}>
            Follow up on failed payments to prevent churn. Add tag PaymentFailed when a subscription is Past Due and
            remove it when subscription becomes Active again.
          </FlowTemplates>
          <FlowTemplates title={"Prevent Inactive Users from Churning"} tags={["Churn Prevention"]}>
            If a customer is not active for more than 10 days, send “Do you need help?” email. If they don't open the
            email start showing them successful case studies via Facebook ads to reactivate them. Stop showing them
            Facebook Ads when they become active again.
          </FlowTemplates>
          <FlowTemplates title={"Capture Leads With a Lead Magnet and Send a Nurture Sequence"}
                         tags={["Nurture", "Leads"]}>
            When a person downloads an eBook, cheatsheet or another lead magnet through a form on your site: 1. Tag them
            2. Send them a nurturing email sequence.
          </FlowTemplates>
          <FlowTemplates title={"Convert Trial Users With Targeted Onboarding Campaigns"}
                         tags={["Onboarding", "Trials"]}>
            Send Trial users the most relevant content for them with the help of user data that you’ve collected through
            the sign-up process.
          </FlowTemplates>
          <FlowTemplates title={"Double the Open Rate of a Newsletter Broadcast"} tags={["Email Broadcast"]}>
            Send a follow-up email with a different subject line to people who haven’t opened your first broadcast. That
            way you’re going to drastically increase the open rate of the broadcast with almost no extra efforts.
          </FlowTemplates>
          <FlowTemplates title={"Capture Mailchimp Subscribers With a Lead Magnet and Send a Nurture Sequence"}
                         tags={["Nurture", "Leads"]}>
            When a MailChimp subscriber downloads an eBook through a specific form on your site: 1. Tag them 2. Send
            them a nurturing email sequence.
          </FlowTemplates>
          <FlowTemplates title={"Remind a Person to Download a Lead Magnet"} tags={["Nurture", "Leads"]}>
            When a person leaves their email on a lead magnet on your website but doesn’t click on the Download link in
            the confirmation email, remind them with a follow-up email.
          </FlowTemplates>
          <FlowTemplates title={"Onboard Trial Users and Help Them Reach the 'Aha' Moment"}
                         tags={["Onboarding", "Trials"]}>
            When a user signs up for your product, send them an onboarding sequence.
          </FlowTemplates>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {isLoading && <Loading/>}
      {isPopupVisible && <Popup ref={ref}/>}
      <TopBar active={'flows'}/>
      <div className={styles.info}>
        <h2 className={styles.userName}>👋🏼 Hello {userData?.firstName}</h2>
        <p>Create your first flow now and start saving clients</p>
        <div className={styles.stats}>
          {stats.map(({id, iconClass, count, title}) => (
            <div key={id} className={styles.card}>
              <span className={styles.icon}>
                <DotIcon className={iconClass}/>
              </span>
              <span className={'text-black'}>{count}</span>
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
      <CreateFlowComponent/>
    </>
  );
};

Flows.propTypes = {};

export default withPageAuthRequired(Flows, {
  onRedirecting: () => <Loading/>,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
