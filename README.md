## Simple React Alert Component
---
## Live Ui
[Enjoy live ui](https://62601b031cb65b34abce905f--friendly-figolla-a06b33.netlify.app/)

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