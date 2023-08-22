# OpenClassrooms - Projet 14 - React form components

## Summary

- [Getting started](#getting-started)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Installing](#2-installing)
  - [3. Usage](#3-usage)
- [Read more](#read-more)

## Getting started

### 1. Prerequisites

1. Recomanded code editior :

   - [Visual studio code](https://code.visualstudio.com/)

2. Package manager :

   - [Node.js v16.X](https://nodejs.org/en/) and [NPM v9.X](https://www.npmjs.com/)

3. Libraries :

- react

### 2. Installing

> npm i rmaloberti-p14-form-react-components

### 3. Usage

Feedback modal :

```jsx
import { FeedbackModal } from 'rmaloberti-p14-form-react-components';

return (
  <FeedbackModal
    success={true}
    message={'Form submitted'}
    modalController={{ getter: isModalOpen, setter: setIsModalOpen }}
    resetForm={resetForm}
  />
);
```

Select input :

```jsx
import { Select } from 'rmaloberti-p14-form-react-components';

return <Select placeholder="State" options={stateOptions} valueSetter={setState} selected={''} />;
```

## Read more

- **React** : [read more about React](https://reactjs.org/docs/getting-started.html)
- **NPM package** : [read more about this NPM package](https://www.npmjs.com/package/rmaloberti-p14-form-react-components)
