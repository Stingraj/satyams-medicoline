# medicolinex

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-gpv9ykry)

## Email setup

Create a local environment file and set:

`RESEND_API_KEY=your_resend_api_key_here`

The server-side email handler in `api/send-email.ts` uses this variable and does not expose it to the frontend.
