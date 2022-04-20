## Simple React Alert Component
---
## Live Ui
[Enjoy live ui](https://react-alert-comp.netlify.app/)

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
