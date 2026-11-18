# Website verification

Verified with headless Microsoft Edge using Playwright, 18 November 2026.

- Layout: no horizontal overflow at 320, 390, 768 and 1440 pixels; desktop and mobile screenshots visually reviewed.
- Navigation: mobile menu opens and closes; service links preselect the matching enquiry service.
- Enquiries: required fields block incomplete previews; end dates before start dates are invalid; message preview contains the selected service and readable dates.
- Contact handoff: generated WhatsApp and email URLs contain the correct supplied recipient and encoded message. No real messages were sent during testing.
- Privacy: previewing an enquiry makes no network request and writes no local storage, session storage or cookies. Editing a field hides the previous draft.
- Images: supplied photos load; gallery and certificate dialogs open and close with the close button or Escape.
- Content: FAQ expands; privacy page loads and links back to the homepage.
- Progressive enhancement: contact links and navigation remain available with JavaScript disabled.
- Runtime: no page JavaScript errors or failed HTTP responses in the local test.

Availability, delivery through a visitor's external email/WhatsApp app, and actual care bookings must be confirmed directly with Anastasia.
