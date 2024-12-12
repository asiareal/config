import React from 'react';
import { PostHogProvider } from 'posthog-js/react';

const options = {
  api_host: 'https://us.i.posthog.com',
};

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <PostHogProvider apiKey="phc_LtC9UZffjqeE4H1sylvX7gY0iTXilszwU5MEuVDxOWg" options={options}>
      {children}
    </PostHogProvider>
  );
}
