type Props = {
  status: 'idle' | 'sending' | 'success' | 'error';
  errorMessage?: string;
  successInbox?: string;
};

export default function InquiryFormFeedback({
  status,
  errorMessage,
  successInbox,
}: Props) {
  if (status === 'idle') return null;

  if (status === 'sending') {
    return (
      <p className="text-center text-sm font-semibold text-shrim-green" role="status">
        Sending your inquiry…
      </p>
    );
  }

  if (status === 'success') {
    return (
      <p className="text-center text-sm font-semibold text-shrim-green" role="status">
        Thank you — your inquiry was sent to{' '}
        {successInbox ? (
          <a href={`mailto:${successInbox}`} className="underline">
            {successInbox}
          </a>
        ) : (
          'our team'
        )}
        . We will reply to the email you provided.
      </p>
    );
  }

  return (
    <p className="text-center text-sm font-semibold text-red-600" role="alert">
      {errorMessage || 'Something went wrong. Please try again.'}
    </p>
  );
}
