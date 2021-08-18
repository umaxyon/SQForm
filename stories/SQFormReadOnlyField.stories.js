import React from 'react';

import {SQFormReadOnlyField as SQFormReadOnlyFieldComponent} from '../src';
import {SQFormStoryWrapper} from './components/SQFormStoryWrapper';
import {createDocsPage} from './utils/createDocsPage';
import getSizeProp from './utils/getSizeProp';
import markdown from '../notes/SQFormReadOnlyField.md';

export default {
  title: 'Components/SQFormReadOnlyField',
  component: SQFormReadOnlyFieldComponent,
  argTypes: {
    name: {table: {disable: true}},
  },
  parameters: {
    docs: {
      page: createDocsPage({markdown}),
    },
  },
};

const defaultArgs = {
  label: 'ReadOnly Field',
  name: 'readOnlyField',
};

const Template = ({initialValue = '', ...args}) => {
  return (
    <SQFormStoryWrapper initialValues={{[defaultArgs.name]: initialValue}}>
      <SQFormReadOnlyFieldComponent {...args} size={getSizeProp(args.size)} />
    </SQFormStoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  ...defaultArgs,
  initialValue: 'Hello world!',
};
WithInitialValue.parameters = {
  controls: {exclude: 'initialValue'},
};
