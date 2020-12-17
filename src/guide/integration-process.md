# Integration process

## Getting sandbox access 

Starting the integration process should consist of 3 easy steps:

1. Obtaining **sandbox access**
2. Installing your **client library**
3. Making **test API calls** 

In order to start you development you need to obtain set of credentials to sandbox environment. You can request them by filling in the form avaialble here. */add link to contact form/*

::: tip Use sandbox credentials
Remember to use your sandbox API keys for testing and development. This ensures that you don't accidentally modify your live customers or charges.
:::

The sanbox access will include access to both sample API client but also test clinic and doctors profiles. You can interact with them just by logging in to the service.

Once you set up the basic data, our specialist will walk you through the process on a **kick-off meeting** and organize a project plan for the next steps. You can schedule a meeting with our expert by reaching out to integrations@docplanner.com.

The next step of the process should be installing your client library - for details go here /add link to SDK section/

## Acceptance tests

Once you are ready with the development, in order to ensure to quality of the integration, you should reach out to the specialist. To finnalize the integration process, we're inviting for a joint session via chosen communication platform. 

During the session, the Docplanner specialist will walk you through our testing protocol. You can check how it looks like here */add downloadable file/*.

::: warning Acceptance criteria
In order to meet the needs of our customers, only integrations with **all the methods implemented** will be approved.
:::

The minimal set of integrated flows which will be accepted to use, consists of:

- Mapping for all the resources
- Synchronizing all the bookings
- Updating doctor's schedules in teal time



## Activating integration for clients

The activation process can be adjusted to your needs. Depending on whether you provide configuring the authorization directly in our app we can either:

- Hand over the credentials **to our client** on request
- Provide the credentials **directly to you** after client's approval

Depending on the chosen scenario, the actions needed to obtain credentials looks as follows:

##### Activation directly with cusotmer

In case of activation directly with the client, the clinic needs to contact their Customer Success specialist. 

##### Activation on the software level

If you want to setup the integration on your own and obtain the credentials, we need to first - get an approval from the specific clinic. You should request the credentials by sending an email to integrations@docplanner.com with customer representative in the CC.



## Blackbox tests

In order to maintain the top quality of the integrated apps, we are periodically conducting blackbox tests. They are done both manually and automatically. Our specialists might reach out to you in order to run shared session to make sure all the system flows are functioning correctly. 

Additionally our system is **constantly monitoring** all the endpoints used for the PUSH integration model. The pings are sent every 5 minutes. All the reponses other than server error (from 5XX family) are considered **affirmation of the functioning**. In case of 3 successive failed pings, an alert is triggered to an email defined during kick-off meeting.

