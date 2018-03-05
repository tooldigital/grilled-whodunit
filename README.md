# google-whodunnit

![branding](./docs/poster.jpg)

## Concept

This is a whodunnit murder mystery using a voice app interface (namely, Actions on Google). The user takes the role of the detective who's been called in to crack the case. There are 4 suspects, each with compelling motive to commit the crime. The goal is to interrogate each suspect and gather evidence to solve the murder.

## Execution

The user can ask literally any question, so how are you supposed to write against that? There is the brute-force approach where you write responses until your fingers fall off, but that's not sustainable! Our approach was to create a story with responses that lead the user organically into the next section of the story, and provide a safety net in case a user gets lost.

To visualize the story structure, we created mind maps.

![mindmap](./docs/mindmap.png)

### Commonly asked questions

Commonly asked questions are low-hanging fruit. Start there.

> Where were you on the night of the murder?!

Most people have a repetoire of interrogation questions that they know from TV crime drama, so that's the best place to start our story. We use these questions to respond with something that leads the user deeper into the story.

> I was at home with my girlfriend...

### Implicitly guided conversations

On the surface, the interrogation scenario is an open-ended conversation between the user and the suspect. However, we actually want to guide the user to ask about specific topics since that's how we tell the story.

We wrote our responses with a template of **priming**, **informing**, and **leading**. Priming is a connective phrase that allows the user to get into "listening mode." Informing is where we give the response to the user's question, and leading is a way of guiding the user into asking about a particular subject. This structure helps our users remember what they heard, and suggests a relevant topic for the next query. 

Brandi

> None of us really know. It’s been that way since before even my father was born. You can ask my grandmother if you want.

User

> Who is your grandmother?

Or if they already know that it's Constance...

> Let me talk to Constance

### Hints

Detective Hawkins is an impatient partner, so he steps in from time to time to give advice on how to steer the interrogation. This mechanic is our way of repairing the conversation when the user asks something irrelevant, or something we don't have a response for. 

For example, if the user asks "what channel was the tv show on?" the response wouldn't be driving the story to a meaningful place. When this happens, we have Hawkins jump in and guide the user back to a more productive line of questioning. 

> Listen closely to the suspects' responses. Are their alibis all lining up?

# Tech

This project uses [Dialogflow](https://dialogflow.com) for processing user inputs, and a NodeJS [Cloud Function](https://cloud.google.com/functions/) for determining responses. 

The code was written in a few weeks on Mac, but could work on linux, or even Bash on Windows if you are feeling adventurous.

## Account setup

[Create a new Dialogflow agent](https://dialogflow.com/docs/getting-started/building-your-first-agent), then delete the default intents.

**Make sure billing is enabled on the Google cloud project.**

## Deploying

### Dialogflow intents and entities

Create a directory dialogflow-agent/.access_tokens/ and add a file for each app you want to deploy to (e.g. dev, stage, production). [Get your developer access token](https://dialogflow.com/docs/reference/agent/) from Dialogflow and paste into the corresponding token file.

From the dialogflow-agent dir, run a specific version of the command `npm run update:{entities|intents}:{dev|stage|prod}` to publish objects to dialogflow.

### The webhook

Configure the gcloud CLI to use the Google cloud project that is linked to your Dialogflow agent. Run `gcloud init` to configure. 

[Create a stage bucket](https://console.cloud.google.com/storage) for the deployment process. In webhook/package.json, replace the value of `--stage-bucket whodunnit` with the name of your bucket.

Run `npm run deploy`, which is an alias for a gcloud command. When complete, it will show the url that the webhook was published to. Use this url in the [fulfillment](https://dialogflow.com/docs/fulfillment) section of Dialogflow.


## Development

There are two main sections in this project: the listener (Dialogflow agent), and the responder (the webhook). 

The Dialogflow generator is used to create intent and entity objects, and publish them to a Dialogflow agent. 

The webhook code runs in a cloud function, and gets hit when a user interacts with the app.

### Install dependencies

- [Install NodeJS](https://nodejs.org/en/download/)
- [Install PM2](http://pm2.keymetrics.io/)
- [Install gcloud](https://cloud.google.com/sdk/downloads)
- Run `npm install` in `webhook/` and `dialogflow-agent/`

### Running the project locally

In webhook/package.json, change the values passed to the localtunnel script (e.g. whodunnitdev) to something unique.

Start the dev environment by running `npm run local`. This will start a local server, expose a public url via localtunnel, and display a stream of logs.

The logs will show a url, which you will need to paste into the Dialogflow fulfillment url field.

`your url is: https://whodunnitdev.localtunnel.me`

![fulfillment](./docs/fulfillment.png)

Dialogflow is a remote service, so you will need to deploy entities and intents before it will work in your local environment (see deployment section).