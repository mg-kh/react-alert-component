## Simple React Alert Component
---
## Live Ui


### Usage
```javascript
import {showAlert, hideAlert} from '@store/action.alert'

showAlert({
    title: 'Success',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
    timeLimit: 3,
    link: 'https://www.google.com/',
    type: 'success',
})

--- 

hideAlert(id)
```