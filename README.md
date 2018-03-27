# slackbot

send message for slack

Using in you app's

```javascript 
const slack = require('./slackbot.js');

slack.options.json = { 
    attachments:[{
        pretext: 'text',
        image_url: '',
        text: ['text', 'text'].join('\n'), 
        color: '#2eb50b'
    }]
}

slack.sendPost(slack.options)
```
