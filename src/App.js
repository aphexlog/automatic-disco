import { Amplify } from 'aws-amplify';

import { Authenticator, Tabs, TabItem, useTheme, TextField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  const { tokens } = useTheme();
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Tabs backgroundColor={tokens.colors.neutral[10]}>
            <TabItem
              title="Tab 1"
              color={tokens.colors.font.secondary}
              backgroundColor="transparent"
            >
              Content of Tab 1
            <TextField label="Input" size='large' borderRadius={'xxxl'} padding='large' width={1000}/>
            </TabItem>
            <TabItem
              title="Tab 2"
              color={tokens.colors.brand.secondary[60]}
              backgroundColor="transparent"
            >
              Content of Tab 2
      </TabItem>
    </Tabs>
          <p>Hello, {user.username}</p>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}