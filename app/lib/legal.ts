export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPage = {
  title: string;
  updated: string;
  intro?: string[];
  sections: LegalSection[];
};

const UPDATED = '3 September 2026';

export const LEGAL_PAGES: Record<string, LegalPage> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    updated: UPDATED,
    sections: [
      {
        heading: 'Who we are',
        paragraphs: [
          'Shrim Export (“we”, “us”) is an India-based agricultural sourcing company. This policy explains how we handle personal information submitted through this website, including enquiry and quotation forms.',
        ],
      },
      {
        heading: 'Information we collect',
        paragraphs: [
          'When you send an enquiry we collect the details you provide — such as name, company, email, phone or WhatsApp number, country, product requirement, quantity, destination, and any other information you include in the form or in correspondence.',
        ],
      },
      {
        heading: 'How we use it',
        paragraphs: [
          'We use this information to review your requirement, prepare a quotation or reply, coordinate sourcing and shipment discussions, and keep a record of correspondence. We do not sell your personal information.',
        ],
      },
      {
        heading: 'How it is shared',
        paragraphs: [
          'Enquiry details are sent by email to our business inbox so the team can respond. Service providers who host this website or transmit email may process data on our behalf. We may disclose information if required by law.',
        ],
      },
      {
        heading: 'Retention',
        paragraphs: [
          'We keep enquiry records for as long as needed to handle your request and for ordinary business, tax, or legal purposes, then delete or archive them in line with our internal records practice.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'You may request access, correction, or deletion of personal information we hold about you, subject to applicable law. Contact us using the details on the Contact page.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    updated: UPDATED,
    intro: [
      'Welcome to the website of Shrim Export (“Shrim Export”, “we”, “us” or “our”).',
      'By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please do not use the website.',
    ],
    sections: [
      {
        heading: '1. About our website',
        paragraphs: [
          'The Shrim Export website provides information about agricultural products, sourcing capabilities and services offered or being developed by Shrim Export.',
          'Information displayed on the website is provided for general business and informational purposes and does not, by itself, constitute a binding offer to sell.',
        ],
      },
      {
        heading: '2. Product information',
        paragraphs: [
          'Agricultural products are naturally subject to variations caused by season, origin, harvest conditions, availability and other factors.',
          'Product specifications displayed on this website may include indicative information regarding:',
        ],
        bullets: [
          'Variety',
          'Size',
          'Colour',
          'Grade',
          'Shelf life',
          'Packaging',
          'Origin',
          'Availability',
        ],
      },
      {
        heading: '',
        paragraphs: [
          'Actual specifications, quantities, packaging, quality parameters and commercial terms will be confirmed separately for each enquiry or order.',
          'Where applicable, final specifications shall be those agreed between Shrim Export and the buyer in writing.',
        ],
      },
      {
        heading: '3. Availability',
        paragraphs: [
          'Product availability may vary depending on:',
        ],
        bullets: [
          'Season',
          'Harvest conditions',
          'Market conditions',
          'Supplier availability',
          'Quantity requirements',
          'Destination requirements',
          'Regulatory requirements',
        ],
      },
      {
        heading: '',
        paragraphs: [
          'Submitting an enquiry does not guarantee product availability or acceptance of an order.',
        ],
      },
      {
        heading: '4. Quotations',
        paragraphs: [
          'Any quotation issued by Shrim Export shall be subject to the terms and validity period stated in that quotation.',
          'Unless expressly stated otherwise, website information does not constitute a quotation, price commitment or contractual offer.',
          'Prices may vary depending on product specifications, quantity, packaging, destination, shipping conditions, currency fluctuations and applicable charges.',
        ],
      },
      {
        heading: '5. Orders and contracts',
        paragraphs: [
          'A purchase order, quotation acceptance, sales contract, proforma invoice or other written commercial document may be required before an order is considered confirmed.',
          'The specific terms governing a transaction shall be those agreed in writing between Shrim Export and the buyer.',
        ],
      },
      {
        heading: '6. International trade terms',
        paragraphs: [
          'Where applicable, international transactions may be conducted under agreed Incoterms or other commercial terms.',
          'The applicable Incoterm, destination, shipping arrangements, responsibility for costs and transfer of risk shall be specified in the relevant commercial documentation.',
        ],
      },
      {
        heading: '7. Quality and inspection',
        paragraphs: [
          'Shrim Export aims to coordinate supply according to agreed product specifications.',
          'Where required and commercially agreed, quality inspection, laboratory testing, phytosanitary documentation or third-party inspection may be arranged.',
          'Any inspection or testing requirements must be agreed before shipment.',
        ],
      },
      {
        heading: '8. Destination requirements',
        paragraphs: [
          'Buyers are responsible for communicating applicable destination-country requirements that are specific to their import, distribution or end-use requirements.',
          'Where requirements are communicated to us, Shrim Export will seek to coordinate the supply and documentation process accordingly, subject to feasibility.',
          'Buyers remain responsible for obtaining any import licences, registrations, permits or approvals required in their destination market unless otherwise agreed in writing.',
        ],
      },
      {
        heading: '9. Packaging',
        paragraphs: [
          'Packaging will be based on the product, quantity, destination, handling requirements and specifications agreed between the parties.',
          'Custom, retail, bulk or private-label packaging may be subject to additional requirements, costs and minimum quantities.',
        ],
      },
      {
        heading: '10. Website content',
        paragraphs: [
          'We make reasonable efforts to keep the information on this website accurate and current.',
          'However, we do not warrant that all website content will always be complete, current or free from errors.',
          'We reserve the right to modify, update or remove website content at any time.',
        ],
      },
      {
        heading: '11. Intellectual property',
        paragraphs: [
          'Unless otherwise stated, all content on this website, including text, photographs, graphics, logos, designs, layouts, product presentations and other materials, is owned by or licensed to Shrim Export.',
          'No material may be reproduced, modified, distributed or commercially used without prior written permission.',
        ],
      },
      {
        heading: '12. Third-party links',
        paragraphs: [
          'The website may contain links to third-party websites or services.',
          'Such links are provided for convenience only. Shrim Export does not control and is not responsible for the content, availability, security or policies of third-party websites.',
        ],
      },
      {
        heading: '13. Limitation of liability',
        paragraphs: [
          'To the extent permitted by applicable law, Shrim Export shall not be liable for losses arising solely from reliance on general website information where no contractual relationship or specific written commercial agreement exists.',
          'Any liability arising from a confirmed commercial transaction shall be governed by the terms agreed in the relevant contract, quotation, purchase order or other applicable commercial documentation.',
        ],
      },
      {
        heading: '14. Force majeure',
        paragraphs: [
          'Shrim Export shall not be responsible for delays or failure to perform obligations caused by circumstances beyond reasonable control, including but not limited to natural disasters, extreme weather, crop failure, epidemics, governmental restrictions, strikes, transportation disruptions, port closures, regulatory changes, war, civil disturbance or other unforeseen events.',
        ],
      },
      {
        heading: '15. Governing law',
        paragraphs: [
          'These Terms & Conditions shall be governed by the laws of India, subject to any specific dispute-resolution or jurisdiction provisions contained in an applicable commercial agreement.',
        ],
      },
      {
        heading: '16. Changes to these terms',
        paragraphs: [
          'We may revise these Terms & Conditions from time to time. Updated terms will be published on this page with a revised “Last Updated” date.',
        ],
      },
      {
        heading: '17. Contact',
        paragraphs: [
          'For questions regarding these Terms & Conditions, please contact:',
          'Shrim Export\nFlat No. 101, Kotkar Heights,\nJoshi Nagar, Kopargaon,\nDist. Ahilyanagar, Maharashtra, India\nEmail: rameshwarijori@shrimexport.com\nPhone: +91 9371758355',
        ],
      },
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    updated: UPDATED,
    intro: [
      'The Shrim Export website may use cookies and similar technologies to improve website functionality, understand visitor behaviour and provide a better browsing experience.',
    ],
    sections: [
      {
        heading: '1. What are cookies?',
        paragraphs: [
          'Cookies are small text files stored on your device when you visit a website. They allow websites to recognise your browser and remember certain information.',
        ],
      },
      {
        heading: '2. How we may use cookies',
        paragraphs: ['Cookies may be used to:'],
        bullets: [
          'Enable essential website functionality',
          'Remember preferences',
          'Understand website traffic and usage',
          'Improve website performance',
          'Analyse how visitors interact with our website',
        ],
      },
      {
        heading: '3. Third-party cookies',
        paragraphs: [
          'Certain third-party services integrated into our website may place their own cookies or similar technologies.',
          'These services may include website analytics, embedded content, communication tools or other third-party functionality.',
          'Their use of cookies is governed by their respective privacy policies.',
        ],
      },
      {
        heading: '4. Managing cookies',
        paragraphs: [
          'You can manage or disable cookies through your browser settings.',
          'Please note that disabling certain cookies may affect the functionality or performance of parts of the website.',
        ],
      },
      {
        heading: '5. Updates',
        paragraphs: [
          'We may update this Cookie Policy when our website functionality or use of cookies changes.',
        ],
      },
      {
        heading: '6. Contact',
        paragraphs: [
          'For questions regarding this Cookie Policy, please contact:\nShrim Export\nEmail: rameshwarijori@shrimexport.com',
        ],
      },
    ],
  },
  disclaimer: {
    title: 'Website Disclaimer',
    updated: UPDATED,
    intro: [
      'The information provided on the Shrim Export website is intended for general informational and business purposes.',
    ],
    sections: [
      {
        heading: '1. Product information',
        paragraphs: [
          'Agricultural products are naturally variable. Product characteristics such as size, colour, weight, grade, shelf life, availability and quality may vary according to season, origin, harvest conditions and other factors.',
          'Information displayed on this website should therefore be considered indicative unless expressly confirmed in writing for a particular transaction.',
        ],
      },
      {
        heading: '2. Availability and pricing',
        paragraphs: [
          'Product availability and pricing may change without notice due to market conditions, seasonality, supply conditions, transportation costs, currency fluctuations and other factors.',
          'Website information does not constitute a binding price quotation or guarantee of availability.',
        ],
      },
      {
        heading: '3. Compliance',
        paragraphs: [
          'Destination-country requirements may differ according to product, market and intended use.',
          'Buyers are responsible for communicating relevant import requirements and obtaining any licences, registrations, permits or approvals required in their destination market, unless otherwise agreed in writing.',
        ],
      },
      {
        heading: '4. Third-party information',
        paragraphs: [
          'Where information from third parties is referenced or linked, Shrim Export does not guarantee the accuracy or completeness of such information and is not responsible for third-party content.',
        ],
      },
      {
        heading: '5. Website availability',
        paragraphs: [
          'We make reasonable efforts to maintain the website, but do not guarantee that it will always be available, uninterrupted, secure or free from errors.',
        ],
      },
      {
        heading: '6. No contractual offer',
        paragraphs: [
          'Information presented on this website is not, by itself, a contractual offer to sell products.',
          'Commercial terms, product specifications, pricing, quantities, packaging, delivery arrangements and other transaction terms shall be confirmed separately in writing.',
        ],
      },
      {
        heading: '7. Contact',
        paragraphs: [
          'For clarification regarding any information presented on this website, please contact:\nShrim Export\nEmail: rameshwarijori@shrimexport.com\nPhone: +91 9371758355',
        ],
      },
    ],
  },
  'cancellation-claims-refund': {
    title: 'Cancellation, Claims & Refund Policy',
    updated: UPDATED,
    intro: [
      'Shrim Export supplies agricultural products primarily on a business-to-business basis. Because agricultural products may be seasonal, perishable and prepared specifically according to buyer requirements, cancellation, replacement and refund terms may vary by transaction.',
    ],
    sections: [
      {
        heading: '1. Enquiries',
        paragraphs: [
          'Submitting an enquiry through our website does not create an obligation to purchase and may be withdrawn at any time before a quotation or order is accepted.',
        ],
      },
      {
        heading: '2. Confirmed orders',
        paragraphs: [
          'Once an order has been confirmed, cancellation may be subject to the terms agreed in the relevant quotation, purchase order, proforma invoice or sales contract.',
          'Where products have already been sourced, processed, packed, customised or prepared specifically for the buyer, cancellation may not be possible or may result in applicable costs.',
        ],
      },
      {
        heading: '3. Custom or private-label orders',
        paragraphs: [
          'Orders involving custom packaging, private labelling, special specifications or buyer-specific preparation may be non-cancellable once production or preparation has commenced, unless otherwise agreed in writing.',
        ],
      },
      {
        heading: '4. Perishable products',
        paragraphs: [
          'Fresh agricultural products are perishable and may not be eligible for return in the same manner as conventional consumer products.',
          'Any quality or quantity concern should be reported promptly with appropriate supporting evidence.',
        ],
      },
      {
        heading: '5. Quality claims',
        paragraphs: [
          'If a buyer believes that a shipment does not conform to the agreed specifications, the buyer should notify Shrim Export as soon as reasonably possible.',
          'We may request:',
        ],
        bullets: [
          'Photographs or videos',
          'Shipment and packaging details',
          'Lot or batch information',
          'Inspection reports',
          'Laboratory reports, where applicable',
          'Other documentation reasonably required to assess the claim',
        ],
      },
      {
        heading: '',
        paragraphs: [
          'Claims will be reviewed against the specifications and commercial terms agreed for the relevant order.',
        ],
      },
      {
        heading: '6. Refunds',
        paragraphs: [
          'Where a refund is agreed, the applicable amount and method of refund shall be determined based on the circumstances of the transaction and the applicable commercial agreement.',
          'Refunds, where approved, may be subject to deductions for costs already incurred, where permitted under the applicable agreement.',
        ],
      },
      {
        heading: '7. Third-party inspections',
        paragraphs: [
          'Where an independent inspection or certification has been agreed before shipment, the resulting inspection documentation may be considered when evaluating a quality-related claim.',
        ],
      },
      {
        heading: '8. Force majeure',
        paragraphs: [
          'Shrim Export shall not be responsible for losses or cancellations caused by circumstances beyond reasonable control, including extreme weather, crop failure, natural disasters, governmental restrictions, port disruptions, transportation interruptions or other force majeure events.',
        ],
      },
      {
        heading: '9. Contact',
        paragraphs: [
          'For cancellation or quality-related concerns, please contact us:\nShrim Export\nEmail: rameshwarijori@shrimexport.com\nPhone: +91 9371758355',
        ],
      },
    ],
  },
  'shipping-logistics': {
    title: 'Shipping & Logistics Policy',
    updated: UPDATED,
    intro: [
      'Shrim Export supplies agricultural products for domestic and international business requirements. Shipping and logistics arrangements vary depending on the product, quantity, destination, packaging and commercial terms agreed with the buyer.',
    ],
    sections: [
      {
        heading: '1. Shipping arrangements',
        paragraphs: [
          'International shipments may be arranged or coordinated according to the agreed commercial terms, including applicable Incoterms.',
          'Shipping arrangements may involve:',
        ],
        bullets: [
          'Inland transportation',
          'Export documentation',
          'Port handling',
          'Freight booking',
          'Container loading',
          'International transportation',
          'Destination-related arrangements, where applicable',
        ],
      },
      {
        heading: '',
        paragraphs: [
          "The exact scope of Shrim Export's responsibility will be specified in the applicable quotation or commercial agreement.",
        ],
      },
      {
        heading: '2. Lead times',
        paragraphs: ['Lead times vary depending on:'],
        bullets: [
          'Product availability',
          'Seasonality',
          'Quantity',
          'Product preparation',
          'Packaging requirements',
          'Quality inspection',
          'Documentation',
          'Port schedules',
          'Freight availability',
          'Destination requirements',
        ],
      },
      {
        heading: '',
        paragraphs: [
          'Any estimated dispatch or shipment date provided by Shrim Export is subject to these factors.',
        ],
      },
      {
        heading: '3. Fresh agricultural products',
        paragraphs: [
          'Fresh agricultural products are naturally perishable.',
          'For such products, shipment timing, handling, temperature conditions, packaging and transit duration are important considerations.',
          'The buyer and Shrim Export shall agree on applicable product specifications and handling requirements before shipment.',
        ],
      },
      {
        heading: '4. Shipping documentation',
        paragraphs: [
          'Depending on the product, destination and agreed commercial terms, shipment documentation may include applicable export and commercial documents.',
          'The specific documents provided will be confirmed for each transaction.',
        ],
      },
      {
        heading: '5. Destination requirements',
        paragraphs: [
          'The buyer is responsible for informing Shrim Export of relevant destination-country requirements before the order is confirmed.',
          'Import permits, registrations, duties, taxes, customs clearance and destination-country charges shall be the responsibility of the party specified in the applicable commercial terms.',
        ],
      },
      {
        heading: '6. Delays',
        paragraphs: [
          'Shipment schedules may be affected by circumstances outside our reasonable control, including weather, crop availability, port congestion, vessel schedules, customs procedures, regulatory changes and transportation disruptions.',
          'Where we become aware of a material delay, we will communicate relevant information to the buyer as reasonably possible.',
        ],
      },
      {
        heading: '7. Risk and title',
        paragraphs: [
          'Transfer of risk and title, where applicable, shall be determined by the Incoterm or other commercial terms agreed in writing between Shrim Export and the buyer.',
        ],
      },
      {
        heading: '8. Claims',
        paragraphs: [
          'Any shortage, visible damage, quality concern or other shipment-related issue should be communicated to Shrim Export as soon as reasonably possible after receipt or discovery.',
          'Supporting documentation, photographs, inspection reports and other relevant evidence may be requested to evaluate a claim.',
        ],
      },
      {
        heading: '9. Contact',
        paragraphs: [
          'For shipping and logistics enquiries:\nShrim Export\nEmail: rameshwarijori@shrimexport.com\nPhone: +91 9371758355',
        ],
      },
    ],
  },
};

export type LegalSlug = keyof typeof LEGAL_PAGES;

export const LEGAL_SLUGS = Object.keys(LEGAL_PAGES) as LegalSlug[];

export const LEGAL_NAV: { href: string; label: string }[] = [
  { href: '/legal/privacy-policy', label: 'Privacy Policy' },
  { href: '/legal/terms', label: 'Terms & Conditions' },
  { href: '/legal/cookie-policy', label: 'Cookie Policy' },
  { href: '/legal/disclaimer', label: 'Website Disclaimer' },
  { href: '/legal/cancellation-claims-refund', label: 'Cancellation, Claims, & Refund' },
  { href: '/legal/shipping-logistics', label: 'Shipping & Logistics' },
];
