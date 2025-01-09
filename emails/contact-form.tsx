import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  message: string;
  service: string;
}

export const ContactFormEmail = ({
  name,
  email,
  company,
  phone,
  message,
  service,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          
          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={text}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={text}>{email}</Text>
          </Section>

          {company && (
            <Section style={section}>
              <Text style={label}>Company:</Text>
              <Text style={text}>{company}</Text>
            </Section>
          )}

          {phone && (
            <Section style={section}>
              <Text style={label}>Phone:</Text>
              <Text style={text}>{phone}</Text>
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>Service:</Text>
            <Text style={text}>{service}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={text}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.5',
  margin: '16px 0',
  padding: '0 48px',
};

const section = {
  padding: '0 48px',
};

const label = {
  color: '#666',
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  marginBottom: '8px',
};

const text = {
  color: '#333',
  fontSize: '14px',
  margin: '4px 0 24px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

export default ContactFormEmail;
